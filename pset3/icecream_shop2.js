const conesSoldPerHour = 12
let inventory = 200

for (let index = 1; index < 13; index++) {
    inventory = inventory - conesSoldPerHour;
    print(conesSoldPerHour * index + " sold at hour " + index);
    print(inventory - 12 + " left");
}