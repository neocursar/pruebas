/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"554EBAB0-451C-4CF2-BF69-613AD994E7D9"}
 */
function newReg(event) {
	if (forms[event.getFormName()]){
		controller.newRecord()
		forms[event.getFormName()].controller.focusFirstField();	
	}
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"EB3835D9-71EB-42BE-8FB2-E6ED97ADC316"}
 */
function delReg(event) {
	if (forms[event.getFormName()])controller.deleteRecord()
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @param returnID
 * @properties={typeid:24,uuid:"7597E40A-157D-4FF8-8419-9990F483567B"}
 */
function sellectionOk(event,returnID) {
	plugins.window.closeFormPopup(forms[event.getFormName()][returnID])
}
