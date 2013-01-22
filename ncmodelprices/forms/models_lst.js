/**
 * @type {String}
 * @properties={typeid:35,uuid:"516681FF-486F-43C0-B1ED-4F42AD85FC25"}
 */
var order = 'asc';

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"97CA5F4A-5F3A-45A7-ABEF-8A0B272183BB"}
 */
function show(event) {
	//Mostramos el formulario de modelos
	forms.init.viewModelsFrm()
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"8D908258-25C3-4F87-8A78-A37F3E36AE2C"}
 */
function onShow(firstShow, event) {
	scopes.globals._webclient ? elements.img_toolbar_title_header.visible = false:
	elements.total_price.visible = scopes.security._secCostPrices
	elements.lbl_total_price.visible = scopes.security._secCostPrices
	elements.sales_prices.visible = scopes.security._secSalePrices
	elements.lbl_sales_price.visible = scopes.security._secSalePrices
	elements.asc.visible = false
	elements.desc.visible = false
}

/**
 * @param {JSEvent} event
 * @param {String} fieldToOrder
 * @properties={typeid:24,uuid:"F12AA073-31F7-43E6-A610-C57AA3581F1E"}
 */
function orderField(event,fieldToOrder) {
	elements[order].setLocation(elements[event.getElementName()].getLocationX()-15,elements[event.getElementName()].getLocationY())
	elements[order].visible = true
	forms.models_lst.foundset.sort(fieldToOrder +' ' + order)
	order = order=='desc'?'asc':'desc'
	elements[order].setLocation(elements[event.getElementName()].getLocationX()-15,elements[event.getElementName()].getLocationY())
	elements[order].visible = false
}
