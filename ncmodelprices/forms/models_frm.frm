dataSource:"db:/nc_model_prices/models",
items:[
{
anchors:3,
labelFor:"model_size",
location:"286,121",
size:"129,20",
text:"i18n:label.user_name",
transparent:true,
typeid:7,
uuid:"0FCF5628-C8DD-4EAC-A95B-911FBA08AAA0"
},
{
anchors:3,
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"option_modified",
editable:false,
location:"416,143",
name:"option_modified",
printable:false,
selectOnEnter:true,
size:"108,20",
typeid:4,
uuid:"19C6CD30-28CC-479D-9A67-F53FBCE9D4A5"
},
{
anchors:3,
labelFor:"model_size",
location:"286,143",
size:"129,20",
text:"i18n:label.version_name",
transparent:true,
typeid:7,
uuid:"26116FE6-1DA7-4EC7-A1E0-49F5C2583E04"
},
{
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"customer",
format:"|U",
location:"119,76",
name:"customer",
selectOnEnter:true,
size:"146,20",
tabSeq:4,
typeid:4,
uuid:"2B2201C9-1BC7-4421-AA60-21515F26B3A0"
},
{
labelFor:"model_size",
location:"15,54",
size:"100,20",
text:"i18n:label.model_size",
transparent:true,
typeid:7,
uuid:"3048D4D1-3024-4D2D-9EAA-64910B94196E"
},
{
anchors:3,
formIndex:4,
imageMediaID:"FAA0E6BF-07FD-4B42-BF35-B50535DFFF62",
location:"531,11",
mediaOptions:14,
name:"btn_image_save",
onActionMethodID:"CBF50A49-F406-47C0-B089-9F61831754E1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
showFocus:false,
size:"20,18",
tabSeq:-2,
toolTipText:"i18n:toolbar.save",
transparent:true,
typeid:7,
uuid:"380FE823-E3F7-4050-A1D5-0344C8A9B021"
},
{
anchors:3,
formIndex:3,
imageMediaID:"4D8E8056-CBF2-4C61-A6F1-C767E33244A9",
location:"554,10",
mediaOptions:14,
name:"btn_image_load",
onActionMethodID:"9059BA2F-8876-403F-BFE6-B2B85C6F415E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
showFocus:false,
size:"20,18",
tabSeq:-2,
toolTipText:"i18n:toolbar.load",
transparent:true,
typeid:7,
uuid:"45382DB2-F371-4029-8ED5-A10A39636877"
},
{
anchors:3,
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"modified_date",
editable:false,
format:"dd-MM-yyyy HH:mm|ddMMyyyy",
location:"416,98",
name:"modified_date",
printable:false,
selectOnEnter:true,
size:"108,20",
styleClass:"center",
typeid:4,
uuid:"66614344-CDEA-43FE-8BFB-9EAE3D695736"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
items:[
{
containsFormID:"7B5417EC-68C6-48CE-81DB-56A13E12DDA0",
location:"14,198",
relationName:"models_to_models_versions",
text:"models_versions_lst",
typeid:15,
uuid:"2FC2EA5B-4B91-49D9-8698-13A94E1F279D"
}
],
location:"0,168",
name:"tab_version",
printable:false,
size:"674,180",
tabSeq:6,
transparent:true,
typeid:16,
uuid:"69E9308F-B0F0-4FFB-9253-B01D97FC813A"
},
{
anchors:15,
items:[
{
containsFormID:"5AC68D64-E882-4EFA-893C-804364B56C7B",
location:"17,416",
relationName:"models_to_models_versions.models_versions_to_versions_price_tag",
text:"versions_price_tag_lst",
typeid:15,
uuid:"B2CC0FB4-2B98-41F5-9A5D-C71836EEDC80"
}
],
location:"0,349",
name:"tab_tags",
printable:false,
size:"674,250",
tabSeq:7,
transparent:true,
typeid:16,
uuid:"6AFDB477-FF9E-4390-938D-C631D3A92244"
},
{
anchors:11,
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
format:"|U",
location:"119,32",
name:"description",
selectOnEnter:true,
size:"405,20",
tabSeq:2,
text:"Description",
typeid:4,
uuid:"714EAD2B-BE8E-4DBC-8C89-ACB13E0C973B"
},
{
anchors:11,
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
format:"|U",
location:"119,10",
name:"req_model_ref",
onRenderMethodID:"15574342-0B0A-4F09-924A-4C3DDD60080A",
selectOnEnter:true,
size:"405,20",
tabSeq:1,
text:"Description",
typeid:4,
uuid:"731CB14F-BD1F-4F21-8FEB-A4E4E2455A43"
},
{
anchors:3,
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"models_to_models_versions.total_planned_purchase",
editable:false,
format:"#,###|#,###",
location:"416,54",
name:"planned_purchase",
selectOnEnter:true,
size:"108,20",
styleClass:"center",
typeid:4,
uuid:"7A2A6002-0042-48D7-B784-08EDD22659EA"
},
{
anchors:3,
formIndex:2,
imageMediaID:"FABCC6E0-2936-4419-BEFA-4AB613AC945F",
location:"576,11",
mediaOptions:14,
name:"btn_image_del",
onActionMethodID:"AA8D5227-67D5-4803-8D52-0229EEA0FF1C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
showFocus:false,
size:"20,18",
tabSeq:-2,
toolTipText:"i18n:toolbar.del",
transparent:true,
typeid:7,
uuid:"8265FE4A-15C2-4E31-BD7A-941C6410EF04"
},
{
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"model_size",
format:"|U",
location:"119,54",
name:"model_size",
selectOnEnter:true,
size:"146,20",
tabSeq:3,
text:"Model Size",
typeid:4,
uuid:"85973F28-7095-49B2-A585-8959DDB6218A"
},
{
labelFor:"req_model_ref",
location:"15,10",
size:"100,20",
text:"i18n:label.model_ref",
transparent:true,
typeid:7,
uuid:"8EA5AF46-72FF-4D82-89EF-86C385CBC082"
},
{
anchors:3,
labelFor:"model_size",
location:"286,54",
size:"129,20",
text:"i18n:label.total_planned_purchase",
transparent:true,
typeid:7,
uuid:"951CFB26-5411-4325-9AEB-6CE62273BCDF"
},
{
anchors:3,
dataProviderID:"photo",
displayType:9,
formIndex:1,
horizontalAlignment:0,
location:"529,10",
name:"photo",
onDataChangeMethodID:"2C9D9AF7-6CFA-4467-888D-8D14EACE8A73",
onRenderMethodID:"-1",
scrollbars:36,
size:"140,153",
tabSeq:5,
text:"Photo",
typeid:4,
uuid:"AD6B313D-4308-425C-B85B-0DA47E537A98"
},
{
anchors:3,
labelFor:"model_size",
location:"286,76",
name:"lbl_retail_price",
size:"129,20",
text:"i18n:label.avg_retail_price",
transparent:true,
typeid:7,
uuid:"B22CDBB3-281A-4FC1-BE11-EED12DEB3992"
},
{
anchors:3,
labelFor:"model_size",
location:"286,98",
size:"130,20",
text:"i18n:label.modified_date",
transparent:true,
typeid:7,
uuid:"C74CAB29-57A5-458E-8690-DAF938096BE1"
},
{
height:600,
partType:5,
typeid:19,
uuid:"D8B6D2F6-7C8D-4E1B-9A50-BB5F211BC55B"
},
{
labelFor:"description",
location:"15,32",
size:"100,20",
text:"i18n:label.description",
transparent:true,
typeid:7,
uuid:"E4DC73DA-7008-4419-8121-31C047EED200"
},
{
labelFor:"model_size",
location:"15,76",
size:"100,20",
text:"i18n:label.customer",
transparent:true,
typeid:7,
uuid:"E9B4DA09-C8A0-4F21-80F5-7DED4C61135E"
},
{
anchors:3,
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"user_modified",
editable:false,
format:"|U",
location:"416,121",
name:"user_modified",
printable:false,
selectOnEnter:true,
size:"108,20",
typeid:4,
uuid:"F87AD112-8B5C-43C3-A5D8-DC332E949157"
},
{
anchors:3,
customProperties:"design:{
required:\"0\"
}",
dataProviderID:"models_to_models_versions.avg_retail_price",
editable:false,
format:"0.00|0.00",
location:"416,76",
name:"retail_price",
selectOnEnter:true,
size:"108,20",
styleClass:"center",
typeid:4,
uuid:"FA829ACF-0F02-42B1-BCB5-A8499D43DE83"
}
],
name:"models_frm",
navigatorID:"-1",
onRenderMethodID:"-1",
onShowMethodID:"47E6F77F-A6A1-4EEC-BC17-D7B37447F336",
scrollbars:32,
size:"674,600",
styleClass:"main",
styleName:"model_forms",
typeid:3,
uuid:"CC357BAB-8415-4625-BB8B-E720870F5EA6"