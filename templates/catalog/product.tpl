{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
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
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}
{extends file=$layout}

{block name='head' append}
  {if $product.show_price}
    <meta property="product:pretax_price:amount" content="{$product.price_tax_exc}">
    <meta property="product:pretax_price:currency" content="{$currency.iso_code}">
    <meta property="product:price:amount" content="{$product.price_amount}">
    <meta property="product:price:currency" content="{$currency.iso_code}">
  {/if}
  {if isset($product.weight) && ($product.weight != 0)}
  <meta property="product:weight:value" content="{$product.weight}">
  <meta property="product:weight:units" content="{$product.weight_unit}">
  {/if}
{/block}

{block name='head' prepend}
  {if $product.default_image}
    <link rel="preload" href="{$product.default_image.bySize.large_default.url}" as="image">
  {/if}
{/block}

{block name='content'}

  <section id="main">

    <div class="row product-container js-product-container">
      <div class="col-md-5 mb-4">
        {block name='page_content_container'}
            {block name='page_content'}
              <div class="position-relative">
                {include file='catalog/_partials/product-flags.tpl'}

                {block name='product_cover_thumbnails'}
                  {include file='catalog/_partials/product-cover-thumbnails.tpl'}
                {/block}
              </div>
            {/block}
        {/block}
        </div>
        <div class="col-md-7 mb-4">
          {block name='page_header_container'}
            {block name='page_header'}
              <h1 class="h1 pdp_productname">{block name='page_title'}{$product.name}{/block}</h1>
            {/block}
          {/block}
          
          <!-- h4>{$product.delivery_in_stock|escape:'htmlall':'UTF-8'}</h4 -->


          <div style="display: block">
            <div style="float: left;" class="product-miniature__sku-label mb-2">
              SKU : <span class="product-miniature__sku-number mb-2">{$product.reference|escape:'htmlall':'UTF-8'}</span>
            </div>
            <div style="float: right;" class="h2 pdp_scientificname">
              {foreach from=$product.features item=feature name=features}
                {if $feature.id_feature == 3}
                  <span>{$feature.value|escape:'htmlall':'UTF-8'}</span>
                {/if}
              {foreachelse}
              {/foreach}
            </div>
            <div style="clear: both;"></div>
          </div>


          {foreach from=$product.features item=feature name=features}
            {if $feature.id_feature == 4}
              <h4 class="h4 pdp_productsize product-title">{$feature.value|escape:'htmlall':'UTF-8'}</h4>
            {/if}
            {if $feature.id_feature == 5}
              <div><img src="https://flagcdn.com/{$feature.value|escape:'htmlall':'UTF-8'}.svg" class="product-miniature__countryflag" width="30"></div>
            {/if}
            {if $feature.id_feature == 9}
              <div>{$feature.value|escape:'htmlall':'UTF-8'}</div>
            {/if}
          {foreachelse}
          {/foreach}




          <div>{$product->available_now}</div>

          {if $customer.is_logged}
            {block name='product_prices'}
              {include file='catalog/_partials/product-prices.tpl'}
            {/block}
            {if $product.quantity > 0}
              <p>In stock: {$product.quantity}</p>
            {else}
              <p>Out of stock</p>
            {/if}
          {else}
             {if $product.quantity > 0}
              <p>Stock Available</p>
            {else}
              <p>Out of stock</p>
            {/if}
          {/if}
          <div class="product-information ">
            {block name='product_description_short'}
              <div id="product-description-short-{$product.id}" class="product-description cms-content">{$product.description_short nofilter}</div>
            {/block}

            {if $product.is_customizable && count($product.customizations.fields)}
              {block name='product_customization'}
                {include file="catalog/_partials/product-customization.tpl" customizations=$product.customizations}
              {/block}
            {/if}

            {block name='product_form'}
              {include file='catalog/_partials/miniatures/_partials/product-form.tpl'}
            {/block} 
            
            {if $customer.is_logged}
            <div class="product-actions js-product-actions">
              {block name='product_buy'}
                <form action="{$urls.pages.cart}" method="post" id="add-to-cart-or-refresh">
                  <input type="hidden" name="token" value="{$static_token}">
                  <input type="hidden" name="id_product" value="{$product.id}" id="product_page_product_id">
                  <input type="hidden" name="id_customization" value="{$product.id_customization}" id="product_customization_id" class="js-product-customization-id">

                  {block name='product_variants'}
                    {include file='catalog/_partials/product-variants.tpl'}
                  {/block}

                  {block name='product_pack'}
                    {if $packItems}
                      <section class="product-pack">
                        <p class="h4">{l s='This pack contains' d='Shop.Theme.Catalog'}</p>
                        <div class="card-group-vertical mb-4">
                          {foreach from=$packItems item="product_pack"}
                            {block name='product_miniature'}
                              {include file='catalog/_partials/miniatures/pack-product.tpl' product=$product_pack showPackProductsPrice=$product.show_price}
                            {/block}
                          {/foreach}
                        </div>
                    </section>
                    {/if}
                  {/block}

                  {block name='product_discounts'}
                    {include file='catalog/_partials/product-discounts.tpl'}
                  {/block}

                  {**
                  *{block name='product_add_to_cart'}
                  *  {include file='catalog/_partials/product-add-to-cart.tpl'}
                  *{/block}
                  {**

                  {block name='product_additional_info'}
                    {include file='catalog/_partials/product-additional-info.tpl'}
                  {/block}

                  {* Input to refresh product HTML removed, block kept for compatibility with themes *}
                  {block name='product_refresh'}{/block}
                </form>
              {/block}
            </div>
            {/if}

            {block name='hook_display_reassurance'}
              {hook h='displayReassurance'}
            {/block}

        </div>
      </div>
    </div>
    {include file="catalog/_partials/product-tabs.tpl"}

    {block name='product_footer'}
      {hook h='displayFooterProduct' product=$product category=$category}
    {/block}

    {block name='product_accessories'}
      {if $accessories}
        {include file='catalog/_partials/product-accessories.tpl' products=$accessories}
      {/if}
    {/block}

    {block name='product_images_modal'}
      {include file='catalog/_partials/product-images-modal.tpl'}
    {/block}

    {block name='page_footer_container'}
      <footer class="page-footer">
        {block name='page_footer'}
          <!-- Footer content -->
        {/block}
      </footer>
    {/block}
  </section>

{/block}
