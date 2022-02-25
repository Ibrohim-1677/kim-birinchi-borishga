var elForm = document.querySelector (".main__form");

var elInput = document.querySelector (".form__input");

var elMan = document.querySelector (".list__man");

var elBicycle = document.querySelector (".list__bicycle");

var elCar = document.querySelector (".list__car");

var elPlane = document.querySelector (".list__plane");

elForm.addEventListener( "submit" , function (event){
    event.preventDefault();

var elInputVal = elInput.value;

var man = 3.6;

var bicycle = 20;

var car = 70;

var plane = 800;

    function manText (){
        return elInputVal / man;
    }

    function bicycleText (){
        return elInputVal / bicycle;
    }

    function carText (){
        return elInputVal / car;
    }

    function planeText (){
        return elInputVal / plane;
    }

    elMan.textContent = Math.round(manText());
    elBicycle.textContent = Math.round(bicycleText());
    elCar.textContent = Math.round(carText());
    elPlane.textContent = Math.round(planeText());
  
})

