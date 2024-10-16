import $ from 'jquery';
import prestashop from 'prestashop';
import debounce from '@js/theme/utils/debounce';

prestashop.cart = prestashop.cart || {};

prestashop.cart.active_inputs = null;

const spinnerSelector = 'input[name="product-quantity-spin"]';
let hasError = false;
let isUpdateOperation = false;
let errorMsg = '';

const CheckUpdateQuantityOperations = {
  switchErrorStat: () => {
    /**
     * if errorMsg is not empty or if notifications are shown, we have error to display
     * if hasError is true, quantity was not updated : we don't disable checkout button
     */
    const $checkoutBtn = $(prestashop.themeSelectors.checkout.btn);

    if ($(prestashop.themeSelectors.notifications.dangerAlert).length || (errorMsg !== '' && !hasError)) {
      $checkoutBtn.addClass('disabled');
    }

    if (errorMsg !== '') {
      const strError = `
        <article class="alert alert-danger" role="alert" data-alert="danger">
          <ul class="mb-0">
            <li>${errorMsg}</li>
          </ul>
        </article>
      `;
      $(prestashop.themeSelectors.notifications.container).html(strError);
      errorMsg = '';
      isUpdateOperation = false;
      if (hasError) {
        // if hasError is true, quantity was not updated : allow checkout
        $checkoutBtn.removeClass('disabled');
      }
    } else if (!hasError && isUpdateOperation) {
      hasError = false;
      isUpdateOperation = false;
      $(prestashop.themeSelectors.notifications.container).html('');
      $checkoutBtn.removeClass('disabled');
    }
  },
  checkUpdateOperation: (resp) => {
    /**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
    const { hasError: hasErrorOccurred, errors: errorData } = resp;
    hasError = hasErrorOccurred ?? false;
    const errors = errorData ?? '';

    // 1.7.2.x returns errors as string, 1.7.3.x returns array
    if (errors instanceof Array) {
      errorMsg = errors.join(' ');
    } else {
      errorMsg = errors;
    }

    isUpdateOperation = true;
  },
};

/**
 * Attach Bootstrap TouchSpin event handlers
 */
 function createSpin() {
  $.each($(spinnerSelector), (index, spinner) => {
    let minValue = parseInt($(spinner).attr('min'), 10);
    let boxqty = parseInt($(spinner).attr('case_qty'));
    let stock = parseInt($(spinner).attr('stk'));
    let id = $(spinner).attr('data-product-id');
    updateCase(id, $(spinner).val(), minValue, boxqty);

    // Initialize the TouchSpin plugin with default settings
    $(spinner).TouchSpin({
      verticalupclass: 'material-icons touchspin-up',
      verticaldownclass: 'material-icons touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
      buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
      step: minValue,
      min: minValue,
      max: stock,
    });

    // Event listener for starting the spin
    $(spinner).on('touchspin.on.startspin', function (e) {
      let currentValue = parseInt($(spinner).val(), 10);

      // If current value is greater than or equal to boxqty, set step to boxqty for increasing
      if (currentValue >= boxqty) {
        $(spinner).trigger("touchspin.updatesettings", { step: boxqty });
      } else if (currentValue < boxqty) {
        $(spinner).trigger("touchspin.updatesettings", { step: minValue });
      }

      // Custom function to handle case updates (assuming you have it defined elsewhere)
      updateCase(id, $(spinner).val(), minValue, boxqty);
    });

    // Event listener for stopping the spin
    $(spinner).on('touchspin.on.stopspin', function (e) {
      let currentValue = parseInt($(spinner).val(), 10);
      let newStep = currentValue >= boxqty ? boxqty : minValue;

      // Update the step value to the calculated newStep
      $(spinner).trigger("touchspin.updatesettings", { step: newStep });

      // Custom function to handle case updates (assuming you have it defined elsewhere)
      updateCase(id, $(spinner).val(), minValue, boxqty);
    });
  });

  // Call any additional functions after spin setup
  CheckUpdateQuantityOperations.switchErrorStat();
}

// Update the case value based on quantity input
function updateCase(id, val, minval, caseqty) {
  let minValue = parseInt(minval);
  let quantityValue = parseInt(val);
  let case_qty = parseInt(caseqty);
  //alert(quantityValue);
  //alert(quantityValue);
  let numberOfCases = Math.floor(quantityValue / case_qty); // Calculate number of cases
  console.log(id);

  let priceBoxCalc = $('#price_box_calc_' + id);
  

  // Update the case value in the UI
  priceBoxCalc.text(numberOfCases + ' Case' + (numberOfCases > 1 ? 's' : ''));
}

const preventCustomModalOpen = (event) => {
  if (window.shouldPreventModal) {
    event.preventDefault();

    return false;
  }

  return true;
};

$(() => {
  const productLineInCartSelector = prestashop.themeSelectors.cart.productLineQty;
  const promises = [];

  prestashop.on('updateCart', () => {
    $(prestashop.themeSelectors.cart.quickview).modal('hide');
    $('body').addClass('cart-loading');
  });

  prestashop.on('updatedCart', () => {
    window.shouldPreventModal = false;

    $(prestashop.themeSelectors.product.customizationModal).on('show.bs.modal', (modalEvent) => {
      preventCustomModalOpen(modalEvent);
    });

    createSpin();
    $('body').removeClass('cart-loading');
  });

  createSpin();

  const $body = $('body');

  function isTouchSpin(namespace) {
    return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
  }

  function shouldIncreaseProductQuantity(namespace) {
    return namespace === 'on.startupspin';
  }

  function findCartLineProductQuantityInput($target) {
    const $input = $target.parents(prestashop.themeSelectors.cart.touchspin).find(productLineInCartSelector);

    if ($input.is(':focus')) {
      return null;
    }

    return $input;
  }

  function camelize(subject) {
    const actionTypeParts = subject.split('-');
    let i;
    let part;
    let camelizedSubject = '';

    for (i = 0; i < actionTypeParts.length; i += 1) {
      part = actionTypeParts[i];

      if (i !== 0) {
        part = part.substring(0, 1).toUpperCase() + part.substring(1);
      }

      camelizedSubject += part;
    }

    return camelizedSubject;
  }

  function parseCartAction($target, namespace) {
    if (!isTouchSpin(namespace)) {
      return {
        url: $target.attr('href'),
        type: camelize($target.data('link-action')),
      };
    }

    const $input = findCartLineProductQuantityInput($target);

    let cartAction = {};

    if ($input) {
      if (shouldIncreaseProductQuantity(namespace)) {
        cartAction = {
          url: $input.data('up-url'),
          type: 'increaseProductQuantity',
        };
      } else {
        cartAction = {
          url: $input.data('down-url'),
          type: 'decreaseProductQuantity',
        };
      }
    }

    return cartAction;
  }

  const abortPreviousRequests = () => {
    let promise;
    while (promises.length > 0) {
      promise = promises.pop();
      promise.abort();
    }
  };

  const getTouchSpinInput = ($button) => $($button.parents(prestashop.themeSelectors.cart.touchspin).find('input'));

  $(prestashop.themeSelectors.product.customizationModal).on('show.bs.modal', (modalEvent) => {
    preventCustomModalOpen(modalEvent);
  });

  const handleCartAction = (event) => {
    event.preventDefault();
    window.shouldPreventModal = true;

    const $target = $(event.currentTarget);
    const { dataset } = event.currentTarget;

    const cartAction = parseCartAction($target, event.namespace);
    const requestData = {
      ajax: '1',
      action: 'update',
    };

    if (typeof cartAction === 'undefined') {
      return;
    }

    $.ajax({
      url: cartAction.url,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: (jqXHR) => {
        promises.push(jqXHR);
      },
    })
      .then((resp) => {
        const $quantityInput = getTouchSpinInput($target);
        CheckUpdateQuantityOperations.checkUpdateOperation(resp);
        $quantityInput.val(resp.quantity);

        // Refresh cart preview
        prestashop.emit('updateCart', {
          reason: dataset,
          resp,
        });
      })
      .fail((resp) => {
        prestashop.emit('handleError', {
          eventType: 'updateProductInCart',
          resp,
          cartAction: cartAction.type,
        });
      });
  };

  $body.on('click', prestashop.themeSelectors.cart.actions, handleCartAction);

  function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
    abortPreviousRequests();
    window.shouldPreventModal = true;

    return $.ajax({
      url: updateQuantityInCartUrl,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: (jqXHR) => {
        promises.push(jqXHR);
      },
    })
      .then((resp) => {
        CheckUpdateQuantityOperations.checkUpdateOperation(resp);

        $target.val(resp.quantity);
        const dataset = ($target && $target.dataset) ? $target.dataset : resp;

        // Refresh cart preview
        prestashop.emit('updateCart', {
          reason: dataset,
          resp,
        });
      })
      .fail((resp) => {
        prestashop.emit('handleError', {
          eventType: 'updateProductQuantityInCart',
          resp,
        });
      });
  }

  function getQuantityChangeType($quantity) {
    return $quantity > 0 ? 'up' : 'down';
  }

  function getRequestData(quantity) {
    return {
      ajax: '1',
      qty: Math.abs(quantity),
      action: 'update',
      op: getQuantityChangeType(quantity),
    };
  }

  function updateProductQuantityInCart(event) {
    const $target = $(event.currentTarget);
    const updateQuantityInCartUrl = $target.data('update-url');
    const baseValue = $target.attr('value');

    // There should be a valid product quantity in cart
    const targetValue = $target.val();

    /* eslint-disable */
    if (targetValue != parseInt(targetValue, 10) || targetValue < 0 || Number.isNaN(targetValue)) {
      window.shouldPreventModal = false;
      $target.val(baseValue);
      return;
    }
    /* eslint-enable */

    // There should be a new product quantity in cart
    const qty = targetValue - baseValue;

    if (qty === 0) {
      return;
    }

    if (targetValue === '0') {
      $target.closest('.product-line-actions').find('[data-link-action="delete-from-cart"]').click();
    } else {
      $target.attr('value', targetValue);
      sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, getRequestData(qty), $target);
    }
  }

  $body.on('touchspin.on.stopspin', spinnerSelector, debounce(updateProductQuantityInCart));

  $body.on(
    'focusout keyup',
    productLineInCartSelector,
    (event) => {
      if (event.type === 'keyup') {
        if (event.keyCode === 13) {
          isUpdateOperation = true;
          updateProductQuantityInCart(event);
        }

        return false;
      }

      if (!isUpdateOperation) {
        updateProductQuantityInCart(event);
      }

      return false;
    },
  );

  $body.on(
    'click',
    prestashop.themeSelectors.cart.discountCode,
    (event) => {
      event.stopPropagation();
      event.preventDefault();

      const $code = $(event.currentTarget);
      const $discountInput = $('[name=discount_name]');
      const $discountForm = $discountInput.closest('form');

      $discountInput.val($code.text());
      // Show promo code field
      $discountForm.trigger('submit');

      return false;
    },
  );
});
