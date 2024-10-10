(()=>{(()=>{"use strict";var n={};n.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return n.d(e,{a:e}),e},n.d=(o,e)=>{for(var l in e)n.o(e,l)&&!n.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:e[l]})},n.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e);var d={};(()=>{const o=jQuery;var e=n.n(o);const l=prestashop;var r=n.n(l);/**
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
 */function i(){e()(r().themeSelectors.checkout.termsLink).on("click",t=>{t.preventDefault();let c=e()(t.target).attr("href");c&&(c+="?content_only=1",e().get(c,a=>{e()(r().themeSelectors.modal).find(r().themeSelectors.modalContent).html(e()(a).find(".page-cms").contents())}).fail(a=>{r().emit("handleError",{eventType:"clickTerms",resp:a})})),e()(r().themeSelectors.modal).modal("show")}),e()(r().themeSelectors.checkout.giftCheckbox).on("click",()=>{e()("#gift").slideToggle()})}e()(document).ready(()=>{e()("body#checkout").length===1&&i(),r().on("updatedDeliveryForm",t=>{typeof t.deliveryOption=="undefined"||t.deliveryOption.length===0||(e()(r().themeSelectors.checkout.carrierExtraContent).hide(),t.deliveryOption.next(r().themeSelectors.checkout.carrierExtraContent).show())}),r().on("changedCheckoutStep",t=>{typeof t.event.currentTarget!="undefined"&&e()(".collapse",t.event.currentTarget).not(".show").not(".collapse .collapse").collapse("show")})}),e()(document).on("change",'.checkout-option input[type="radio"]',t=>{const a=e()(t.currentTarget).closest(".checkout-option");a.parent().find(".checkout-option").removeClass("selected"),a.addClass("selected")}),e()(document).on("click",".js-checkout-step-header",t=>{const c=e()(t.currentTarget).data("identifier");e()(`#${c}`).addClass("-current"),e()(`#content-${c}`).collapse("show").scrollTop()}),e()(document).ready(function(){e()("#clear-cart-btn").on("click",function(){confirm("Are you sure you want to clear the cart?")&&e().ajax({type:"GET",url:r().urls.pages.cart,dataType:"json",success:function(t){if(t.cart&&t.cart.products.length>0){var c=function(a){if(a<t.cart.products.length){var s=t.cart.products[a];e().ajax({type:"POST",url:r().urls.pages.cart,data:{ajax:1,action:"update",id_product:s.id_product,id_product_attribute:s.id_product_attribute||0,id_customization:s.id_customization||0,quantity:0},success:function(){c(a+1)},error:function(u){console.log("Error removing product:",u)}})}else location.reload()};c(0)}else alert("Your cart is already empty.")},error:function(t){console.log("Error fetching cart data:",t)}})})})})()})();})();
