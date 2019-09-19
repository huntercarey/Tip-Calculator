console.log("test");

function calculateTip() {
    //Get the values the user inputs(bill amount, service quality, number of people splitting the bill)
    var billAmount = document.getElementById("billAmount").value;
    console.log(billAmount);

    var serviceQuality = document.getElementById("serviceQuality").value;
    console.log(serviceQuality);

    var numberOfPeople = document.getElementById("numOfPeople").value;
    console.log(numberOfPeople);
    //validate their input (to make sure what they input is usable)
    //Bill amount- words, negatives, values, empty string

    var amount = Number(billAmount); //Try to turn the value of billAmount into a number

    if (isNaN(amount) || amount <= 0) {
        //If amount can't be converted into a number or is less than or equal to 0, show an error.
        alert("Invalid input for bill amount");
        return; //Return to exit the function if the bill amount is invalid
    }

    //If we make it here, the amount is good.

    //Service Selector- Not choosing an option

    var service = Number(serviceQuality); //Convert serviceQuality into a number.

    if (service === 0) {
        alert("You must pick an option for service quality");
        return;
    }

    //Number of People- Words, negative values, empty strings, decimal values

    var people = Number(numberOfPeople);

    if (isNaN(people) || people < 1) {
        alert("Enter a valid number of people");
        return;
    }

    //Calculate the amount of tip each person needs to pay

    var tipPerPerson = (amount * service) / people;
    console.log(tipPerPerson);

    tipPerPerson = tipPerPerson.toFixed(2); //round the tip per person to 2 decimal points
    console.log(tipPerPerson);

    //Display that information to the user
    var mealPricePerPerson = amount / people;
    mealPricePerPerson = mealPricePerPerson.toFixed(2);
    var totalPerPerson = Number(mealPricePerPerson) + Number(tipPerPerson);
    totalPricePerPerson = Number(totalPerPerson);
    totalPerPerson = totalPerPerson.toFixed(2);
    var feedBackMessage = `Tip: $${tipPerPerson} each\nMeal: $${mealPricePerPerson} each\nTotal: $${totalPerPerson} each`;

    document.getElementById("feedBack").innerText = feedBackMessage;
}

//Function that is executed when the button is clicked

//We are passing an anonymous function (a function without a name to the button's onClick handler when it's clicked)

document.getElementById("submit").onclick = function() {
    calculateTip();
}

function reset() {
    document.getElementById("billAmount").value = '';
    document.getElementById("serviceQuality").value = 0;
    document.getElementById("numOfPeople").value = 0;
    document.getElementById("feedBack").innerText = '';
}

document.getElementById("reset").onclick = function() {
    reset();
}