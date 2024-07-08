{block name='product_name'}
  {$headingTag = 'h2'}
  {if $page.page_name == 'index'}
    {$headingTag = 'h3'}
  {/if}
  <{$headingTag} class="h5 product-miniature__title mb-2">
	<p>SKU:{$product.reference|escape:'htmlall':'UTF-8'}</p>
      <a class="text-reset" href="{$product.url}">{$product.name}</a>
      <br>
      {foreach from=$product.features item=feature name=features}
        {if $feature.id_feature == 3}
        <h5>
        {$feature.value|escape:'htmlall':'UTF-8'}
        </h5>
        {/if}
        {if $feature.id_feature == 4}
        <p>
        {$feature.value|escape:'htmlall':'UTF-8'}
        </p>
        {/if}
      {foreachelse}
      {/foreach}
      {if $product.quantity > 0}
	<p>Available stock: {$product.quantity}</p>
      {else}
	<p>Out of stock</p>
      {/if}
  </{$headingTag}>
{/block}
