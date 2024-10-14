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

{$jsAssetHash = Configuration::get('PS_CCCJS_VERSION')|md5}

{foreach $javascript.external as $js}
  <script
    type="text/javascript"
    src="{appendParamToUrl url=$js.uri key=v value=$jsAssetHash}"
    {$js.attribute}></script>
{/foreach}


{foreach $javascript.inline as $js}
  <script type="text/javascript">
    {$js.content nofilter}
  </script>
{/foreach}

{if isset($vars) && $vars|@count}
  <script type="text/javascript">
    {foreach from=$vars key=var_name item=var_value}
    var {$var_name} = {$var_value|json_encode nofilter};
    {/foreach}
  </script>
{/if}
{if isset($vars) && $vars|@count}
<script>
//Qty Pluse
function updateCaseValue(qtyInput) {

  // Get the min attribute from the input element
  let minValue = parseInt(qtyInput.getAttribute('min'));

  // Get the value of the input element
  let quantityValue = parseInt(qtyInput.value);

  // Calculate number of cases
  let numberOfCases = Math.floor(quantityValue / ((minValue * 20) / 4));

  // Get the element with ID pdp_case
  let priceBoxCalc = document.getElementById('pdp_case');

  // Update the case value in the UI
  priceBoxCalc.textContent = numberOfCases + ' Case' + (numberOfCases > 1 ? 's' : '');
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('quantity-button')) {
          var button = event.target;
          var input = button.parentElement.querySelector('.input-qty');
          var currentValue = parseInt(input.value);
          var minValue = parseInt(input.getAttribute('min'));
          var stock = parseInt(input.getAttribute('stk'));
          
          if (minValue < 1) {
              minValue = 1;
          }
          

          let boxqty = parseInt(input.getAttribute('case_qty'));
          
          
          if (button.classList.contains('quantity-decrement')) {
              if (currentValue > minValue) {
                if (currentValue <= boxqty) {
                  input.value = currentValue - minValue;
                }else{
                  input.value = currentValue - boxqty;
                }
              }
          } else if (button.classList.contains('quantity-increment')) {
              alert(currentValue);
              if (currentValue >= boxqty) {
                if(stock>=(currentValue+boxqty)){
                  input.value = currentValue + boxqty;
                }
              }else{
                if(stock>=(currentValue+minValue)){
                input.value = currentValue + minValue;
                }
              }
          }
          updateCaseValue(input);
      }
  });
});

</script>
{/if}

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64f4b882b2d3e13950edae17/1h9dv1g2q';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->