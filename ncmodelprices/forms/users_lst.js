/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EB175355-592F-46BB-A2DA-41F5F988E84B"}
 */
function logoutUser(event) {
	plugins.window.closeFormPopup(user_id)
	scopes.globals._logout()
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"142B5360-1E58-42F0-83A0-61BDB50CC4F5"}
 */
function newPhoto(event) {
	var img = scopes.images._resizeImages(150,150)
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
 * @properties={typeid:24,uuid:"54273B6F-C6BA-4D70-87E1-4F81DFD6563D"}
 */
function delPhoto(event) {
	photo = ''
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"940084F0-F8AB-4B40-8A73-5D790EAD729C"}
 */
function savePhoto(event) {
	var fileData = photo
	var tempFile = plugins.file.createFile( user_name +'.jpg')
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
 * @properties={typeid:24,uuid:"2589C411-B128-4700-9B77-C05545A94CB2"}
 */
function onPhotoChange(oldValue, newValue, event) {
	var image = plugins.images.getImage(newValue)
	photo = image.resize(450,450)
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"9EAD67D6-2E79-48C7-88B8-E6B54257607F"}
 */
function onShow(firstShow, event) {
	//Procesamos el ocultado de botones de carga en webclient
	//elements.grupo_view.visible = false
	elements.btn_image_load.visible = scopes.globals._smartclient
	elements.btn_image_save.visible = scopes.globals._smartclient
	elements.btn_image_del.visible = scopes.globals._smartclient
	//Campo photo activo en webclient para soportar botones de subir imagen
	elements.photo.editable = scopes.globals._webclient
}
