/**
 * @param {JSEvent} event
 * @param {String} title
 * @param {String} formTab
 * @param {String} formSort
 * @properties={typeid:24,uuid:"2328CE53-6FFF-4146-B037-008CFBE562A7"}
 */
function createTab(event,title,formTab,formSort) {
	application.getWindow().title = title
	scopes.interfaces._formTitle = i18n.getI18NMessage(title)
	forms.init.elements.tabForms.removeAllTabs()
	forms.init.elements.tabForms.addTab(forms[formTab],title)
	formSort!=null?forms[formTab].foundset.sort(formSort):''
}
