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
<div id="_desktop_contact_link" class="col">
  <div id="contact-link">
    {if $contact_infos.phone}
      {* [1][/1] is for a HTML tag. *}
      {l
        s='Call us: [1]%phone%[/1]'
        sprintf=[
          '[1]' => "<a href='tel:{$contact_infos['phone']|replace:' ':''}'>",
          '[/1]' => '</a>',
          '%phone%' => $contact_infos.phone
        ]
        d='Shop.Theme.Global'
      }

      <ul class="mobile-menu">
        <a href="{$urls.pages.authentication}"><li>{l s='Register' d='Shop.Theme.Global'}</li></a>
        <a href="{$urls.pages.contact}"><li>{l s='Contact us' d='Shop.Theme.Global'}</li></a>
      </ul>
    {else}
    
    

    <div class="col header-top__block header-top__block--logo" style="margin-top: 20px; margin-bottom: 10px;">
        {images_block webpEnabled=$webpEnabled}
            <img src="/modules/ps_imageslider/images/f01f038628e18d349d2093a4a727ca41bac585fb_farm_to_store_green.png"
              width="80%"
              class="img-farmtostore img-fluid"
              alt="Farm to Store">
        {/images_block}
    </div>
    {/if}
  </div>
</div>
