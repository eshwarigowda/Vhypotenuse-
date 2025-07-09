var State;
(function (State) {
    State[State["Success"] = 1] = "Success";
    State[State["Failure"] = 0] = "Failure";
    State[State["Pending"] = -1] = "Pending";
})(State || (State = {}));
console.log(State.Success);
console.log(State.Failure);
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["east"] = 2] = "east";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
console.log(direction.north);
console.log(direction.south);
console.log(direction.east);
var color;
(function (color) {
    color["red"] = "RED";
    color["blue"] = "BLUE";
    color["green"] = "GREEN";
})(color || (color = {}));
console.log(color.blue);
console.log(color.green);
