let $ = function(id){
    return document.getElementById(id);
};

//get string from the page
//controller function
function getValue(){
    $("alert").classList.add("invisible");

    let userString = $("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}
//reverse the string
//logic function
function reverseString(userString){
    let revString = [];

    //reverse string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}

//display alert with reversed string to the user
//view function
function displayString(revString){
    //write message
    $("msg").innerHTML = `Your String Reversed is: ${revString}`;

    //show alert
    $("alert").classList.remove("invisible");
}

