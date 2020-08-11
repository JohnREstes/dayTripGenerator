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

    do{
        console.log("Are you happy with your trip?", "yes or no");
        response = prompt("Are you happy with your trip?", "yes or no"); 
        
        if (response === "yes"){
            console.log("ENJOY!");
        }
        else {
            switchResponsePrompt();
            displayTrip();
        }
    }
    while (response !== "yes"); 

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
    console.log("You are going to " + curDest + " via a " + curTrans);
    console.log("You will eat at " + curRest + " and go to a " + curEntert);
}

function switchResponsePrompt(){
    console.log("What change would you like to make?");
    console.log("1 to change Destination");
    console.log("2 to change Transportation");
    console.log("3 to change Restaurant");
    console.log("4 to change Entertainment");
    let switchResponse = prompt("What change would you like to make?", "1, 2, 3, or 4");
        switch(switchResponse){
            case "1":
                curDest = rndSelDestination();
                break;
            case "2":
                curTrans = rndSelTransportation();
                break;
            case "3":
                curRest = rndSelRestaurant();
                break;
            case "4":
                curEntert = rndSelEntertainment();
                break;
            default:
                console.log("Whoops, try again!");
                break;
        }
}