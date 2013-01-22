/**
 * @properties={typeid:24,uuid:"EC8C6952-AC7C-4C6A-BF85-2E55B7ED6B01"}
 */
function delReg() {
	controller.deleteRecord()
}

/**
 * @properties={typeid:24,uuid:"16B04C4C-3282-4A8A-B5A3-57F37BB930EC"}
 */
function newReg() {
	controller.newRecord()
}

/**
* @properties={typeid:24,uuid:"98DF90B9-0455-405E-934E-5DE7DB5EF143"}
*/
function duplicateReg() {
	controller.duplicateRecord()
}

/**
 * @properties={typeid:24,uuid:"D3EECB91-1155-462D-B7FE-538E98124A06"}
 */
function onLoad() {
	elements.price.visible = scopes.security._secCostPrices
}
