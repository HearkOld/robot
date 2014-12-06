/*

MOVEMENT FOR ROBOT CONTROLLED BY XBOX360 CONTROLLER


*/
var pads = Gamepad.getStates();
for (var i = 0; i < pads.length; ++i) {
    if (pads[i]) {
        console.log(i + ": (" + pads[i].leftStickX + ", " + pads[i].leftStickY + ")");
    }
}
var move = new function (face){
    face = this.face;
}
var right = new move(right)
var left = new move(left)

if i get pads.length{
    require : move.cmd
}

when function move.right {
    get.require then
    inst.command : move
    from function move.right in require
    do move();
end
    
}
