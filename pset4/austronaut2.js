let hoursUsed = Number(prompt("How many hours used?"));
const maxLifeSpan = 1000
function checkLifeSpan(hoursUsed) {
    if (typeof hoursUsed != "number") { return "please enter valid number" } 

    if (hoursUsed < 800) {
        return "suit in working condition"
    } else if (hoursUsed >= 800 && hoursUsed < maxLifeSpan){
        return "suit needs replacement soon"
    } else {
        return "suit no longer safe to use"
    }
}

print(checkLifeSpan(hoursUsed));