class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.linkedRooms;
    this.character;
  }

  addRoom(linkedObject) {
    this.linkedRoom = linkedObject;
  }
 describeRoom() {
    return this.description;
  }
}

const first = new Room("Hall", "The Hall is very dingy not much to see");
const second = new Room(
  "Kitchen",
  "The Kitchen is old fashioned with huge open fireplace, pots and pans hanging on the wall, the cook is asleep in a chair beside it. You can see a bag of sugar on the kitchen table. Do you wake up the cook? "
);
const third = new Room(
  "Dining Room",
  "The Dining Room has places set for dinner, the room is lit with candles on shiny silver candlesticks"
);
const fourth = new Room("Library", "Floor to ceiling with very dusty books");
const fifth = new Room(
  "Drawing Room",
  "Worn out old furniture in a dingey room , there is a dog laying on front an amber glowing fireplace. It growls a low rumbling sound when it see you"
);

first.addRoom({ N: second });
second.addRoom({ S: first, NE: third });
third.addRoom({ SW: second, W: fourth });
fourth.addRoom({ S: first, E: third });
fifth.addRoom({ E: first });

class Character {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.linkedCharacter;
  }
  addCharacter(linkedObject) {
    this.linkedCharacter = linkedObject;
  }
}

const sixth = new Character("Butler", "Old as Father Time");
const seventh = new Character("Cook", "Asleep and snoring");
const eighth = new Character("Doggo", "Not friendly growls at strangers");
const ninth = new Character(
  "Owner",
  "As old as the butler not friendly at all"
);

sixth.addCharacter({ S: first });
seventh.addCharacter({ N: second });
eighth.addCharacter({ E: fourth });
ninth.addCharacter({ W: fifth });

let currentRoom = first;

function startgame() {
  document.getElementById("start").style.display = "none";
  document.getElementById("Kitchen").style.display = "none";
  document.getElementById("Dining Room").style.display = "none";
  document.getElementById("Hall").style.display = "block";

  document.getElementById("descriptionPlaceholder").innerHTML =
    first.decribeRoom();
}

function north() {
  move("N");
  document.getElementById("Hall").style.display = "none";
  document.getElementById("Dining Room").style.display = "none";
  document.getElementById("Kitchen").style.display = "block";

  document.getElementById("descriptionPlaceholder1").innerHTML =
    second.decribeRoom();
}
function south() {
  move("S");
  document.getElementById("Kitchen").style.display = "none";
  document.getElementById("Dining Room").style.display = "none";
  document.getElementById("Hall").style.display = "block";

  document.getElementById("descriptionPlaceholder2").innerHTML =
    first.decribeRoom();
}
function east() {
  move("E");
  document.getElementById("Kitchen").style.display = "none";

  document.getElementById("Dining Room").style.display = "block";

  document.getElementById("descriptionPlaceholder").innerHTML =
    third.decribeRoom();
}
function west() {
  move("W");
  document.getElementById("Kitchen").style.display = "none";

  document.getElementById("Dining Room").style.display = "block";

  document.getElementById("descriptionPlaceholder").innerHTML =
    third.decribeRoom();
}

function move(direction) {
  if (!currentRoom.linkedRoom[direction]) {
    console.log("cant go there!");
  } else {
    console.log(currentRoom.linkedRoom[direction]);
  }
}
