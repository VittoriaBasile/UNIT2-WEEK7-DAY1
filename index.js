class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    static compare(x,y){
        if(x.age < y.age){
            return y.firstName  + " è più vecchio di "+  x.firstName ;
        }else if(x.age > y.age){
            return x.firstName  + " è più vecchio di " + y.firstName;
        }else{
            return x.firstName + " e " + y.firstName + " sono coetanei";
        }
    }
    
}

let user1= new User("Mario", "Rossi", 25, "Molfetta");
let user2= new User("Beppe", "Pans", 28, "Molfetta");

console.log(User.compare(user1,user2));


class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    static compare(pet1, pet2) {
      return pet1.ownerName === pet2.ownerName;
    }
  }
  
const form = document.querySelector('form');
const saveButton = form.querySelector('button');


const petList = document.createElement('ul');
const contenuto = document.querySelector('#contenuto')
contenuto.appendChild(petList);


saveButton.addEventListener('click', function (event) {

  event.preventDefault();


  const petName = form.petName.value;
  const ownerName = form.ownerName.value;
  const species = form.species.value;
  const breed = form.breed.value;


  const pet = new Pet(petName, ownerName, species, breed);


const petListItem = document.createElement('li');

const petString = JSON.stringify(pet).replace(/[{}"]/g, ' ');

petListItem.textContent = petString.toUpperCase();


petList.appendChild(petListItem);



  form.reset();
});

