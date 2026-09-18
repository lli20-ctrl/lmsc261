let workouts = [];
workouts.push(prompt("What is your workout?"));
workouts.push(prompt("What is your workout?"));
workouts.push(prompt("What is your workout?"));
workouts.push(prompt("What is your workout?"));
const randomItem = Math.floor(Math.random() * workouts.length);
print(workouts[randomItem]);