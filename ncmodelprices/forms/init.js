/**
 * @properties={typeid:35,uuid:"2481741B-4486-4973-95B7-B80F62BFF2E8",variableType:-4}
 */
var fScope = null;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"1DA45558-D785-478C-BF92-FCE600750F04"}
 */
var fFunctionName = '';

/**
 * @properties={typeid:24,uuid:"7C08B050-E11F-4F2F-BCA3-581D538ADE09"}
 */
function exit(event) {
	application.exit()
}

/**
 * @properties={typeid:24,uuid:"76ADCAC6-8FF4-4C81-8E12-547F7C3FEA09"}
 */
function loadSecurity() {
	forms.users.foundset.loadRecords(application.getUUID(security.getUserUID()));
	scopes.security._secCostPrices = forms.users.sec_cost_price?true:false;
	scopes.security._secSalePrices = forms.users.sec_sale_price?true:false;
	scopes.security._secAppraisel = forms.users.sec_appraisal?true:false;
	scopes.security._secInventory = forms.users.sec_inventory?true:false;
	scopes.security._secConfig = forms.users.sec_config?true:false;
	scopes.security._superuser = forms.users.superuser?true:false;
	scopes.globals._userID = forms.users.user_id
	scopes.globals._emailFrom = forms.users.user_email
	scopes.globals._emailTo = ''
	scopes.globals._webclient ? elements.img_toolbar_header.visible = false:
	scopes.globals._webclient ? elements.img_toolbar_footer.visible = false:
	elements.tabForms.removeAllTabs()
	elements.tabForms.addTab(forms.models_lst,"models_lst")
	elements.menu.setTabEnabledAt(scopes.interfaces._menuAppraisal,forms.users.sec_appraisal?true:false)
	elements.menu.setTabEnabledAt(scopes.interfaces._menuInventory,forms.users.sec_inventory?true:false)
	elements.menu.setTabEnabledAt(scopes.interfaces._menuConfig,forms.users.sec_config?true:false)
}

/**
 * @properties={typeid:24,uuid:"8B43B433-CDE4-49DE-B564-70C19FF5C0B2"}
 */
function newReg() {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name) {
			forms[name].controller.newRecord()
			forms[name].controller.focusFirstField()	
	}
	if(name=='models_lst'){
		forms.launcher_appraisal.createTab(null,'modelos','models_frm',null)
	}
}

/**
 * @properties={typeid:24,uuid:"B9CFF237-C8AF-42E1-B7A9-61870CE3B53F"}
 */
function editReg() {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name) forms[name].controller.focusFirstField()
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"E343B3C2-2982-4B8B-AE46-E51425C58804"}
 */
function delReg(event) {
	scopes.globals._txtMsg  = i18n.getI18NMessage('i18n:msg.txt.regdelete')
	msgAlert(event,'deleteCallback', event.getElementName())
}

/**
 * @param {String} buttonPressed texto que tiene el botón pulsado
 * @properties={typeid:24,uuid:"9EC0A7F3-F57A-498E-A2C3-0C88E9748E70"}
 */
function deleteCallback(buttonPressed)
{
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name != null && buttonPressed == i18n.getI18NMessage('i18n:msg.yes')) forms[name].controller.deleteRecord();
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"6225D630-F8D7-4A40-8D0F-F3948B71DFE1"}
 * @AllowToRunInFind
 */
function showReg(event) {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name) forms[name].controller.loadAllRecords()
	scopes.globals._txtSearch = ''
}

/**
 * @param {Object} event
 * @properties={typeid:24,uuid:"5ADBA1B6-5C60-4052-BF0E-FC5FCD0C40A6"}
 */
function nextReg(event) {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name){
	var current = forms[name].controller.getSelectedIndex();
	forms[name].controller.setSelectedIndex(current + 1);
	}
}

/**
 * @param {Object} event
 * @properties={typeid:24,uuid:"22E2DEC1-FD95-40F9-93E0-EA3A831A46E8"}
 */
function prevReg(event) {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name){
	var current = forms[name].controller.getSelectedIndex();
	forms[name].controller.setSelectedIndex(current - 1);
	}
}

