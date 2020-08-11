
let destinations = ['the park', 'the beach', 'the woods', 'home'];
let tranportation = ['car', 'bike', 'bus', 'train', 'Uber'];
let restaurant = ['The Cheesecake Factory', 'McDonalds', 'Burger King', 'Taco Bell', 'The Dinner', 'Greasy Spoon', 'Chick-fil-a'];
let entertainment = ['movie', 'concert', 'musical', 'campfire'];

let curDest = rndSelDestination();
let curTrans = rndSelTransportation();
let curRest = rndSelRestaurant();
let curEntert = rndSelEntertainment();
let response = "no";

displayTrip();
  
  document.getElementById("yesClick").onclick = function(){
    
      document.getElementById("listOfOptions1").innerHTML = "ENJOY!"
      document.getElementById("oneClick").disabled = true;
      document.getElementById("listOfOptions2").innerHTML = ""
      document.getElementById("twoClick").disabled = true;
      document.getElementById("listOfOptions3").innerHTML = ""
      document.getElementById("threeClick").disabled = true;
      document.getElementById("listOfOptions4").innerHTML = ""
      document.getElementById("fourClick").disabled = true;
      document.getElementById("listOfOptions5").innerHTML = ""
      document.getElementById("listOfOptions6").innerHTML = ""
  }

  document.getElementById("noClick").onclick = function(){
    switchResponsePrompt();
    displayTrip();   
  }

function rndSelDestination(){
    let rnd = Math.floor(Math.random() * (destinations.length));
    return destinations[rnd];
}

function rndSelTransportation(){
    let rnd = Math.floor(Math.random() * (tranportation.length));
    return tranportation[rnd];
}

function rndSelRestaurant(){
    let rnd = Math.floor(Math.random() * (restaurant.length));
    return restaurant[rnd];
}

function rndSelEntertainment(){
    let rnd = Math.floor(Math.random() * (entertainment.length));
    return entertainment[rnd];
}

function displayTrip(){
  let displayedTrip = ['You are going to ',' via a ', ', you will eat at ', ' and enjoy a '];
  document.getElementById("tripText").innerHTML = displayedTrip[0] + curDest + displayedTrip[1] + curTrans + displayedTrip[2] + curRest + displayedTrip[3] + curEntert;
}

function switchResponsePrompt(){
  document.getElementById("listOfOptions1").innerHTML = "What change would you like to make?";
  document.getElementById("oneClick").disabled = false;
  document.getElementById("listOfOptions2").innerHTML = "to change Destination";
  document.getElementById("twoClick").disabled = false;
  document.getElementById("listOfOptions3").innerHTML = "to change Transportation";
  document.getElementById("threeClick").disabled = false;
  document.getElementById("listOfOptions4").innerHTML = "to change Restaurant";
  document.getElementById("fourClick").disabled = false;
  document.getElementById("listOfOptions5").innerHTML = "to change Entertainment";
  
  document.getElementById("oneClick").onclick = function(){
                curDest = rndSelDestination();
                displayTrip();
  }
  document.getElementById("twoClick").onclick = function(){
                curTrans = rndSelTransportation();
                displayTrip();
  }
  document.getElementById("threeClick").onclick = function(){
                curRest = rndSelRestaurant();
                displayTrip();
  }
  document.getElementById("fourClick").onclick = function(){
                curEntert = rndSelEntertainment();
                displayTrip();
  }
        
}