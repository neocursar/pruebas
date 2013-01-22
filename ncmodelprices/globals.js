/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2144827-C90A-49A2-9A58-5FE334E45C3A"}
 */
var _datamatrixCode = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F73F8959-88D4-46AD-B3F1-6D312AD000F8"}
 */
var _emailTo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"37FCD115-9B2D-4946-9EA7-42B60959EAE8"}
 */
var _emailFrom = '';

/**
 * @type {String}
 * @properties={typeid:35,uuid:"2ABDCEF3-D0C3-4F24-82E3-C66BB3E8F247"}
 */
var _requiredColor = '#ffdbdc';

/**
 * @type {Boolean}
 * @properties={typeid:35,uuid:"D0D5D131-F2A5-4886-9E46-CECA7E8D87A9",variableType:-4}
 */
var _webclient = application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ? true : false;

/**
 * @type {Boolean}
 * @properties={typeid:35,uuid:"C1F460DD-C08F-42B6-920D-A6CAF5C3B595",variableType:-4}
 */
var _smartclient = application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT ? true : false;

/**
 * @type {Boolean}
 * @properties={typeid:35,uuid:"A77E028E-AFCD-4CC0-8DB5-73D2530848F3",variableType:-4}
 */
var _mac = application.getOSName().substr(0,3)  == 'Mac'?true:false;

/**
 * @type {Boolean}
 * @properties={typeid:35,uuid:"3A1A7EA7-87B8-4F52-804D-3A95752DE96F",variableType:-4}
 */
var _windows = application.getOSName().substr(0,3)  == 'Win'?true:false;

/**
 * @type {Boolean}
 * @properties={typeid:35,uuid:"E68DABB4-4019-4B83-A73C-E2C6532F5380",variableType:-4}
 */
var _linux = application.getOSName().substr(0,3) == 'Lin'?true:false;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"D6F1F70E-F6B3-4965-839E-0C3352C3F867"}
 */
var _txtMsg = '';

/**
 * @type {String}
 * @properties={typeid:35,uuid:"DB2876FD-A18E-4565-BC53-84322EBA8202"}
 */
var _txtSearch = '';

/**
 * @param {JSRenderEvent} event the render event
 * @properties={typeid:24,uuid:"15574342-0B0A-4F09-924A-4C3DDD60080A"}
 */
function _required(event) {
	//Asignamos el color de fondo si el campo es obligatorio
	if((event.getRecord()[event.getRenderable().getDataProviderID()] == null) || (event.getRecord()[event.getRenderable().getDataProviderID()]  == '') )
			event.getRenderable().bgcolor = scopes.globals._requiredColor
}

/**
 * @properties={typeid:24,uuid:"10AE43E9-2573-4FEC-8964-59364EAF6826"}
 */
function _closePopup(){
	plugins.window.closeFormPopup('')
}