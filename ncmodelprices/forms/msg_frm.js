/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75F88B45-E283-44A7-8DDC-0031AD4E8D30"}
 */
var txtButtonMenuPressed = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A071756-7F07-49A6-853F-358FCEDCB939"}
 */
var txtFormNameLunchCallBack = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String}  buttonMenuPressed
 * @param {String}  formLunchCallBack
 * @properties={typeid:24,uuid:"3D4CF6DC-DB52-4D43-B9CA-BAFB71902F9C"}
 */
function pressButtonOnAction(event,buttonMenuPressed,formLunchCallBack) {
	//Funcion de template_nav_lst y init
	forms[txtFormNameLunchCallBack].tabMsgHide(elements[event.getElementName()].text, txtButtonMenuPressed, txtFormNameLunchCallBack)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} button1
 * @param {Object} media1
 * @param {Object} button2
 * @param {Object} media2
 * @param {Object} background
 * @param {Object} icon
 * @param {Object} buttonMenuPressed
 * @param {Object} formLunchCallBack
 * 
 * @properties={typeid:24,uuid:"17CB80A8-B1BD-421D-878C-1286AD879D4B"}
 */
function setButtons(button1, media1, button2, media2, background, icon, buttonMenuPressed, formLunchCallBack)
{
	// Guardamos en las variables locales el botón pulsado y el formulario desde el cual se lanzó.
	txtButtonMenuPressed = buttonMenuPressed;
	txtFormNameLunchCallBack = formLunchCallBack;
	elements.background.imageURL = scopes.globals._smartclient ? background : null;
	elements.btn1.text = scopes.globals._smartclient ? button1 : button1;
	elements.btn1.imageURL = scopes.globals._smartclient ? media1 : null;
	elements.btn2.text = scopes.globals._smartclient ? button2 : button2;
	elements.btn2.imageURL = scopes.globals._smartclient ? media2 : null;
	elements.icon.imageURL = scopes.globals._smartclient ? icon : icon;
	elements.btn1.visible = button1 ? true : false;
	elements.btn2.visible = button2 ? true : false;
}
