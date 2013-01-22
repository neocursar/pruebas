/**
 * Record after-update trigger.
 *
 * @param {JSRecord<db:/nc_model_prices/models_versions>} record record that is updated
 *
 * @properties={typeid:24,uuid:"1835C899-9BE0-49C1-BDCE-7C2F23CBC5A9"}
 */
function afterRecordUpdate(record) {
	models_versions_to_models.modified_date = Date.now();
	models_versions_to_models.user_modified = scopes.globals._userLogin
	models_versions_to_models.option_modified = req_version_name
}
