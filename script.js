
// we store adafruitIO credentials
let userName = "Vale_see";
let apiKey = "key";

//we create an IO object 
const IO = new AdafruitIO(userName, apiKey);

// first we target the html elements
let colorPicker = document.querySelector("#colorInput");
let colorButton = document.querySelector("#colorButton");

// then we listen to the click on the button
colorButton.addEventListener("click", function(){
    // then we can get the value of the color input 
    let newColor = colorPicker.value; 

    console.log(newColor);
    IO.postData("color", newColor);

})


