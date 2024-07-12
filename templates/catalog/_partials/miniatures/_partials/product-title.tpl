{block name='product_name'}
  {$headingTag = 'h2'}
  {if $page.page_name == 'index'}
    {$headingTag = 'h3'}
  {/if}

  <div>
    
        {if $product.quantity > 0}
          {if $customer.is_logged}
            <p class="product-miniature__instock mb-2">Available stock: <span class="product-miniature__instock-count mb-2">{$product.quantity}</span></p>
          {else}
            <p class="product-miniature__instock mb-2">Stocks Available</p>
          {/if}
        {else}
          <p class="product-miniature__outofstock mb-2">Out of stock</p>
        {/if}
    


    {foreach from=$product.features item=feature name=features}
        {if $feature.id_feature == 5}

        {$country_code = $feature.value}
        
        {/if}
        {if $feature.id_feature == 9}

        {$country_name = $feature.value}
        
        {/if}
      {foreachelse}
    {/foreach}

    <div class="miniature__countryflag_wrapper">
    <img class="product-miniature__countryflag" 
      {if isset($country_code)}
      src="https://flagcdn.com/{$country_code|escape:'htmlall':'UTF-8'}.svg"
      {/if}
    
      {if isset($country_name)}
      title="{$country_name|escape:'htmlall':'UTF-8'}"
      {/if}
    width="30">
    </div>

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
