/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"C809EEEA-6BC4-4DDD-9F65-4104ACA4EA31"}
 */
function selectStatus(event) {
	plugins.window.showFormPopup(event.getSource(),forms.models_status_lst,foundset.getSelectedRecord(),"models_status_id")
}

/**
 * @properties={typeid:24,uuid:"4CC1673C-2F7F-4B57-B34C-E55B934D9786"}
 */
function colorTXT1() {
		var color = scopes.globals._smartclient ? application.showColorChooser('#ff0000'):null
		if (color) {
			txt1_color = color
			elements.txt1.fgcolor = txt1_color
			elements.txt1_color.bgcolor = txt1_color
		}
}

/**
 * @properties={typeid:24,uuid:"0A7EB7E2-348D-4392-92AE-A6000DA8EE0D"}
 */
function colorTXT2() {
	var color = scopes.globals._smartclient ? application.showColorChooser('#0080ff'):null
	if (color) {
		txt2_color = color
		elements.txt2.fgcolor = txt2_color
		elements.txt2_color.bgcolor = txt2_color
	}
}

/**
 * @properties={typeid:24,uuid:"98EE36A2-4DA8-4D0F-A649-C757E9EF5FC2"}
 */
function colorTXT3() {
	var color = scopes.globals._smartclient ? application.showColorChooser('#008040'):null
	if (color) {
		txt3_color = color
		elements.txt3.fgcolor = txt3_color
		elements.txt3_color.bgcolor = txt3_color
	}
}

/**
 * @properties={typeid:24,uuid:"1E4B2BCB-F41A-4A53-82B2-59B74EC9EE40"}
 */
function loadColors() {
	elements.txt1.fgcolor = txt1_color
	elements.txt1_color.bgcolor = txt1_color
	elements.txt2.fgcolor = txt2_color
	elements.txt2_color.bgcolor = txt2_color
	elements.txt3.fgcolor = txt3_color
	elements.txt3_color.bgcolor = txt3_color
}
