enum State {
  Success = 1,
  Failure = 0,
  Pending = -1
}

console.log(State.Success);
console.log(State.Failure);

enum direction{
  north,
  south,
  east,
  west
}

console.log(direction.north);
console.log(direction.south);
console.log(direction.east);

enum color{
  red="RED",
  blue="BLUE",
  green="GREEN"
}
console.log(color.blue);
console.log(color.green);