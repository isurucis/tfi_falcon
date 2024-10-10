(()=>{(()=>{"use strict";var a={};a.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return a.d(e,{a:e}),e},a.d=(r,e)=>{for(var l in e)a.o(e,l)&&!a.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:e[l]})},a.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);var u={};(()=>{const r=jQuery;var e=a.n(r);const l=prestashop;var o=a.n(l);/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
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
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function i(){e()(o().themeSelectors.checkout.termsLink).on("click",t=>{t.preventDefault();let n=e()(t.target).attr("href");n&&(n+="?content_only=1",e().get(n,c=>{e()(o().themeSelectors.modal).find(o().themeSelectors.modalContent).html(e()(c).find(".page-cms").contents())}).fail(c=>{o().emit("handleError",{eventType:"clickTerms",resp:c})})),e()(o().themeSelectors.modal).modal("show")}),e()(o().themeSelectors.checkout.giftCheckbox).on("click",()=>{e()("#gift").slideToggle()})}e()(document).ready(()=>{e()("body#checkout").length===1&&i(),o().on("updatedDeliveryForm",t=>{typeof t.deliveryOption=="undefined"||t.deliveryOption.length===0||(e()(o().themeSelectors.checkout.carrierExtraContent).hide(),t.deliveryOption.next(o().themeSelectors.checkout.carrierExtraContent).show())}),o().on("changedCheckoutStep",t=>{typeof t.event.currentTarget!="undefined"&&e()(".collapse",t.event.currentTarget).not(".show").not(".collapse .collapse").collapse("show")})}),e()(document).on("change",'.checkout-option input[type="radio"]',t=>{const c=e()(t.currentTarget).closest(".checkout-option");c.parent().find(".checkout-option").removeClass("selected"),c.addClass("selected")}),e()(document).on("click",".js-checkout-step-header",t=>{const n=e()(t.currentTarget).data("identifier");e()(`#${n}`).addClass("-current"),e()(`#content-${n}`).collapse("show").scrollTop()}),e()(document).ready(function(){e()("#clear-cart-btn").on("click",function(){confirm("Are you sure you want to clear the cart?")&&e().ajax({type:"GET",url:o().urls.pages.cart,dataType:"json",success:function(t){e().each(t.cart.products,function(n,c){e().ajax({type:"POST",url:o().urls.pages.cart,data:{ajax:1,action:"update",id_product:c.id_product,id_product_attribute:c.id_product_attribute,id_customization:c.id_customization||0,quantity:0},success:function(){n===t.cart.products.length-1&&location.reload()},error:function(s){console.log("Error removing product:",s)}})})},error:function(t){console.log("Error retrieving cart data:",t)}})})})})()})();})();
