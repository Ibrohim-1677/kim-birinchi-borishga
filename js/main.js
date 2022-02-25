var elForm = document.querySelector (".main__form")

var elInput = document.querySelector (".form__input")

var elMan = document.querySelector (".list__man")

var elBicycle = document.querySelector (".list__bicycle")

var elCar = document.querySelector (".list__car")

var elPlane = document.querySelector (".list__plane")

elForm.addEventListener( "submit" , function (event){
    event.preventDefault()

var elInputVal = elInput.value;

var Man = 3.6;

var Bicycle = 20;

var Car = 70;

var Plane = 800;

elMan.textContent =  Math.round( elInputVal / Man 
    );
elBicycle.textContent =  Math.round( elInputVal / Bicycle 
    );
elCar.textContent =  Math.round( elInputVal / Car);
elPlane.textContent =  Math.round( elInputVal / Plane 
    );
})
