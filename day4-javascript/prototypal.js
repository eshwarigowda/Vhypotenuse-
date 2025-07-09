let animal = {
  eats: function() {
    console.log("it eats grass!");
  }
};

let rabbit = {
  __proto__: animal,
  jump:function(){
    console.log("Rabbit jumps")
  }
};
rabbit.eats();
rabbit.jump();