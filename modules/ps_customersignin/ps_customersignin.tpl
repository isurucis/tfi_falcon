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
{if $logged}
  <div class="d-none d-md-block col-md-2 col header-top__block header-top__block--logo">
      {images_block webpEnabled=$webpEnabled}
          <img src="/modules/ps_imageslider/images/f01f038628e18d349d2093a4a727ca41bac585fb_farm_to_store_green.png"
                      width="150px"
                  class="img-farmtostore img-fluid"
                  alt="Farm to Store">
      {/images_block}
  </div>
{else}
  <div class="d-none d-md-block col-md-2 col header-top__block header-top__block--logo register-now">
    <a href="https://shop.etropicalfish.com/b2b-customer-create">{l s='Register Now' d='Shop.Theme.Global'}</a>
  </div>
{/if}
<div class="col flex-grow-0 header-top__block header-top__block--user">
  <a
    class="header-top__link"
    rel="nofollow"
    href="{$urls.pages.authentication}?back={$urls.current_url|urlencode}"
    {if $logged}
      title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
    {else}
      title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}"
    {/if}
  >
    <div class="header-top__icon-container">
      <span class="header-top__icon material-icons">person</span>
    </div>
  </a>
</div>
