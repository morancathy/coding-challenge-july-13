//Take it Easy
// 1)
const rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 2)
console.log(`${rainbowArray[4]} \n`);

// 3)
const cathy = {
  food: 'caramel',
  hobby: 'diving',
  town: 'Chi-town!',
  favDatatype: 'object'
};

// 4)
console.log(`${cathy.hobby} \n`);

// Crazy object
const crazyObject = {
  taco: [{meat: 'steak',
          cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
      name: "Jeff",
      occupation: "manager"
      },
      {
      name: "funkhauser",
      occupation: "tv dude"
      },
      {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// 1)
console.log(`${crazyObject.taco[1].salsa[5]} \n`)
// 2)
console.log(`${crazyObject.larry.quotes[0]} \n`)
// 3)
console.log(`${crazyObject.larry.characters[2].favourtieHobby} \n`)
// 4)
console.log(`${crazyObject.larry.nicknames[1]} \n`)
// 5)
console.log(crazyObject.larry.characters[1])
console.log(`\n`)
// 6)
const string = "I'm trying to elevate small talk to medium talk";
crazyObject.larry.quotes.push(string);
console.log(crazyObject.larry.quotes)
console.log(`\n`)

// Object-ception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(`${inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo} \n`)
