/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AA54AA05-9DB1-43DB-B75A-30871E568EA3"}
 */
var formName = '';

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"88C2AFA5-A8D4-4C6F-B0FE-CA04C2285C33"}
 */
function onLoad(event) {
	scopes.globals._webclient ? elements.img_toolbar_title.visible = false : null
			
}

/**
 * @properties={typeid:35,uuid:"2C4CDC01-2719-476E-A8AD-F813795587A2",variableType:-4}
 */
var fScope = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54D03DA3-263D-4476-9722-0F596A39F636"}
 */
var fFunctionName = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 * @param element_name
 * @properties={typeid:24,uuid:"A2463649-C511-43D8-A41A-1719142DFB93"}
 */
function newReg(event, element_name) {
	if (event.getFormName() != null) forms[event.getFormName()].controller.newRecord()
	element_name != null?controller.focusField(element_name,false):forms[event.getFormName()].controller.focusFirstField();
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"AD14A797-8695-48C2-8D9F-CF7D1D0B475B"}
 */
function editReg(event) {
	if (event.getFormName() != null) forms[event.getFormName()].controller.focusFirstField()
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"71A42CA3-8093-411E-AFFC-595366D13783"}
 */
function delReg(event) {
	formName = event.getFormName()
	scopes.globals._txtMsg  = i18n.getI18NMessage('i18n:msg.txt.regdelete')
	msgAlert(event,'deleteCallback', null)
}

/**
 * // TODO Si se ha pulsado Borrar se elimina el resitro
 * @param {String} buttonPressed texto que tiene el botón pulsado
 * @properties={typeid:24,uuid:"7C719C7F-8325-4CF8-A4CD-ABB6D9564DCE"}
 */
function deleteCallback(buttonPressed)
{
	if (formName != null && buttonPressed == i18n.getI18NMessage('i18n:msg.yes')) forms[formName].controller.deleteRecord();
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"2526EA38-8477-49F2-8C15-8C1E0BFE499B"}
 */
function nextReg(event) {
	if (event.getFormName() != null){
	var current = forms[event.getFormName()].controller.getSelectedIndex();
	forms[event.getFormName()].controller.setSelectedIndex(current + 1);
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"C318A5F7-F05C-4D3A-B8C1-C79B3B1EDE93"}
 */
function prevReg(event) {
	if (event.getFormName() != null){
	var current = forms[event.getFormName()].controller.getSelectedIndex();
	forms[event.getFormName()].controller.setSelectedIndex(current - 1);
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"B8634BC4-0608-43FB-B9BC-E4D05D43BF04"}
 */
function lastReg(event) {
	if (event.getFormName() != null){
	var last = forms[event.getFormName()].controller.getMaxRecordIndex();
	forms[event.getFormName()].controller.setSelectedIndex(last);
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"B1E1A8B5-884F-42FD-B483-A1C7681447CF"}
 */
function firstReg(event) {
	if (event.getFormName() != null){
	forms[event.getFormName()].controller.setSelectedIndex(1);
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"345842E0-0D50-498F-A5E2-8271E165436F"}
 */
function duplicateReg(event) {
	formName = event.getFormName()
	if (formName != null) forms[formName].controller.duplicateRecord()
	forms[formName].controller.focusFirstField()
	scopes.globals._txtMsg  = i18n.getI18NMessage('i18n:msg.txt.regduplicate')
	msgInfo(event,'clearMsg',null)
}

/**
 * @param {Object} buttonPressed
 * @properties={typeid:24,uuid:"74398B56-A21C-4782-9486-D901C0CFD081"}
 */
function clearMsg(buttonPressed)
{
	if (buttonPressed == i18n.getI18NMessage('i18n:msg.accept')) scopes.globals._txtMsg = "";
}

/**
 * // TODO Crea mensajes en modo alerta con el botón de aceptar y cancelar
 * @param {JSEvent} event
 * @param {String} functionName
 * @param {String} buttonMenuPressed
 * @properties={typeid:24,uuid:"4EA7BCE9-BB31-4825-925C-0F98496C0538"}
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
 * @properties={typeid:24,uuid:"8023EB62-8635-4D9B-A076-B4A2685A6EA6"}
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
 * @properties={typeid:24,uuid:"EA3108F2-4F05-46DF-ACC5-B081A33ADE83"}
 */
function tabMsgView(event, btn1, media1, btn2, media2, background, icon, buttonMenuPressed, scope, functionName) {
	if(forms.init.elements.tab_msg.visible) tabMsgHide(null,forms.msg_frm.txtButtonMenuPressed,formName)
	if(buttonMenuPressed != null) elements[buttonMenuPressed].enabled = false
	//Smart client change size
	scopes.globals._smartclient ? forms.init.elements.tabForms.setSize(forms.init.elements.tabForms.getWidth(),forms.init.elements.tabForms.getHeight()-forms.init.elements.tab_msg.getHeight()):null
	forms.init.elements.tabForms.setLocation(forms.init.elements.tabForms.getLocationX(),forms.init.elements.tabForms.getLocationY() + forms.init.elements.tab_msg.getHeight())
	fScope = scope;
	fFunctionName = functionName;
	forms.msg_frm.setButtons(btn1,media1,btn2,media2,background,icon,buttonMenuPressed, formName);
	forms.init.elements.tab_msg.visible = true
}

/**
 * @param {String} buttonPressed
 * @param {String} buttonMenuPressed
 * @param {String} formLunchCallBack
 * @properties={typeid:24,uuid:"CA1912F5-CED2-4F89-B69F-D09F7197758A"}
 */
function tabMsgHide(buttonPressed, buttonMenuPressed, formLunchCallBack){
	forms.init.elements.tab_msg.visible = false
	forms.init.elements.tabForms.setLocation(forms.init.elements.tabForms.getLocationX(),(forms.init.elements.tabForms.getLocationY()-forms.init.elements.tab_msg.getHeight()))
	//Smart client change size
	scopes.globals._smartclient ? forms.init.elements.tabForms.setSize(forms.init.elements.tabForms.getWidth(),forms.init.elements.tabForms.getHeight()+forms.init.elements.tab_msg.getHeight()):null
	if(buttonPressed != null && fScope && fScope[fFunctionName])
	{
		//Lanzamos la funcion de msg_frm_js para retornar sus valores
		fScope[fFunctionName](buttonPressed,buttonMenuPressed, formLunchCallBack);
	}
	if(buttonMenuPressed != null) elements[buttonMenuPressed].enabled = true;
}
