/**
 * @properties={typeid:35,uuid:"7AF25C2B-57D7-4CF8-9BE7-6178C3443C28",variableType:-4}
 */
var fScope = null;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"FBE2AC38-6839-4878-8224-AC028D1AABE0"}
 */
var fFunctionName = '';

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"9059BA2F-8876-403F-BFE6-B2B85C6F415E"}
 */
function newPhoto(event) {
	var img = scopes.images._resizeImages(450,450)
	if(img == null){
		scopes.globals._txtMsg = i18n.getI18NMessage('i18n:msg.txt.errorimportphoto')
		forms.init.msgInfo(event,'clearMsg', null)
	}
	else
	{
		photo = img
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"AA8D5227-67D5-4803-8D52-0229EEA0FF1C"}
 */
function delPhoto(event) {
	photo = ''
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"CBF50A49-F406-47C0-B089-9F61831754E1"}
 */
function savePhoto(event) {
	var fileData = photo
	var tempFile = plugins.file.createFile('model_id'+'.jpg')
	plugins.file.writeFile(tempFile,fileData)
	if(scopes.globals._mac || scopes.globals._linux){
		application.output('Temporary file created as: ' + tempFile.getAbsolutePath());
		application.executeProgram('open',tempFile.getAbsolutePath())
	}
	else{
		application.executeProgram("rundll32.exe", "url.dll,FileProtocolHandler", tempFile.getAbsolutePath());
	}
}

/**
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"2C9D9AF7-6CFA-4467-888D-8D14EACE8A73"}
 */
function onPhotoChange(oldValue, newValue, event) {
	var image = plugins.images.getImage(newValue)
	photo = image.resize(450,450)
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"47E6F77F-A6A1-4EEC-BC17-D7B37447F336"}
 */
function onShow(firstShow, event) {
	//Procesamos el ocultado de botones de carga en webclient
	//elements.grupo_view.visible = false
	elements.btn_image_load.visible = scopes.globals._smartclient
	elements.btn_image_save.visible = scopes.globals._smartclient
	elements.btn_image_del.visible = scopes.globals._smartclient
	//Campo photo activo en webclient para soportar botones de subir imagen
	elements.photo.editable = scopes.globals._webclient
	elements.retail_price.visible = scopes.security._secSalePrices
	elements.lbl_retail_price.visible = scopes.security._secSalePrices
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
 * @param {Object} scope
 * @param {String} functionName
 * @properties={typeid:24,uuid:"851E32EC-ED4D-4878-8C5A-A26866F310C3"}
 */
function tabMsgView(event, btn1, media1, btn2, media2, background, icon, buttonMenuPressed, scope, functionName) {
	if(forms.init.elements.tab_msg.visible) tabMsgHide(null,forms.msg_frm.txtButtonMenuPressed,event.getFormName())
	if(buttonMenuPressed != null) elements[buttonMenuPressed].enabled = false
	//Smart client change size
	scopes.globals._smartclient ? forms.init.elements.tabForms.setSize(forms.init.elements.tabForms.getWidth(),forms.init.elements.tabForms.getHeight()-forms.init.elements.tab_msg.getHeight()):null
	forms.init.elements.tabForms.setLocation(forms.init.elements.tabForms.getLocationX(),forms.init.elements.tabForms.getLocationY() + forms.init.elements.tab_msg.getHeight())
	fScope = scope;
	fFunctionName = functionName;
	forms.msg_frm.setButtons(btn1,media1,btn2,media2,background,icon,buttonMenuPressed, event.getFormName());
	forms.init.elements.tab_msg.visible = true
}

/**
 * @param {String} buttonPressed
 * @param {String} buttonMenuPressed
 * @param {String} formLunchCallBack
 * @properties={typeid:24,uuid:"20FDE4C8-B721-4C73-8203-C1B332CBE371"}
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
