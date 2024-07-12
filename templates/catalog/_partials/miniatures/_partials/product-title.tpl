{block name='product_name'}
  {$headingTag = 'h2'}
  {if $page.page_name == 'index'}
    {$headingTag = 'h3'}
  {/if}

  <div>
    {if $customer.is_logged}
        {if $product.quantity > 0}
    <p class="product-miniature__instock mb-2">Available stock: <span class="product-miniature__instock-count mb-2">{$product.quantity}</span></p>
        {else}
    <p class="product-miniature__outofstock mb-2">Out of stock</p>
        {/if}
    {/if}

    <div style="clear: both;"></div>
  </div>



  
  <{$headingTag} class="h5 product-miniature__title mb-2">
    <a class="text-reset" href="{$product.url}">{$product.name}</a>
    <br>
    <p class="product-miniature__sku-label mb-2">SKU:<span class="product-miniature__sku-number mb-2">{$product.reference|escape:'htmlall':'UTF-8'}</span></p>
      {foreach from=$product.features item=feature name=features}
        {if $feature.id_feature == 3}
        <h5 class="product-miniature__scientificname mb-2" >
        {$feature.value|escape:'htmlall':'UTF-8'}
        </h5>
        {/if}
        {if $feature.id_feature == 4}
        <p class="product-miniature__variant mb-2">
        {$feature.value|escape:'htmlall':'UTF-8'}
        </p>
        {/if}
      {foreachelse}
      {/foreach}
      {if $product->available_now}
        <span class="available-now">{$product->available_now}</span>
      {/if}
  </{$headingTag}>



{/block}
