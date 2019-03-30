gdjs.gameoverCode = {};
gdjs.gameoverCode.GDkostkaObjects1= [];
gdjs.gameoverCode.GDkostkaObjects2= [];
gdjs.gameoverCode.GDkostka2Objects1= [];
gdjs.gameoverCode.GDkostka2Objects2= [];
gdjs.gameoverCode.GDNewObjectObjects1= [];
gdjs.gameoverCode.GDNewObjectObjects2= [];
gdjs.gameoverCode.GDNewObject2Objects1= [];
gdjs.gameoverCode.GDNewObject2Objects2= [];
gdjs.gameoverCode.GDNewObject3Objects1= [];
gdjs.gameoverCode.GDNewObject3Objects2= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};
gdjs.gameoverCode.condition1IsTrue_0 = {val:false};


gdjs.gameoverCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gra", false);
}}

}


}; //End of gdjs.gameoverCode.eventsList0xaff48


gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.gameoverCode.GDkostkaObjects1.length = 0;
gdjs.gameoverCode.GDkostkaObjects2.length = 0;
gdjs.gameoverCode.GDkostka2Objects1.length = 0;
gdjs.gameoverCode.GDkostka2Objects2.length = 0;
gdjs.gameoverCode.GDNewObjectObjects1.length = 0;
gdjs.gameoverCode.GDNewObjectObjects2.length = 0;
gdjs.gameoverCode.GDNewObject2Objects1.length = 0;
gdjs.gameoverCode.GDNewObject2Objects2.length = 0;
gdjs.gameoverCode.GDNewObject3Objects1.length = 0;
gdjs.gameoverCode.GDNewObject3Objects2.length = 0;

gdjs.gameoverCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['gameoverCode'] = gdjs.gameoverCode;
