const node1 = [974, -2706];
const node2 = [929, -944];
const node3 = [1172, -923];
const waterh = 77
var v = require('vec3');
function left()
{
    KeyBind.keyBind("key.left", true);
}

function gotoNode(x, y) {
Player.getPlayer().lookAt(x, waterh, y);
}


left()

// NODE1 974 62 -2706
// NODE2 929 62 -944
// NODE3 1172 62 -923