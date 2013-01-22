/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"39E24904-58A5-407E-8150-343ECD2C8BA7"}
 */
var _g_sColor = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C4A6AD99-C6ED-491E-8E0D-D638E4D0C43D"}
 */
var _g_sHTML = '';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAF768A0-C39F-4AE9-9E06-FBF09B93A432"}
 */
function onLoad(event) {
	_g_sHTML = '<html>\
	<head>\
	<script>\
	function triggerCallback(returnValue) {' +
	plugins.WebClientUtils.generateCallbackScript(myCallback, ['returnValue']) + '}\
	</script></head><body><script type="text/javascript" src="/jscolor/jscolor.js"></script>\
	<input class="color" value="ffffff" onBlur="triggerCallback(this.value)"></body></html>';
}

/**
 * @properties={typeid:24,uuid:"350CDC99-96E1-4898-ABE7-1D95C95C65F7"}
 */
function myCallback(value) {
	req_status_color_hex = value;
}
