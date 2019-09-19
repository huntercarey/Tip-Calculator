//Function that is executed when the button is clicked

//We are passing an anonymous function (a function without a name to the button's onClick handler when it's clicked)

document.getElementById('calculateTip').onClick = function() {
    console.log('Button was clicked');
}