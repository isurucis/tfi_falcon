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
<div class="block_newsletter block_newsletter_full card col-lg-12 col-md-12 col-sm-12" id="blockEmailSubscription_{$hookName}">
  <div class="row">
    <!-- p id="block-newsletter-label" class="col-md-5 col-12">{l s='Get our latest news and special sales' d='Shop.Theme.Global'}</p -->
    <div class="col-md-6 col-12">
      {images_block webpEnabled=$webpEnabled}

        <a href="https://superzoo.pythonanywhere.com/latestnewsletter" target="_blank">
        <img src="/modules/ps_imageslider/images/53e1737989d527e44174a30a358da61af8c706ce_banner_weekly_newsletter.jpg"

        class="img-weekly_newsletter img-fluid"
        alt="Weekly Newsletter">
        </a>
      {/images_block}
    </div>
    <div class="col-md-6 col-12">
      <p id="block-newsletter-label" class="emailsubscribe-title">{l s='Get our latest news and special sales' d='Shop.Theme.Global'}</p>
      <form action="{$urls.current_url}#blockEmailSubscription_{$hookName}" method="post">
        <div class="row">
          <div class="col-12">
            <div class="input-group js-parent-focus">
              <input
                name="email"
                type="email"
                value="{$value}"
                class="form-control js-child-focus"
                placeholder="{l s='Your email address' d='Shop.Forms.Labels'}"
                aria-labelledby="block-newsletter-label"
                required
              >
              <div class="input-group-append">
                <input
                  class="btn btn-primary"
                  name="submitNewsletter"
                  type="submit"
                  value="{l s='Subscribe' d='Shop.Theme.Actions'}"
                >
              </div>
            </div>
            <input type="hidden" name="blockHookName" value="{$hookName}" />
            <input type="hidden" name="action" value="0">
            <div class="clearfix"></div>
          </div>
          <div class="col-12">
              {if $conditions}
                <small class="form-text text-muted unsubscribe-text">{$conditions nofilter}</small>
              {/if}
              {if $msg}
                <p class="alert {if $nw_error}alert-danger{else}alert-success{/if}">
                  {$msg}
                </p>
              {/if}
              {hook h='displayNewsletterRegistration'}
              {if isset($id_module)}
                {hook h='displayGDPRConsent' id_module=$id_module}
              {/if}
          </div>
        </div>
      </form>
    </div>
    <!-- div class="col-md-3 col-3">&nbsp;</div -->
  </div>
</div>