/**
 * @param {Object} event
 * @properties={typeid:24,uuid:"DF93AB01-5485-4172-BEB5-04F1BE1DC36E"}
 */
function lastReg(event) {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name){
	var ultimo = forms[name].controller.getMaxRecordIndex();
	forms[name].controller.setSelectedIndex(ultimo);
	}
}

/**
 * @param {Object} event
 * @properties={typeid:24,uuid:"0C0B6434-0260-47AF-85D9-634F3E0063C6"}
 */
function firstReg(event) {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name){
	forms[name].controller.setSelectedIndex(1);
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"F044ED05-3D4D-44FC-B2FD-262D5FB6CE07"}
 * @AllowToRunInFind
 */
function search(event) {
	var name = elements.tabForms.getTabFormNameAt(1);
	var params = new Array
	switch( name ){
	case 'models_frm':
		params[0]='req_model_ref';
		params[1]='description';
		params[2]='customer';
		findParams(event,name,params)
		forms[name].foundset.getSize()>1?viewModelsLst():''
		forms[name].foundset.sort('modified_date desc')
		break
	case 'models_lst':
		params[0]='req_model_ref';
		params[1]='description';
		params[2]='customer';
		findParams(event,name,params)
		forms[name].foundset.getSize()>1?viewModelsLst():viewModelsFrm()
		forms[name].foundset.sort('modified_date desc')
		break
	case 'models_status_lst':
		params[0]='req_status_description';
		params[1]='req_status_name';
		findParams(event,name,params)
		break
	case 'basic_price_tag_lst':
		params[0]='req_component';
		params[1]='basic_price_tag_to_products_family.name';
		findParams(event,name,params)
		break
	case 'product_family_lst':
		params[0]='name';
		findParams(event,name,params)
		break		
	case 'users_lst':
		params[0]='user_name';
		findParams(event,name,params)
		break	
	case 'colors_lst':
		params[0]='ref';
		params[1]='name';
		findParams(event,name,params)
		break
	default:
	}
}

/**
 * Ejecuta la búsqueda pasando como parametros los campos de búsqueda, y si queremos ejecutar una función.
 * @param {JSEvent} event
 * @param {String} name
 * @param {Array} params
 * @properties={typeid:24,uuid:"A510C6D0-4F94-4048-AD7E-768A1E6F7158"}
 * @AllowToRunInFind
 */
