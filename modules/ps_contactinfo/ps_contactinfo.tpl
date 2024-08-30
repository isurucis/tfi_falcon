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

<div class="col-md-3 col-12 mb-lg-4">

  <div class="d-flex align-items-center mb-3 justify-content-between position-relative">
    <span class="h4 mb-0 footer_sub_menu_header">{l s='Store information' d='Shop.Theme.Global'}</span>
    <a href="#footer_contact_list" class="icon-collapse stretched-link text-reset d-block d-md-none" data-toggle="collapse">
      <i class="material-icons d-block"></i>
    </a>
  </div>

  <div class="collapse d-md-block" id="footer_contact_list">
    {$contact_infos.address.formatted nofilter}
    {if $contact_infos.phone}
      <br>
      {* [1][/1] is for a HTML tag. *}
      {l s='Call us: [1]%phone%[/1]'
        sprintf=[
        '[1]' => "<a href='tel:{$contact_infos['phone']|replace:' ':''}'>",
        '[/1]' => '</a>',
        '%phone%' => $contact_infos.phone
        ]
        d='Shop.Theme.Global'
      }
    {/if}
    {if $contact_infos.fax}
      <br>
      {* [1][/1] is for a HTML tag. *}
      {l
        s='Fax: [1]%fax%[/1]'
        sprintf=[
          '[1]' => '<span>',
          '[/1]' => '</span>',
          '%fax%' => $contact_infos.fax
        ]
        d='Shop.Theme.Global'
      }
    {/if}
    {if $contact_infos.email && $display_email}
      <br>
        {mailto address=$contact_infos.email encode="javascript"}
    {/if}
  </div>

  <div>
    <div id="ps_checkout-payment-method-logo-block-container">
      <div id="ps_checkout-payment-method-logo-block-title">
        <img id="ps_checkout-payment-method-logo-block-img" alt="100% secure payments" src="/modules/ps_checkout/views/img/lock_checkout.svg">100% secure payments
      </div>
      <div id="ps_checkout-payment-method-logos-container">
        <div class="paypal-mark">
          <img class="cards-logo" alt="MASTERCARD" src="/modules/ps_checkout/views/img/mastercard.svg"><span class="paypal-button-space"> </span>
          <img class="cards-logo" alt="VISA" src="/modules/ps_checkout/views/img/visa.svg"><span class="paypal-button-space"> </span>
          <img class="cards-logo" alt="AMEX" src="/modules/ps_checkout/views/img/amex.svg"><span class="paypal-button-space"> </span>
          <img class="cards-logo" alt="DISCOVER" src="/modules/ps_checkout/views/img/discover.svg"><span class="paypal-button-space"> </span>
        </div>
        <div>
          <div class="paypal-marks">
            <style>
              .paypal-button-text {
                  font-family: PayPalOpen-Regular, Helvetica, Arial, "Liberation Sans", sans-serif;
                  font-size: 12px;
                  vertical-align: middle;
              }

              .paypal-mark {
                  display: inline-block;
                  line-height: 0;
                  padding: 5px 6.666666666666667px;
                  background: #fff;
                  border-radius: 3px;
                  margin: 4px;
                  white-space: nowrap;
                  position: relative;
                  background: #fff;
                  border: 1px solid #dcdcdc;
              }

              .paypal-mark:last-child {
                  margin-right: none;
              }

              .paypal-mark img {
                  height: 20px;
                  display: inline-block;
                  vertical-align: middle;
              }

              .paypal-button-card {
                  display: inline-block;
                  margin-right: 5px;
              }

              .paypal-button-card:last-child {
                  margin-right: 0px;
              }
            </style>
            <div class="paypal-mark">
              <img src="https://www.paypalobjects.com/js-sdk-logos/2.2.7/paypal-default.svg" data-v-fbef4ed1="" alt="" role="presentation" class="paypal-logo paypal-logo-paypal paypal-logo-color-default">
            </div>
          </div>
        </div>
        <div class="paypal-mark"><img class="cards-logo" alt="google_pay" src="/modules/ps_checkout/views/img/google_pay.svg"></div>
      </div>
    </div>
  </div>




</div>
