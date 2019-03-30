gdjs.graCode = {};
gdjs.graCode.GDkostkaObjects1= [];
gdjs.graCode.GDkostkaObjects2= [];
gdjs.graCode.GDkostkaObjects3= [];
gdjs.graCode.GDkostka2Objects1= [];
gdjs.graCode.GDkostka2Objects2= [];
gdjs.graCode.GDkostka2Objects3= [];
gdjs.graCode.GDplayerObjects1= [];
gdjs.graCode.GDplayerObjects2= [];
gdjs.graCode.GDplayerObjects3= [];
gdjs.graCode.GDPunktyObjects1= [];
gdjs.graCode.GDPunktyObjects2= [];
gdjs.graCode.GDPunktyObjects3= [];

gdjs.graCode.conditionTrue_0 = {val:false};
gdjs.graCode.condition0IsTrue_0 = {val:false};
gdjs.graCode.condition1IsTrue_0 = {val:false};
gdjs.graCode.condition2IsTrue_0 = {val:false};


gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.graCode.GDkostka2Objects1});gdjs.graCode.eventsList0x66ad90 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tworzenie2");
}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostka2Objects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie2");
}}

}


}; //End of gdjs.graCode.eventsList0x66ad90
gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.graCode.GDkostkaObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.graCode.GDplayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.graCode.GDkostkaObjects1});gdjs.graCode.eventsList0x670248 = function(runtimeScene) {

{

gdjs.graCode.GDkostkaObjects2.createFrom(gdjs.graCode.GDkostkaObjects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects2[i].getX() == (( gdjs.graCode.GDkostkaObjects2.length === 0 ) ? 0 :gdjs.graCode.GDkostkaObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects2[k] = gdjs.graCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.graCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Punkty").add(1);
}}

}


{

gdjs.graCode.GDkostkaObjects2.createFrom(gdjs.graCode.GDkostkaObjects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDkostkaObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDkostkaObjects2[i].getX() == (( gdjs.graCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDplayerObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDkostkaObjects2[k] = gdjs.graCode.GDkostkaObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDkostkaObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.graCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Punkty").add(1);
}}

}


{

/* Reuse gdjs.graCode.GDkostkaObjects1 */
/* Reuse gdjs.graCode.GDplayerObjects1 */

gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getY() == (( gdjs.graCode.GDkostkaObjects1.length === 0 ) ? 0 :gdjs.graCode.GDkostkaObjects1[0].getY())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


}; //End of gdjs.graCode.eventsList0x670248
gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.graCode.GDplayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.graCode.GDkostka2Objects1});gdjs.graCode.eventsList0x670d90 = function(runtimeScene) {

{

gdjs.graCode.GDkostka2Objects2.createFrom(gdjs.graCode.GDkostka2Objects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects2[i].getX() == (( gdjs.graCode.GDkostka2Objects2.length === 0 ) ? 0 :gdjs.graCode.GDkostka2Objects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects2[k] = gdjs.graCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.graCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Punkty").add(1);
}}

}


{

gdjs.graCode.GDkostka2Objects2.createFrom(gdjs.graCode.GDkostka2Objects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDkostka2Objects2.length;i<l;++i) {
    if ( gdjs.graCode.GDkostka2Objects2[i].getX() == (( gdjs.graCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDplayerObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDkostka2Objects2[k] = gdjs.graCode.GDkostka2Objects2[i];
        ++k;
    }
}
gdjs.graCode.GDkostka2Objects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.graCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Punkty").add(1);
}}

}


{

/* Reuse gdjs.graCode.GDkostka2Objects1 */
/* Reuse gdjs.graCode.GDplayerObjects1 */

gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getY() == (( gdjs.graCode.GDkostka2Objects1.length === 0 ) ? 0 :gdjs.graCode.GDkostka2Objects1[0].getY())-100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


}; //End of gdjs.graCode.eventsList0x670d90
gdjs.graCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.graCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].setPosition(250,350);
}
}{for(var i = 0, len = gdjs.graCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].setPosition(gdjs.random(400),800);
}
}{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].hide();
}
}}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Punkty")) >= 5;
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].addPolarForce(270, 200, 0);
}
}
{ //Subevents
gdjs.graCode.eventsList0x66ad90(runtimeScene);} //End of subevents
}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getX() >= 0 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getX() <= 475 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


{
gdjs.graCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
{for(var i = 0, len = gdjs.graCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tworzenie");
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDkostkaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie");
}}

}


{


{
}

}


{

gdjs.graCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects, false, runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x670248(runtimeScene);} //End of subevents
}

}


{

gdjs.graCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects, false, runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x670d90(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
gdjs.graCode.GDPunktyObjects1.createFrom(runtimeScene.getObjects("Punkty"));
{for(var i = 0, len = gdjs.graCode.GDPunktyObjects1.length ;i < len;++i) {
    gdjs.graCode.GDPunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Punkty"))));
}
}}

}


}; //End of gdjs.graCode.eventsList0xaff48


gdjs.graCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.graCode.GDkostkaObjects1.length = 0;
gdjs.graCode.GDkostkaObjects2.length = 0;
gdjs.graCode.GDkostkaObjects3.length = 0;
gdjs.graCode.GDkostka2Objects1.length = 0;
gdjs.graCode.GDkostka2Objects2.length = 0;
gdjs.graCode.GDkostka2Objects3.length = 0;
gdjs.graCode.GDplayerObjects1.length = 0;
gdjs.graCode.GDplayerObjects2.length = 0;
gdjs.graCode.GDplayerObjects3.length = 0;
gdjs.graCode.GDPunktyObjects1.length = 0;
gdjs.graCode.GDPunktyObjects2.length = 0;
gdjs.graCode.GDPunktyObjects3.length = 0;

gdjs.graCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['graCode'] = gdjs.graCode;
