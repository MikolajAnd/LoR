gdjs.menuCode = {};
gdjs.menuCode.GDkostkaObjects1= [];
gdjs.menuCode.GDkostkaObjects2= [];
gdjs.menuCode.GDkostka2Objects1= [];
gdjs.menuCode.GDkostka2Objects2= [];
gdjs.menuCode.GDLoRObjects1= [];
gdjs.menuCode.GDLoRObjects2= [];
gdjs.menuCode.GDNewObjectObjects1= [];
gdjs.menuCode.GDNewObjectObjects2= [];
gdjs.menuCode.GDstartowankoObjects1= [];
gdjs.menuCode.GDstartowankoObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gra", false);
}}

}


}; //End of gdjs.menuCode.eventsList0xaff48


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.menuCode.GDkostkaObjects1.length = 0;
gdjs.menuCode.GDkostkaObjects2.length = 0;
gdjs.menuCode.GDkostka2Objects1.length = 0;
gdjs.menuCode.GDkostka2Objects2.length = 0;
gdjs.menuCode.GDLoRObjects1.length = 0;
gdjs.menuCode.GDLoRObjects2.length = 0;
gdjs.menuCode.GDNewObjectObjects1.length = 0;
gdjs.menuCode.GDNewObjectObjects2.length = 0;
gdjs.menuCode.GDstartowankoObjects1.length = 0;
gdjs.menuCode.GDstartowankoObjects2.length = 0;

gdjs.menuCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['menuCode'] = gdjs.menuCode;
