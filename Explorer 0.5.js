let Vec3 = require('vec3').Vec3; // Currently unused, remove if this isnt used
let user = Player.getPlayer()   // typing "Player.getPlayer() is not fun.
if (user.getVehicle() == null)
   Chat.log("WARNING: Bot currently requires a boat before using") // warns against not being in a boat, which currently has no error detection.
let boatPos = {x:user.getVehicle().getX(), z:user.getVehicle().getZ()} // After warning, init boat values
let destinationPos = {x: 50, z: 50}  // testing coordinates, replace with node system later.
let boatAngle = user.getVehicle().getYaw()
if (boatAngle < 0) boatAngle = 360 + boatAngle;

const destTolerance = 2.5 // square around the destination where the boat will search for the next waypoint.


function vecToAngle(x1, z1, x2, z2) {
  var dz = z2 - z1;
  var dx = x2 - x1;
  var theta = Math.atan2(dz,dx);
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180] <--- dont use these unless we need degrees for any reason. Remove if unessecary.
  theta -= 90
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

function left(){
    KeyBind.keyBind("key.left", true);
    Client.waitTick(1)
    KeyBind.keyBind("key.left", false)
}

function right(){
    KeyBind.keyBind("key.right",true)
    Client.waitTick(1)                                
    KeyBind.keyBind("key.right",false)
}
function move(coordinates){
      KeyBind.keyBind("key.forward",true)
      while (Math.abs(boatPos.x-coordinates.x) >= destTolerance || Math.abs(boatPos.z - coordinates.z) >= destTolerance) {
        boatPos = {x:user.getVehicle().getX(), z:user.getVehicle().getZ()}
        desiredAngle = vecToAngle(boatPos.x, boatPos.z, destinationPos.x, destinationPos.z)
        boatAngle = user.getVehicle().getYaw()
        if (boatAngle < 0) boatAngle = 360 + boatAngle;
        if (Math.abs(boatAngle - desiredAngle) >= 5) (boatAngle - desiredAngle+360)%360>180 ? right() : left() // math for spinning. dont ask me how this works
        Client.waitTick(1) // for some strange reason, if this is not here, the game crashes. DONT MODIFY THIS!
          
          
      }
    KeyBind.keyBind("key.forward",false)
}

move(destinationPos)



//move(calculatedAngle)
