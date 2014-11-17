/*

MOVEMENT FOR ROBOT CONTROLLED BY XBOX360 CONTROLLER


*/
var pads = Gamepad.getStates();
for (var i = 0; i < pads.length; ++i) {
    if (pads[i]) {
        console.log(i + ": (" + pads[i].leftStickX + ", " + pads[i].leftStickY + ")");
    }
}
