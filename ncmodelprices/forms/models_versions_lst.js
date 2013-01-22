/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"437EFBB6-F6E5-4142-8421-AA089AC15FA9"}
 */
function showFormVersions(event){
	forms.models_versions_frm.foundset.loadRecords(foundset.getSelectedRecord().models_version_id);
	plugins.window.showFormPopup(
		event.getSource(), 
		forms.models_versions_frm,
		foundset.getSelectedRecord(), 
		"models_version_id");	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DCBE0FA6-D9D6-475F-92B5-9EC7C5CF4E10"}
 */
function selectStatus(event) {
	plugins.window.showFormPopup(event.getSource(),forms.models_status_pop,foundset.getSelectedRecord(),"models_status_id")
}

/**
 * @param event
 * @param element_name
 * @properties={typeid:24,uuid:"9C5DC517-AF8C-4C35-8A52-D67554C42E21"}
 */
function newReg(event, element_name) {
	_super.newReg(event, element_name)
	databaseManager.saveData()
}

/**
 * @properties={typeid:24,uuid:"41DB2729-748E-47A7-97A0-83CC6D73874E"}
 */
function printVersion(){
	forms.model_version_prn.foundset.loadRecords(foundset.getSelectedRecord().models_version_id)
	forms.model_version_prn.foundset.models_versions_to_versions_price_tag.sort('versions_price_tag_to_products_family.line_position asc')
	//Accedemos a las variables del formulario heredado para rellenar sus datos
	forms.model_version_prn.elements.txt1.fgcolor = txt1_color
	forms.model_version_prn.elements.txt2.fgcolor = txt2_color
	forms.model_version_prn.elements.txt3.fgcolor = txt3_color
	forms.model_version_prn.controller.print(true)
}

/**
* @param event
* @param databaseProvider
* @param txt_1
* @properties={typeid:24,uuid:"93C9F285-027E-4C9F-8641-6B2CA059FC1D"}
*/
function onRecordSelection(event, databaseProvider, txt_1) {
	if( forms[event.getFormName()][databaseProvider]!= null ){
		if(models_versions_to_models_status) txt_1 = ' ('+ i18n.getI18NMessage('i18n:label.status') + ': ' + models_versions_to_models_status.req_status_description +')'
	}
	return null;
}

/**
 * @properties={typeid:24,uuid:"7D4FF767-52C8-40E6-AD4C-FFF118650743"}
 */
function onOkChange() {
	var selected = foundset.getSelectedIndex()
	for(var i=1;i <= foundset.getSize();i++){
		var rec = foundset.getRecord(i)
		if(selected != i) rec.version_ok = 0
	}
	databaseManager.saveData(foundset)
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"8E474FDD-E827-4427-B211-1E4D4F8AE5CA"}
 */
function duplicateReg(event) {
	formName = event.getFormName()
	var old_rec = foundset.getRecord(foundset.getSelectedIndex())
	controller.newRecord()
	req_version_name = 'DUP'
	version_ok = false
	create_date = Date.now();
	var new_rec = foundset.getRecord(foundset.getSelectedIndex())
	foundset.getRecordIndex(old_rec)
	for(var i=1; i <= old_rec.models_versions_to_versions_price_tag.getSize(); i++){
		old_rec.models_versions_to_versions_price_tag.getRecord(i)
		new_rec.models_versions_to_versions_price_tag.newRecord(false)
		new_rec.models_versions_to_versions_price_tag.product_family_id = old_rec.models_versions_to_versions_price_tag.getRecord(i).product_family_id
		new_rec.models_versions_to_versions_price_tag.line_position = old_rec.models_versions_to_versions_price_tag.getRecord(i).line_position
		new_rec.models_versions_to_versions_price_tag.price = old_rec.models_versions_to_versions_price_tag.getRecord(i).price
		new_rec.models_versions_to_versions_price_tag.price_second_format = old_rec.models_versions_to_versions_price_tag.getRecord(i).price_second_format
		new_rec.models_versions_to_versions_price_tag.quantity = old_rec.models_versions_to_versions_price_tag.getRecord(i).quantity
		new_rec.models_versions_to_versions_price_tag.quantity_second_format = old_rec.models_versions_to_versions_price_tag.getRecord(i).quantity_second_format
		new_rec.models_versions_to_versions_price_tag.units = old_rec.models_versions_to_versions_price_tag.getRecord(i).units
		new_rec.models_versions_to_versions_price_tag.req_component = old_rec.models_versions_to_versions_price_tag.getRecord(i).req_component
		new_rec.models_versions_to_versions_price_tag.clc_consumption = old_rec.models_versions_to_versions_price_tag.getRecord(i).clc_consumption
		new_rec.models_versions_to_versions_price_tag.clc_kg_to_mt = old_rec.models_versions_to_versions_price_tag.getRecord(i).clc_kg_to_mt
		new_rec.models_versions_to_versions_price_tag.clc_price_sec_format = old_rec.models_versions_to_versions_price_tag.getRecord(i).clc_price_sec_format
		new_rec.models_versions_to_versions_price_tag.mc_mp = old_rec.models_versions_to_versions_price_tag.getRecord(i).mc_mp
		new_rec.models_versions_to_versions_price_tag.width = old_rec.models_versions_to_versions_price_tag.getRecord(i).width
		new_rec.models_versions_to_versions_price_tag.grammage = old_rec.models_versions_to_versions_price_tag.getRecord(i).grammage
		new_rec.models_versions_to_versions_price_tag.profit_margin = old_rec.models_versions_to_versions_price_tag.getRecord(i).profit_margin
		new_rec.models_versions_to_versions_price_tag.units_second_format = old_rec.models_versions_to_versions_price_tag.getRecord(i).units_second_format
		new_rec.models_versions_to_versions_price_tag.waste = old_rec.models_versions_to_versions_price_tag.getRecord(i).waste
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"61DB7E21-6042-4535-8D32-590163E2E1A4"}
 */
function showEmailTo(event){
	var dialog = application.createWindow("email_to", JSWindow.MODAL_DIALOG);
	dialog.title = 'email'
	dialog.show('email_to')
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"3C7947AB-6462-4B3D-8C06-05B4D4C731ED"}
 */
function miEmail(event){
	forms.model_version_prn.foundset.loadRecords(foundset.getSelectedRecord().models_version_id)
	//Accedemos a las variables del formulario heredado para rellenar sus datos
	forms.model_version_prn.controller.print(true,false,plugins.pdf_output.getPDFPrinter(models_version_id+'.pdf'));
	application.sleep(300)
	/** @type {Array<String>} vProperties */	
	var vProperties = []
	vProperties[0] = 'mail.smtp.host=smtp.textilsaroni.es';
	vProperties[1] = 'mail.smtp.auth=true';
	vProperties[2] = 'mail.smtp.starttls.enable=false';
	vProperties[3] = 'mail.smtp.port=25';
	vProperties[4] = 'mail.smtp.username=cursarsaroni';
	vProperties[5] = 'mail.smtp.password=48cursar39';
	var attachment1 = plugins.mail.createBinaryAttachment(models_version_id+'.pdf', plugins.file.readFile(models_version_id+'.pdf'));
	/**
	 * @type {Array<plugins.mail.Attachment>}
	 */
	var arrayAtachment = [attachment1];
	var vMsgText = 
	'<html><b>'+i18n.getI18NMessage('i18n:label.model_ref')+': </b>'+ models_versions_to_models.req_model_ref +'<br>'+
	'<b>'+i18n.getI18NMessage('i18n:label.description')+': </b>'+ models_versions_to_models.description +'<br>'+
	'<b>SISTEMA AUTOMATICO: </b>'+ 'EMAIL PRECIOS...' +'<br>'+
	'</html>';
	plugins.mail.sendMail( scopes.globals._emailTo,scopes.globals._emailFrom, models_versions_to_models.req_model_ref, vMsgText,null,null,arrayAtachment,vProperties);
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"A9956F65-F102-47B2-A19D-CD6C07AEE9A0"}
 */
function onLoad(event) {
	elements.total_price_tag.visible = scopes.security._secCostPrices
	elements.sale_price.visible = scopes.security._secSalePrices
	elements.sale_min_price.visible = scopes.security._secSalePrices
	return _super.onLoad(event)
}
