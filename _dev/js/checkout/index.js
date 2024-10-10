/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
import $ from 'jquery';
import prestashop from 'prestashop';

function setUpCheckout() {
  $(prestashop.themeSelectors.checkout.termsLink).on('click', (event) => {
    event.preventDefault();
    let url = $(event.target).attr('href');

    if (url) {
      // TODO: Handle request if no pretty URL
      url += '?content_only=1';
      $.get(url, (content) => {
        $(prestashop.themeSelectors.modal)
          .find(prestashop.themeSelectors.modalContent)
          .html($(content).find('.page-cms').contents());
      }).fail((resp) => {
        prestashop.emit('handleError', { eventType: 'clickTerms', resp });
      });
    }

    $(prestashop.themeSelectors.modal).modal('show');
  });

  $(prestashop.themeSelectors.checkout.giftCheckbox).on('click', () => {
    $('#gift').slideToggle();
  });
}

$(document).ready(() => {
  if ($('body#checkout').length === 1) {
    setUpCheckout();
  }

  prestashop.on('updatedDeliveryForm', (params) => {
    if (typeof params.deliveryOption === 'undefined' || params.deliveryOption.length === 0) {
      return;
    }
    // Hide all carrier extra content ...
    $(prestashop.themeSelectors.checkout.carrierExtraContent).hide();
    // and show the one related to the selected carrier
    params.deliveryOption.next(prestashop.themeSelectors.checkout.carrierExtraContent).show();
  });
  prestashop.on('changedCheckoutStep', (params) => {
    if (typeof params.event.currentTarget !== 'undefined') {
      $('.collapse', params.event.currentTarget).not('.show').not('.collapse .collapse').collapse('show');
    }
  });
});

$(document).on('change', '.checkout-option input[type="radio"]', (event) => {
  const $target = $(event.currentTarget);
  const $block = $target.closest('.checkout-option');
  const $relatedBlocks = $block.parent();

  $relatedBlocks.find('.checkout-option').removeClass('selected');
  $block.addClass('selected');
});

$(document).on('click', '.js-checkout-step-header', (event) => {
  const stepIdentifier = $(event.currentTarget).data('identifier');
  $(`#${stepIdentifier}`).addClass('-current');
  $(`#content-${stepIdentifier}`).collapse('show').scrollTop();
});
$(document).ready(function() {
  $('#clear-cart-btn').on('click', function() {
      if (confirm('Are you sure you want to clear the cart?')) {
          $.ajax({
              type: 'GET',
              url: prestashop.urls.pages.cart,  // URL to get cart data
              dataType: 'json',
              success: function(response) {
                  // Check if there are products in the cart
                  if (response.cart && response.cart.products.length > 0) {
                      // Function to remove each product from the cart one by one
                      var removeProduct = function(index) {
                          if (index < response.cart.products.length) {
                              var product = response.cart.products[index];
                              $.ajax({
                                  type: 'POST',
                                  url: prestashop.urls.pages.cart,
                                  data: {
                                      ajax: 1,
                                      action: 'update',
                                      id_product: product.id_product,
                                      id_product_attribute: product.id_product_attribute || 0,
                                      id_customization: product.id_customization || 0,
                                      quantity: 0  // Set quantity to 0 to remove the product
                                  },
                                  success: function() {
                                      // Recursively remove the next product
                                      removeProduct(index + 1);
                                  },
                                  error: function(error) {
                                      console.log('Error removing product:', error);
                                  }
                              });
                          } else {
                              // Reload the page once all items are removed
                              location.reload();
                          }
                      };

                      // Start the removal process with the first product
                      removeProduct(0);
                  } else {
                      alert('Your cart is already empty.');
                  }
              },
              error: function(error) {
                  console.log('Error fetching cart data:', error);
              }
          });
      }
  });
});

