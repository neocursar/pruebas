/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF3F2828-3B2F-4BF9-A87D-3A1F9C14964A"}
 */
function onAction(event) {
	forms.models_versions_lst.miEmail(event)
	application.sleep(400)
	var dialog = application.getWindow()
	dialog.hide()
}
