dataSource:"db:/nc_model_prices/models",
defaultPageFormat:"1;595.2755813598633;841.8897399902344;0.0;0.0;595.2755813598633;841.8897399902344;",
initialSort:"creation_date desc",
items:[
{
height:120,
partType:5,
typeid:19,
uuid:"1192DE7D-3987-42F8-AED1-54C080B03A8E"
},
{
height:20,
partType:1,
typeid:19,
uuid:"172BAB1C-ECC1-420A-B562-BDAC71DAE92D"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"models_to_models_versions_version_ok.clc_total_price",
editable:false,
format:"0.00",
location:"608,99",
name:"total_price",
selectOnEnter:true,
size:"61,20",
styleClass:"center",
transparent:true,
typeid:4,
uuid:"2A9F87BF-2E9B-4A18-AC4D-6610D7F34CA0"
},
{
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"'modified_date'\"
]
}
}",
fontType:"Trebuchet MS,0,11",
formIndex:10,
location:"96,0",
name:"lbl_creation_date",
onActionMethodID:"F12AA073-31F7-43E6-A610-C57AA3581F1E",
showClick:false,
showFocus:false,
size:"109,20",
text:"i18n:label.modified_date",
transparent:true,
typeid:7,
uuid:"2D1F773A-0615-486A-A481-C7FCCA7B7D50"
},
{
anchors:3,
location:"506,60",
name:"lbl_sales_price",
size:"97,20",
text:"i18n:label.sale_price",
transparent:true,
typeid:7,
uuid:"2D49C5D1-DB23-4D65-B757-2F53E6E8B2F5"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"models_to_models_versions_version_ok.composition",
editable:false,
fontType:"Trebuchet MS,1,12",
formIndex:17,
format:"|U",
location:"376,40",
name:"composition",
printable:false,
selectOnEnter:true,
size:"259,20",
transparent:true,
typeid:4,
uuid:"33B358DF-362E-47B5-8765-EA86D954DF01"
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"creation_date",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"dd-MM-yyyy|ddMMyyyy",
location:"84,80",
name:"creation_date",
printable:false,
selectOnEnter:true,
size:"218,20",
transparent:true,
typeid:4,
uuid:"39D7F625-E875-403C-8466-AE1150176DB9"
},
{
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"'description'\"
]
}
}",
fontType:"Trebuchet MS,0,11",
formIndex:10,
location:"296,0",
name:"lbl_description",
onActionMethodID:"F12AA073-31F7-43E6-A610-C57AA3581F1E",
showClick:false,
showFocus:false,
size:"73,20",
text:"i18n:label.description",
transparent:true,
typeid:7,
uuid:"55186003-561B-402A-A4D8-9266012C830D"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"models_to_models_versions_version_ok.retail_price",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"0.00",
location:"607,60",
name:"sales_prices",
selectOnEnter:true,
size:"62,20",
styleClass:"center",
transparent:true,
typeid:4,
uuid:"5D6BB22E-D7EB-4D34-ABF8-8DB9AEFAF0F1"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"1\"
},
methods:{
onRenderMethodID:{
arguments:[
null,
\"'models_frm'\"
]
}
}",
dataProviderID:"req_model_ref",
editable:false,
fontType:"Trebuchet MS,1,12",
foreground:"#800000",
format:"|U",
location:"84,21",
name:"req_model_ref",
onRenderMethodID:"15574342-0B0A-4F09-924A-4C3DDD60080A",
selectOnEnter:true,
size:"288,20",
text:"Description",
transparent:true,
typeid:4,
uuid:"7333291D-3B08-45D7-97C1-4CFC2DDC7E1D"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"models_to_models_versions_version_ok.purchase_date",
editable:false,
format:"dd-MM-yyyy|ddMMyyyy",
location:"608,81",
name:"date_purchase",
selectOnEnter:true,
size:"61,20",
styleClass:"center",
transparent:true,
typeid:4,
uuid:"8936DB4E-CD05-4437-9CDF-9F6E05F9B989"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"option_modified",
editable:false,
fontType:"Trebuchet MS,1,12",
location:"316,99",
name:"option_modifiedc",
printable:false,
selectOnEnter:true,
size:"189,20",
transparent:true,
typeid:4,
uuid:"92166DB4-3ECC-4804-AA99-094478C8E130"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"models_to_models_versions.planned_purchase",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"#,###|#,###",
location:"303,60",
name:"planned_purchase",
selectOnEnter:true,
size:"68,20",
styleClass:"center",
transparent:true,
typeid:4,
uuid:"95B35827-2E7E-4779-8E9A-F46AC0EE07AF"
},
{
anchors:12,
formIndex:11,
imageMediaID:"87B23B64-F068-471E-90FD-BA4A1FB8799C",
location:"634,0",
name:"desc",
size:"16,16",
toolTipText:"i18n:label.dsc",
transparent:true,
typeid:7,
uuid:"99A9818F-B2C1-4A70-8D32-0718EE85ED0E"
},
{
anchors:3,
location:"506,99",
name:"lbl_total_price",
size:"102,20",
text:"i18n:label.cost_price",
transparent:true,
typeid:7,
uuid:"A0B2BC80-A058-4900-A3CE-8D3216BFD547"
},
{
anchors:11,
imageMediaID:"E26B5B22-2812-4420-9E8D-D49EFEDCE2FE",
location:"0,0",
mediaOptions:4,
name:"img_toolbar_title_header",
printable:false,
showClick:false,
showFocus:false,
size:"674,20",
typeid:7,
uuid:"AD8CA198-2A66-4311-922B-D3580C0080BE"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"1\"
},
methods:{
onRenderMethodID:{
arguments:[
null,
\"'models_frm'\"
]
}
}",
dataProviderID:"description",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"|U",
location:"84,40",
name:"description",
selectOnEnter:true,
size:"288,20",
text:"Description",
transparent:true,
typeid:4,
uuid:"B7A3C9E1-18EE-4F6D-BBEB-A2D9D1ED71C4"
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"customer",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"|U",
location:"84,60",
name:"customer",
selectOnEnter:true,
size:"218,20",
transparent:true,
typeid:4,
uuid:"BB25696D-A9BB-4062-9AFC-8096593ED7E0"
},
{
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"'customer'\"
]
}
}",
fontType:"Trebuchet MS,0,11",
formIndex:10,
location:"371,0",
name:"lbl_customer",
onActionMethodID:"F12AA073-31F7-43E6-A610-C57AA3581F1E",
showClick:false,
showFocus:false,
size:"59,20",
text:"i18n:label.customer",
transparent:true,
typeid:7,
uuid:"CB3CA601-864C-4D65-BFDB-1C2255B986B5"
},
{
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"'purchase_date'\"
]
}
}",
fontType:"Trebuchet MS,0,11",
formIndex:10,
location:"206,0",
name:"lbl_purchase_date",
onActionMethodID:"F12AA073-31F7-43E6-A610-C57AA3581F1E",
showClick:false,
showFocus:false,
size:"88,20",
text:"i18n:label.purchase_date",
transparent:true,
typeid:7,
uuid:"CE33C349-8137-4B02-9A3E-10461E48A692"
},
{
anchors:7,
formIndex:1,
imageMediaID:"F43826A2-F61F-40EA-BAA0-F137D1A893EC",
location:"640,27",
name:"btn_frm",
onActionMethodID:"97CA5F4A-5F3A-45A7-ABEF-8A0B272183BB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverImageMediaID:"57AF8FA5-D594-45FC-A46F-5CF7F0F2498D",
showClick:false,
size:"25,25",
tabSeq:1,
toolTipText:"i18n:toolbar.more_info",
transparent:true,
typeid:7,
uuid:"CFB97863-552E-431A-910D-DF1B59C3C928"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"models_to_models_versions_version_ok.req_version_name",
editable:false,
fontType:"Trebuchet MS,1,12",
formIndex:11,
format:"|U",
location:"376,20",
name:"req_version_name",
printable:false,
selectOnEnter:true,
size:"259,20",
transparent:true,
typeid:4,
uuid:"DC98B3E5-55E8-46EB-B8D7-44495D48EFFE"
},
{
anchors:13,
borderType:"LineBorder,1,#a8a8a8",
dataProviderID:"photo",
displayType:9,
editable:false,
formIndex:3,
horizontalAlignment:0,
location:"1,21",
name:"photo",
onActionMethodID:"97CA5F4A-5F3A-45A7-ABEF-8A0B272183BB",
onDataChangeMethodID:"-1",
onRenderMethodID:"-1",
scrollbars:36,
size:"80,98",
tabSeq:-2,
text:"Photo",
typeid:4,
uuid:"DF3EBDEB-D0E2-4E63-BAA2-4355A3527C12"
},
{
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"'req_model_ref'\"
]
}
}",
fontType:"Trebuchet MS,0,11",
formIndex:10,
location:"21,0",
name:"lbl_ref_model",
onActionMethodID:"F12AA073-31F7-43E6-A610-C57AA3581F1E",
showClick:false,
showFocus:false,
size:"65,20",
text:"i18n:label.model_ref",
transparent:true,
typeid:7,
uuid:"E0BB34E8-3A57-45DA-B757-6D88D5FCCECA"
},
{
anchors:3,
location:"506,81",
name:"lbl_retail_price",
size:"102,20",
text:"i18n:label.purchase_date",
transparent:true,
typeid:7,
uuid:"E473E19A-A3E9-4A70-8171-DF4DA466B6D7"
},
{
anchors:12,
formIndex:12,
imageMediaID:"D2DB549F-F03E-49E1-9C56-55FAD4EC85BC",
location:"655,0",
mediaOptions:14,
name:"asc",
size:"16,16",
toolTipText:"i18n:label.asc",
transparent:true,
typeid:7,
uuid:"E5EDC117-3D56-41BD-98B3-090B0C4DB39F"
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"modified_date",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"dd-MM-yyyy HH:mm|ddMMyyyy",
location:"190,99",
name:"modified_date",
printable:false,
selectOnEnter:true,
size:"125,20",
styleClass:"center",
transparent:true,
typeid:4,
uuid:"EF042125-856D-4103-B523-9A273C19C71F"
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"user_modified",
editable:false,
fontType:"Trebuchet MS,1,12",
format:"|U",
location:"84,99",
name:"user_modified",
printable:false,
selectOnEnter:true,
size:"105,20",
transparent:true,
typeid:4,
uuid:"F1D116C3-709A-491A-88EA-8F9E7B87518E"
}
],
name:"models_lst",
navigatorID:"-1",
onShowMethodID:"8D908258-25C3-4F87-8A78-A37F3E36AE2C",
scrollbars:32,
size:"674,143",
styleClass:"main",
styleName:"model_forms",
typeid:3,
uuid:"BDFDA9FE-B750-46AD-80BC-C5A8C27F48E2",
view:4