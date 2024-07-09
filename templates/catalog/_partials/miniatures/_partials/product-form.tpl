{if $customer.is_logged}
<div class="product-miniature__actions">
    {if $product.add_to_cart_url && ($product.quantity > 0 || $product.allow_oosp) && !$configuration.is_catalog}
        <form class="product-miniature__form" action="{$product.add_to_cart_url}" method="post">
          <input type="hidden" name="id_product" value="{$product.id}">
          <!--<input
            type="hidden"
            name="qty"
            value="{if isset($product.product_attribute_minimal_quantity) && $product.product_attribute_minimal_quantity != ''}{$product.product_attribute_minimal_quantity}{else}{$product.minimal_quantity}{/if}"
            class="form-control input-qty"
          >-->
        {block name='product_quantity'}
      <div class="product-quantity row mb-1 mx-n1 mt-n2 align-items-center">
        <div class="qty col-12 col-sm-auto mx-auto mt-2 px-1">
          <input
            type="number"
            name="qty"
            id="quantity_wanted"
            inputmode="numeric"
            pattern="[0-9]*"
            {if $product.quantity_wanted}
              value="{$product.quantity_wanted}"
              min="{$product.minimal_quantity}"
            {else}
              value="1"
              min="1"
            {/if}
            class="input-group input-touchspin"
            aria-label="{l s='Quantity' d='Shop.Theme.Actions'}"
          >
        </div>

        <div class="add col mt-2 px-1">
          <button
            class="btn btn-primary add-to-cart btn-block"
            data-button-action="add-to-cart"
            type="submit"
            {if !$product.add_to_cart_url}
              disabled
            {/if}
          >
            {l s='Add to cart' d='Shop.Theme.Actions'}
          </button>
        </div>

        <div class="col-auto mt-2 px-1">
          <div class="js-product-actions-buttons">
            <div class="row mx-n1 mt-n2 align-items-center">
              {hook h='displayProductActions' product=$product}
            </div>
          </div>
        </div>
      </div>

    {/block}
          <button
            class="btn btn-primary btn-block add-to-cart"
            data-button-action="add-to-cart"
            type="submit"
            {if !$product.add_to_cart_url}
                disabled
            {/if}
          >
            {l s='Add to cart' d='Shop.Theme.Actions'}
          </button>
      </form>
    {else}
        <a href="{$product.canonical_url}"
           class="btn btn-secondary btn-block"
        > {l s='View' d='Shop.Theme.Actions'}
        </a>
    {/if}
</div>
{/if}
