/**
 * @properties={type:8,typeid:36,uuid:"FCA7B850-23B5-4370-9153-33299210AA2B"}
 */
function clc_total_price()
{
	var sum = 0;
	for( var i = 1; i <= models_versions_to_versions_price_tag.getSize(); i++){
		sum += models_versions_to_versions_price_tag.getRecord(i).clc_total_component
	}
	return sum ;
}

/**
 * @properties={type:8,typeid:36,uuid:"AF6C2A17-D9F5-4B08-B86D-22AC9A693451"}
 */
function clc_total_price_sec_format()
{
	var sum = 0;
	for( var i = 1; i <= models_versions_to_versions_price_tag.getSize(); i++){
		if(models_versions_to_versions_price_tag.getRecord(i).clc_total_component_sec_format > 0){
			sum += models_versions_to_versions_price_tag.getRecord(i).clc_total_component_sec_format
		}
		else{
			sum += models_versions_to_versions_price_tag.getRecord(i).clc_total_component
		}
	}
	return sum ;
}
