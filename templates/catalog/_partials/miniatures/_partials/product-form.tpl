{if $customer.is_logged}
<div class="product-miniature__actions">
    {if $product.add_to_cart_url && ($product.quantity > 0 || $product.allow_oosp) && !$configuration.is_catalog}
        <form class="product-miniature__form" action="{$product.add_to_cart_url}" method="post">
          <input type="hidden" name="id_product" value="{$product.id}">
          <!-- Quantity Input Group -->
          <div class="input-group quantity-input-group" style="width: auto; display: inline-flex; align-items: center;">
              <button type="button" class="btn btn-outline-secondary quantity-button quantity-decrement" style="margin-right: 5px;">-</button>
              <input
                type="number"
                name="qty"
                value="{if isset($product.product_attribute_minimal_quantity) && $product.product_attribute_minimal_quantity != ''}{$product.product_attribute_minimal_quantity}{else}{$product.minimal_quantity}{/if}"
                min="{if isset($product.product_attribute_minimal_quantity) && $product.product_attribute_minimal_quantity != ''}{$product.product_attribute_minimal_quantity}{else}{$product.minimal_quantity}{/if}"
                class="form-control input-qty"
                style="width: 60px; text-align: center;"
              >
              <button type="button" class="btn btn-outline-secondary quantity-button quantity-increment" style="margin-left: 5px;">+</button>
          </div>
          <!-- Add to Cart Button -->
          <button
            class="btn btn-primary btn-block add-to-cart"
            data-button-action="add-to-cart"
            type="submit"
            {if !$product.add_to_cart_url}
                disabled
            {/if}
            style="display: inline-block; margin-left: 10px;"
          >
            {l s='Add to cart' d='Shop.Theme.Actions'}
          </button>
      </form>
    {else}
        <a href="{$product.canonical_url}"
           class="btn btn-secondary btn-block"
           style="display: inline-block;"
        > {l s='View' d='Shop.Theme.Actions'}
        </a>
    {/if}
</div>
{/if}

<script>
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quantity-button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            var input = button.parentElement.querySelector('.input-qty');
            var currentValue = parseInt(input.value);
            var minValue = parseInt(input.getAttribute('min'));
            
            if (button.classList.contains('quantity-decrement')) {
                if (currentValue > minValue) {
                    input.value = currentValue - 1;
                }
            } else if (button.classList.contains('quantity-increment')) {
                input.value = currentValue + 1;
            }
        });
    });
});
</script>

<style>
.quantity-input-group {
    display: inline-flex;
    align-items: center;
}

.quantity-button {
    padding: 5px 10px;
    cursor: pointer;
}

.input-qty {
    width: 60px;
    text-align: center;
}

.add-to-cart {
    margin-left: 10px;
}
</style>
