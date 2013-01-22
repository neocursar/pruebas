/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C20E2246-5E74-4D02-9B0F-98C8185884B4"}
 */
function sellectionOk(event) {
	plugins.window.closeFormPopup(models_status_id)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9616E601-2AE5-4BCE-9F88-FCAC6178E229"}
 */
function sellectionCancel(event) {
	plugins.window.cancelFormPopup()
}
