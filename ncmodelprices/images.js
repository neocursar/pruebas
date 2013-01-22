/**
 * @{Number} width
 * @{Number} height
 * @properties={typeid:24,uuid:"EB4E8E6D-53EB-43FB-BA23-2687D9F148C3"}
 */
function _resizeImages(width,height) {
	if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT) {
		var fileImage = plugins.file.showFileOpenDialog(1,null,false,new Array("JPG and PNG","jpg","png") );
		var image = plugins.images.getImage(fileImage);
		if ( utils.stringLeft(image.getContentType(),5) == "image"){
			if(fileImage){
				image = image.resize(width,height)
			}
			else{
				scopes.globals._txtMsg = 'Debes seleccionar un fichero';
			}
		}
		else{
				scopes.globals._txtMsg = 'El fichero seleccionado no tiene un formato correcto está en '+
				image.getContentType() + ', no es una imagen';
		}
		if(image.getData()){
			return image.getData()
		}
		else{
			return null;
		}
	}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		//en web client ocultamos los botones
	}
	return null;
}
