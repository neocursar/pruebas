/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"EA664085-3937-4C10-B5BF-0A1363FA67C7"}
 */
function selectColor(event) {
	var color = scopes.globals._smartclient ? application.showColorChooser():selColorWeb(event)
	if (color) req_status_color_hex = color
}

/**
 * @param event
 * @properties={typeid:24,uuid:"21B17C2B-37B0-487B-BB1B-B6ED4FFB6044"}
 */
function selColorWeb(event) {
	var dialog = application.createWindow("models_status_frm", JSWindow.MODAL_DIALOG);
	dialog.title = 'Seleccionar el color'
	dialog.show('models_status_frm')
}
