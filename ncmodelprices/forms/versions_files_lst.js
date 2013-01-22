/**
 *
 * @param event
 * @param element_name
 *
 * @properties={typeid:24,uuid:"DAB56272-6E5E-4D6B-A64F-0558B6A29A06"}
 */
function newReg(event, element_name) {
	_super.newReg(event, element_name)
	if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT) {
		var f = plugins.file.showFileOpenDialog(1,null,false,new Array("PDF, JPG and PNG","pdf","jpg","png") );
		var file = plugins.file.convertToJSFile(f)
		if(file){
			var fileSizes = (file.size() / 1024)
			if ( utils.stringLeft(file.getContentType(),5) == "image"){
				if(f){
					var image = plugins.images.getImage(f);
					attachment_file = image.resize(450,450)
					file_sizes = Math.round(fileSizes).toString() + ' kb'	
					file_name = file.getName()
					}
			}
			if ( utils.stringRight(file.getContentType(),3) == "pdf"){
				if(f){
					attachment_file = file.getBytes()	
					file_sizes = Math.round(fileSizes).toString() + ' kb'
					file_name = file.getName()
					}
			}
			else{
					scopes.globals._txtMsg = 'El fichero seleccionado no tiene un formato correcto está en '+ file.getContentType() ;
			}
		}
	}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		   plugins.file.showFileOpenDialog(0,"",false,null,uploaded);
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} files
 *
 * @properties={typeid:24,uuid:"6A523AF2-5B5E-4BE1-8F13-F22130C53BBD"}
 */
function uploaded(files){
	if(files[0]){
		var fileSizes = (files[0].size() / 1024)
		if ( utils.stringLeft(files[0].getContentType(),5) == "image"){
			if(files[0]){
				attachment_file = files[0].getBytes()
				file_sizes = Math.round(fileSizes).toString() + ' kb'	
				file_name = files[0].getName()
				}
		}
		if ( utils.stringRight(files[0].getContentType(),3) == "pdf"){
			if(files[0]){
				attachment_file = files[0].getBytes()	
				file_sizes = Math.round(fileSizes).toString() + ' kb'
				file_name = files[0].getName()
				}
		}
		else{
				scopes.globals._txtMsg = 'El fichero seleccionado no tiene un formato correcto está en '+ files[0].getContentType() ;
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"873AECFA-5472-4479-82DF-A3506EE25D5C"}
 */
function saveFile(event) {
	if(scopes.globals._smartclient){
		var tempFile = plugins.file.createFile(file_name)
		if(!plugins.file.writeFile(tempFile,attachment_file)){
			application.output('Fallo de escritura');
		}
		else{
			if(scopes.globals._mac || scopes.globals._linux){
				application.output('Temporary file created as: ' + tempFile.getAbsolutePath());
				application.executeProgram('open',tempFile.getAbsolutePath())
			}
			else{
				application.executeProgram("rundll32.exe", "url.dll,FileProtocolHandler", tempFile.getAbsolutePath());
			}
		}
	}
	if(scopes.globals._webclient){
		var f = plugins.file.convertToJSFile(attachment_file);
		if (!plugins.file.writeFile(file_name, attachment_file, f.getContentType()))
			application.output('Fallo de escritura web client');
	}
}
