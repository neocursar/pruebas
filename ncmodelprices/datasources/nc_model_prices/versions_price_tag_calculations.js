/**
 * @properties={type:8,typeid:36,uuid:"24D18368-62FD-4E83-8B5C-574F88933D4E"}
 */
function clc_customer_price()
{
	var total = profit_margin>0?((second_price_with_waste * profit_margin)/100) + second_price_with_waste:0
	return  total>0?total:0;
}

/**
 * @properties={type:8,typeid:36,uuid:"84D04ED7-1AD2-444E-AA43-F42ADCB882F3"}
 */
function clc_weight()
 {
 	var total = ( width* ( grammage / 1000) * mc_mp )
 	return total;
 }

/**
 * @properties={type:8,typeid:36,uuid:"A70A0992-0AFD-43F7-A607-3BAF08DE78A6"}
 */
function clc_total_component()
{
	var total = (quantity * ( 1 + waste / 100 ) * price)
	return  total;
}

/**
 * @properties={type:8,typeid:36,uuid:"9B9BE9FF-B9B1-42E0-BC7B-A656B105B818"}
 */
function clc_total_component_sec_format()
{
	var total = (quantity_second_format * ( 1 + waste / 100 ) * price_second_format)
	return  total;
}

/**
 * @properties={type:8,typeid:36,uuid:"1D5B2747-2348-4868-8387-A68450436C30"}
 */
function price_with_waste(){
	var total = (price * ( 1 + waste / 100 ))
	return  total;
}

/**
 * @properties={type:8,typeid:36,uuid:"FF4D854F-A3FA-475A-8AE9-1D5212812240"}
 */
function second_price_with_waste(){
	var total = (price_second_format * ( 1 + waste / 100 ))
	return  total;
}
