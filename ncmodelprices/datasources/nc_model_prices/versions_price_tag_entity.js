/**
 * Record after-update trigger.
 *
 * @param {JSRecord<db:/nc_model_prices/versions_price_tag>} record record that is updated
 *
 * @properties={typeid:24,uuid:"89C9A452-E646-44F6-A095-A00E71641C68"}
 */
function afterRecordUpdate(record) {
	versions_price_tag_to_models_versions.models_versions_to_models.modified_date = Date.now()
	versions_price_tag_to_models_versions.models_versions_to_models.user_modified = scopes.globals._userLogin
	versions_price_tag_to_models_versions.models_versions_to_models.option_modified = versions_price_tag_to_models_versions.req_version_name
}

/**
 * Record after-insert trigger.
 *
 * @param {JSRecord<db:/nc_model_prices/versions_price_tag>} record record that is inserted
 *
 * @properties={typeid:24,uuid:"4B1C2F0D-F3BF-414C-9170-142B81DA1155"}
 */
function afterRecordInsert(record) {
	versions_price_tag_to_models_versions.models_versions_to_models.modified_date = Date.now()
	versions_price_tag_to_models_versions.models_versions_to_models.user_modified = scopes.globals._userLogin
	versions_price_tag_to_models_versions.models_versions_to_models.option_modified = versions_price_tag_to_models_versions.req_version_name
}
