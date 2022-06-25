let user = Player.getPlayer()   // typing "Player.getPlayer() is not fun.
if (user.getVehicle() == null)
    Chat.log("WARNING: Bot currently requires a boat before using. Sit in a boat before begining") // warns against not being in a boat, which currently has no error detection.

let boatPos = { x: user.getVehicle().getX(), z: user.getVehicle().getZ() } // After warning, init boat values

let destinationPos = { x: 0, z: 0 }  // set your destination here. this will be replaced later with a GUI

let boatAngle = user.getVehicle().getYaw()
if (boatAngle < 0) boatAngle = 360 + boatAngle;

const destTolerance = 2.5 // square around the destination where the boat will search for the next waypoint. Default Value is 2.5


function vecToAngle(x1, z1, x2, z2) {
    var dz = z2 - z1;
    var dx = x2 - x1;
    var theta = Math.atan2(dz, dx);
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180] <--- dont use these unless we need degrees for any reason. Remove if unessecary.
    theta -= 90
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

function left() {
    KeyBind.keyBind("key.left", true); // this is probably a terrible way of doing this, this should be fixed later.
    Client.waitTick(1)
    KeyBind.keyBind("key.left", false)
}

function right() {
    KeyBind.keyBind("key.right", true)
    Client.waitTick(1)
    KeyBind.keyBind("key.right", false)
}
function move(orderName, coordinates) {
    while (Math.abs(boatPos.x - coordinates.x) >= destTolerance || Math.abs(boatPos.z - coordinates.z) >= destTolerance) {
        KeyBind.keyBind("key.forward", true)
        boatPos = { x: user.getVehicle().getX(), z: user.getVehicle().getZ() }
        desiredAngle = vecToAngle(boatPos.x, boatPos.z, coordinates.x, coordinates.z)
        boatAngle = user.getVehicle().getYaw()
        if (boatAngle < 0) boatAngle = 360 + boatAngle;
        if (Math.abs(boatAngle - desiredAngle) >= 5) (boatAngle - desiredAngle + 360) % 360 > 180 ? right() : left() // haha funny numbers go BRRR. main logic for boat rotation.
        Client.waitTick(1) // for some strange reason, if this is not here, the game crashes. DONT MODIFY THIS!
    }
    KeyBind.keyBind("key.forward", false)
    orderName.next();
}



class MoveOrder {
    constructor() {
        this.stack = [];
    }
    add(element) {
        this.stack.push(element)
    }

    next() {
        this.stack.shift();
    }

    front() {
        this.stack[1]
    }
}
/*
Heres an example of creating a move order queue.

pavia = new moveOrder();
pavia.add({x: 50, z: 50})
pavia.add({x: 95, z: 45})
pavia.add({x: 200, z: 450})


*/
function startOrder(orderName) {
    while (boatPos.x && boatPos.z !== orderName.stack[0]) {
        move(orderName, orderName.stack[0])
    }
}

/*
Use the startOrder function to begin the loop. WARNGING: It can't walk backwards
through coordinates at the moment. A -> B is different from B -> A. 
startOrder(pavia)
*/
