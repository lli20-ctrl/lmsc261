let randNum = Math.floor(Math.random() * 20 - 20);
print(randNum);

if (randNum > 0) {
    print("It's getting warmer!");
} else if (randNum < 0) {
    print("Sheesh, it's getting colder");
} else {
    print("Guess nobody's touched the thermostat");
}

for(let i = 0; i<10; i++){
    print(i)
}