function findParams(event, name, params){
	if (forms[name].foundset.find()){
		
		if(params!=null && params.length>1){
			forms[name].foundset[params[0]] = "#"+"%" +globals._txtSearch+"%"
			for (var index = 1; index < params.length; index++) {
				forms[name].foundset.newRecord()
				forms[name].foundset[params[index]] = "#"+"%" +globals._txtSearch+"%"
			}
			forms[name].foundset.search()
		}
		
		else{
			forms[name].foundset[params[0]] = "#"+"%" +globals._txtSearch+"%"
			forms[name].foundset.search()
		}
		
		if(forms[name].foundset.getSize() == 0) {
			scopes.globals._txtMsg  = i18n.getI18NMessage('i18n:msg.txt.regfindempty', new Array(scopes.globals._txtSearch))
			msgFind(event,'clearMsg', elements.btn_find.getName());
		}
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"5CD45A8C-EA96-4E14-9B8C-B246F99874EE"}
 */
function duplicate(event) {
	var name = elements.tabForms.getTabFormNameAt(1)
	if (name) forms[name].controller.duplicateRecord()
	forms[name].controller.focusFirstField()
	scopes.globals._txtMsg  = i18n.getI18NMessage('i18n:msg.txt.regduplicate')
	msgInfo(event,'clearMsg',event.getElementName())
}

/**
 * @param {Object} buttonPressed
 * @properties={typeid:24,uuid:"11CC172D-A31D-40D8-B351-A4ED73C616ED"}
 */
function clearMsg(buttonPressed)
{
	if (buttonPressed == i18n.getI18NMessage('i18n:msg.accept')) scopes.globals._txtMsg = "";
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"24370C8F-0232-4E0B-9BE3-9A9A52C31FC8"}
 */
function onEnterSearch(event) {
	showReg(event)
	elements.fld_search.requestFocus(true)
	scopes.globals._txtSearch = "Buscar.."
	elements.fld_search.selectAll()
}

/**
 * @properties={typeid:24,uuid:"4AAA0606-4DC3-417D-9E1E-99B426171B14"}
 */
function translate(event) {
	application.showI18NDialog("Traducir", i18n.getCurrentLanguage());
}

/**
 * // TODO Crea mensajes en modo alerta con el botón de aceptar y cancelar
 * @param {JSEvent} event
 * @param {String} functionName
 * @param {String} buttonMenuPressed
 * @properties={typeid:24,uuid:"35FF4B8C-144C-4EAB-A7CC-80D1185315A0"}
 */
function msgAlert(event,functionName, buttonMenuPressed){
	tabMsgView(
	event,
	i18n.getI18NMessage('i18n:msg.yes'),
	scopes.interfaces._imageBtnYes,
	i18n.getI18NMessage('i18n:msg.not'),
	scopes.interfaces._imageBtnNot,
	scopes.interfaces._backgroundAlert,
	scopes.interfaces._iconAlert,
	buttonMenuPressed,
	forms[event.getFormName()], 
	functionName )
}

/**
 * // TODO Crea mensajes en modo información con el botón de aceptar
 * @param {JSEvent} event
 * @param {String} functionName
 * @param {String} buttonMenuPressed
 * @properties={typeid:24,uuid:"FA42037B-EDBA-4819-A681-D17C400AF423"}
 */
function msgInfo(event, functionName, buttonMenuPressed){
	tabMsgView(
	event,
	i18n.getI18NMessage('i18n:msg.accept'),
	scopes.interfaces._imageBtnAccept,
	null,
	null,
	scopes.interfaces._backgroundInfo,
	scopes.interfaces._iconInfo,
	buttonMenuPressed,
	forms[event.getFormName()], 
	functionName )
}

/**
 * // TODO Crea mensajes en modo buscar con el botón de aceptar
 * @param {JSEvent} event
 * @param {String} functionName
 * @param {String} buttonMenuPressed
 * @properties={typeid:24,uuid:"BDFE5295-775F-49C5-83A3-AA2921C7FDDF"}
 */
function msgFind(event,functionName, buttonMenuPressed){
	tabMsgView(event,i18n.getI18NMessage('i18n:msg.accept'),scopes.interfaces._imageBtnAccept,null,null,scopes.interfaces._backgroundFind,scopes.interfaces._iconFind,buttonMenuPressed,forms[event.getFormName()], functionName )
}

/**
 * // TODO Genera el mensaje en pantalla con los siguientes parámetros:
 * @param {JSEvent} event
 * @param {String} btn1
 * @param {String} media1
 * @param {String} btn2
 * @param {String} media2
 * @param {String} background
 * @param {String} icon
 * @param {String} buttonMenuPressed
 * @param {RuntimeForm} scope
 * @param {String} functionName
 * @properties={typeid:24,uuid:"C5B149C7-553B-488B-A99A-9582B3E9D068"}
 */
function tabMsgView(event, btn1, media1, btn2, media2, background, icon, buttonMenuPressed, scope, functionName) {
	if(elements.tab_msg.visible) tabMsgHide(null,forms.msg_frm.txtButtonMenuPressed,event.getFormName())
	if(buttonMenuPressed != null)elements[buttonMenuPressed].enabled = false
	//Smart client change size
	scopes.globals._smartclient ? elements.tabForms.setSize(elements.tabForms.getWidth(),elements.tabForms.getHeight()-elements.tab_msg.getHeight()):null
	elements.tabForms.setLocation(elements.tabForms.getLocationX(),elements.tabForms.getLocationY() + elements.tab_msg.getHeight())
	fScope = scope;
	fFunctionName = functionName;
	forms.msg_frm.setButtons(btn1,media1,btn2,media2,background,icon,buttonMenuPressed, event.getFormName());
	elements.tab_msg.visible = true
}

/**
 * <font color="red">INFORMACION DE USO:</font><br>
 * Ocultamos el mensaje.<br>
 * Cambiamos el tamaño y la posición del los tab.<br>
 * En webclient no tratamos el tamaño, por problemas en el redimensionado. <br>
 * Luego retonamos los valores del botón pulsado de la función callback.<br>
 * Por último activamos de nuevo el botón que habia sido pulsado.<br>
 * @param {String} buttonPressed <font color="red"><b> texto que tiene el botón pulsado en el mensaje</b></font>
 * @param {String} buttonMenuPressed botón pulsado en formulario init.
 * @param {String} formLunchCallBack botón pulsado en formulario init
 * @properties={typeid:24,uuid:"CE7B9AE5-0FB5-47E0-B10E-4C0A37B35504"}
 */
function tabMsgHide(buttonPressed, buttonMenuPressed, formLunchCallBack){
	/* Ocultamos el mensaje
	 * Cambiamos el tamaño y la posición del los tab
	 * En webclient no tratamos el tamaño, por problemas en el redimensionado.
	 * Luego retonamos los valores del botón pulsado de la función callback
	 * Por último activamos de nuevo el botón que habia sido pulsado
	 */
	elements.tab_msg.visible = false
	elements.tabForms.setLocation(elements.tabForms.getLocationX(),(elements.tabForms.getLocationY()-elements.tab_msg.getHeight()))
	scopes.globals._smartclient ? elements.tabForms.setSize(elements.tabForms.getWidth(),elements.tabForms.getHeight()+elements.tab_msg.getHeight()):null
	if(buttonPressed != null && fScope && fScope[fFunctionName])
	{
		fScope[fFunctionName](buttonPressed,buttonMenuPressed,formLunchCallBack);
	}
	if(buttonMenuPressed != null) elements[buttonMenuPressed].enabled = true;
}

/**
 * @properties={typeid:24,uuid:"6768DB54-0855-4EE1-8EB5-096B8E0BC699"}
 */
function viewModelsLst() {
	//Mostramos los modelos en modo lista
	elements.tabForms.removeAllTabs()
	elements.tabForms.addTab(forms.models_lst,"Models_lst")
}

/**
 * @properties={typeid:24,uuid:"AC930AF1-50E3-42C3-A3D4-8746AA26827B"}
 */
function viewModelsFrm() {
	//Mostramos los modelos en modo registro
	elements.tabForms.removeAllTabs()
	elements.tabForms.addTab(forms.models_frm,"Models_frm")
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"7AD91118-2DD9-48F0-B2B8-DE5BA6C6B6A6"}
 */
function viewBasicPricesTags(event) {
	//Mostramos un formulario popup con los datos de los componentes básicos de los escandallos
		plugins.window.showFormPopup(
			event.getSource(), 
			forms.basic_price_tag_lst,
			foundset, 
			"versions_price_tag_id");	
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"9428860E-F097-448D-A827-6D7C9C278B3B"}
 */
function userControl(event) {
	if(scopes.security._superuser == false){
	forms.users.foundset.loadRecords(application.getUUID(scopes.globals._userID))
	plugins.window.showFormPopup(
		event.getSource(),
		forms.users,
		foundset, 
		"user_id");	
	}
	else{
		elements.tabForms.removeAllTabs()
		elements.tabForms.addTab(forms.users_lst,"users_lst")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5ECB39C4-72F8-407B-8773-053E3DEF9443"}
 */
function hideMenu(event) {
	elements.menu.visible = !elements.menu.visible
	if(!elements.menu.visible){
		elements.tabForms.setLocation(0,0)
		elements.tabForms.setSize(elements.tabForms.getWidth() + elements.menu.getWidth(),elements.tabForms.getHeight())
		elements.tab_msg.setLocation(0,0)
		elements.tab_msg.setSize(elements.tab_msg.getWidth() + elements.menu.getWidth(),elements.tab_msg.getHeight())
	}
	else{
		elements.tabForms.setLocation(elements.menu.getWidth(),0)
		elements.tabForms.setSize(elements.tabForms.getWidth() - elements.menu.getWidth(),elements.tabForms.getHeight())
		elements.tab_msg.setLocation(elements.menu.getWidth(),0)
		elements.tab_msg.setSize(elements.tab_msg.getWidth() - elements.menu.getWidth(),elements.tab_msg.getHeight())
	}
}
