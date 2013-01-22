/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"62E5F253-1307-44D7-BFF1-C7C0663D4D62"}
 */
function logoutUser(event) {
	plugins.window.closeFormPopup(user_id)
	scopes.globals._logout()
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"7272D33E-62DC-48C5-961C-A51E787AE363"}
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
 * @properties={typeid:24,uuid:"694FC131-DBE7-4705-B91F-E98FEAEB579B"}
 */
function delPhoto(event) {
	photo = ''
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"0CF97103-C30C-459E-9021-1813D3F09B62"}
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
 * @properties={typeid:24,uuid:"33719246-CED6-46DD-9E20-20B373595C6E"}
 */
function onPhotoChange(oldValue, newValue, event) {
	var image = plugins.images.getImage(newValue)
	photo = image.resize(450,450)
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"C4461EEE-C0D6-429F-B7D3-7951A3CE6865"}
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
