/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60D8B117-93E2-4A12-939C-E47EE2181D85"}
 */
function calculateMt(event) {
	if(units == 'KG'){
		clc_consumption = width * grammage
		clc_kg_to_mt = 1000 / clc_consumption
		clc_price_sec_format = price / clc_kg_to_mt
		quantity_second_format =  mc_mp
		units_second_format = 'MT'
		price_second_format  = clc_price_sec_format
	}
}

/**
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
  * @properties={typeid:24,uuid:"6B8DC053-1ECB-44F6-A7BD-DEAC5CE8EC04"}
 */
function onConsumChange(oldValue, newValue, event) {
	quantity = clc_weight
}
