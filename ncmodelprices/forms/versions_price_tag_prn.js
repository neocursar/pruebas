/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"98D2DF58-257B-45A2-AE66-EB33AA3F8B9F"}
 */
function onRender(event) {
 if (event.getRecordIndex() % 2) event.getRenderable().bgcolor = '#ffffff';
 else event.getRenderable().bgcolor = '#e6e6e6';
}
