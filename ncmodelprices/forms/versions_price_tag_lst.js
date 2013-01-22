/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"60487843-4BA0-475E-BBAC-37E384D983EA"}
 */
function showSecondFormat(event) {
	databaseManager.saveData(foundset)
	forms.versions_price_tag_second_format.foundset.loadRecords(foundset.getSelectedRecord().versions_price_tag_id);
	plugins.window.showFormPopup(
		event.getSource(), 
		forms.versions_price_tag_second_format,
		foundset.getSelectedRecord(), 
		"quantity");	
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"81338636-4DEB-4B38-B512-81CAB8AF3C3B"}
 */
function loadBasicComponents(event) {
	if(foundset.getSize()==0){
	for(var i=1 ; i <= forms.basic_price_tag_lst.foundset.getSize(); i++){
		forms.basic_price_tag_lst.foundset.sort('line_position,asc')
		var rec = forms.basic_price_tag_lst.foundset.getRecord(i)
			controller.newRecord(false)
			line_position = foundset.getSize() + 10
			req_component = rec.req_component
			product_family_id = rec.product_family_id
			price = rec.price
			quantity = rec.quantity
			units = rec.units
		}
	}
	else{
		scopes.globals._txtMsg  = i18n.getI18NMessage('i18n:msg.txt.errorimportbasicproducts')
		forms.init.msgInfo(event,'clearMsg',null)
	}
}

/**
* @param {JSEvent} event
* @properties={typeid:24,uuid:"51A4C492-CE80-43A7-8926-679D027A520F"}
*/
function duplicateReg(event) {
 	_super.duplicateReg(event)
	line_position = foundset.getSize() + 10
 	return true;
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"84BCCD95-3F0D-458D-87D7-AAD8D5E05F5B"}
 */
function delReg(event) {
	controller.deleteRecord()
}

/**
 * @param {JSEvent} event
 * @param element_name
 * @properties={typeid:24,uuid:"2BA2B0DB-B7EB-46B9-8D44-49790E75EB26"}
 */
function newReg(event, element_name) {
	controller.newRecord(true)
	elements.component.requestFocus()
	line_position = foundset.getSize() + 10
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"E57B181A-D454-46C3-B11A-ACFEABC7280A"}
 */
function onLoad(event) {
	elements.price.visible = scopes.security._secCostPrices
	elements.total_component.visible = scopes.security._secCostPrices
	return _super.onLoad(event)
}
