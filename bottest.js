var Vec3 = require('vec3').Vec3;
var user = Player.getPlayer()          // init the funny numbers
var playerAngle = user.getYaw()
if (user.getVehicle() == null)
    Chat.log("WARNING: Bot currently requires a boat before using")
var boatPos = {x:user.getVehicle().getX(), z:user.getVehicle().getX()}
var destinationPos = {x:50,z:50}  // testing coordinates


Chat.log(typeof boatPos)
Chat.log(typeof destinationPos)


function facePosition(coordinates) {
    //Chat.log(coordinates.toString())
    //Chat.log(boatPos.toString())
    var calculatedVector = 1
    
    calculatedVector = {x: destinationPos.x - boatPos.x, z: destinationPos.z - boatPos.z}
    
    Chat.log(calculatedVector.x) 
    Chat.log(calculatedVector.z)
    
    return true
}




var boatAngle = user.getVehicle().getYaw()

facePosition(destinationPos)