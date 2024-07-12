{block name='product_price_and_shipping'}
  {if $customer.is_logged}
    {if $product.show_price}
      <div class="product-miniature__pricing text-right">
        {if $product.has_discount}
          <div class="product-miniature__pricing_old_price">{hook h='displayProductPriceBlock' product=$product type="old_price"}</div>
          <div class="product-miniature__pricing_price"><span class="price price--regular mr-1" aria-label="{l s='Regular price' d='Shop.Theme.Catalog'}">{$product.regular_price}</span></div>
        {/if}

        <div>
          <div class="product-miniature__pricing_before_price">{hook h='displayProductPriceBlock' product=$product type="before_price"}</div>

          <div class="product-miniature__pricing_price"><span class="price" aria-label="{l s='Price' d='Shop.Theme.Catalog'}">{$product.price}</span></div>

          <div class="product-miniature__pricing_unit_price">{hook h='displayProductPriceBlock' product=$product type='unit_price'}</div>

          <div class="product-miniature__pricing_weight">{hook h='displayProductPriceBlock' product=$product type='weight'}</div>
        </div>
      </div>
    {/if}
  {/if}
<p>
{$product->available_now}
</p>
{/block}
