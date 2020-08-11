"use strict";

dayTripGenerator();

function dayTripGenerator(){

    let destinations = ['the park', 'the beach', 'the woods', 'home'];
    let tranportation = ['car', 'bike', 'bus', 'train', 'Uber'];
    let restaurant = ['The Cheesecake Factory', 'McDonalds', 'Burger King', 'Taco Bell', 'The Dinner', 'a Greasy Spoon', 'Chick-fil-a'];
    let entertainment = ['movie', 'concert', 'musical', 'campfire'];

    let curDest = randomdSelectInput(destinations);
    let curTrans = randomdSelectInput(tranportation);
    let curRest = randomdSelectInput(restaurant);
    let curEntert = randomdSelectInput(entertainment);
    let response = "no";

    displayTrip(curDest,curTrans,curRest,curEntert);

    do{
        console.log("Are you happy with your trip?", "yes or no");
        response = prompt("Are you happy with your trip?", "yes or no"); 
        
        if (response === "yes"){
            console.log("ENJOY!");
        }
        else {
            let switchResponse = switchResponsePrompt();
                switch(switchResponse){
                    case "1":
                        curDest = randomdSelectInput(destinations);
                        break;
                    case "2":
                        curTrans = randomdSelectInput(tranportation);
                        break;
                    case "3":
                        curRest = randomdSelectInput(restaurant);
                        break;
                    case "4":
                        curEntert = randomdSelectInput(entertainment);
                        break;
                    default:
                        alert("Whoops, try again!");
                        break;
                }

            displayTrip(curDest,curTrans,curRest,curEntert);
        }
    }
    while (response !== "yes"); 

}

function randomdSelectInput(destTranRestEnt){
    let rnd = Math.floor(Math.random() * (destTranRestEnt.length));
    return destTranRestEnt[rnd];
}

function displayTrip(curDest, curTrans, curRest, curEntert){
    console.log("You are going to " + curDest + " via a " + curTrans);
    console.log("You will eat at " + curRest + " and go to a " + curEntert);
}

function switchResponsePrompt(){
    let switchResponse = "";
    console.log("What change would you like to make?");
    console.log("1 to change Destination");
    console.log("2 to change Transportation");
    console.log("3 to change Restaurant");
    console.log("4 to change Entertainment");
    return switchResponse = prompt("What change would you like to make?", "1, 2, 3, or 4");
}