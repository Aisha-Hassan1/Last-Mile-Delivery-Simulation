async function get() {
    const response = await fetch("info.json");
    const data = await response.json();
    let selectCountry = document.querySelector("#Country");
    for (let i = 0; i < data.data.length; i++) {
        let optionCountry = document.createElement("option");
        optionCountry.setAttribute("value",`${data.data[i].country}`)
        let testText = document.createTextNode(`${data.data[i].country}`);
        selectCountry.appendChild(optionCountry);
        optionCountry.appendChild(testText);
    }
}
get();
async function nameCountry(V) {

    V.style.color = "#509958";
    sessionStorage.setItem('Country', JSON.stringify(`${V.value}`));
    const response = await fetch("info.json");
    const data = await response.json();
    let selectCity = document.getElementById("City");
    for (let i = 0; i < data.data.length; i++) {
        if (V.value == data.data[i].country) {
            
            selectCity.innerHTML = "";
            let optionCity = document.createElement("option");
            let spanText = document.createTextNode("Select City");
            optionCity.appendChild(spanText);
            selectCity.appendChild(optionCity);
            optionCity.selected = "selected";
            optionCity.disabled = "disabled";
            optionCity.style.color = "#D8A533";
            optionCity.value = "";
            for (let j = 0; j < data.data[i].cities.length; j++) {
                let selectCity = document.getElementById("City");
                let optionCity = document.createElement("option");
                optionCity.setAttribute("value",`${data.data[i].cities[j]}`)
                let spanText = document.createTextNode(`${data.data[i].cities[j]}`);
                selectCity.appendChild(optionCity);
                optionCity.appendChild(spanText);

            }
        }
    }
}
function nameCity(V) {
    V.style.color = "#509958";
    sessionStorage.setItem('City', JSON.stringify(`${V.value}`));
}

let counterVehicles = 1;
let counterStores = 1;

window.sessionStorage.setItem("counterVehicles", counterVehicles);
window.sessionStorage.setItem("counterStores", counterStores);

function incrementVehicles() {
    const counterElementVehicles = document.querySelector('.counterVehicles');
    
    counterVehicles++;
    window.sessionStorage.setItem("counterVehicles", `${counterVehicles}`);
    counterElementVehicles.innerText = window.sessionStorage.getItem("counterVehicles");

    //basc

    let totalDiv = document.querySelector(".total-div");

    let vehicles = document.createElement("div");
    vehicles.setAttribute("class", "col s12");
    vehicles.setAttribute("id", `Vehicles${counterVehicles}`);
    totalDiv.appendChild(vehicles);

    let infoOfVehicles = document.createElement("fieldset");
    infoOfVehicles.setAttribute("id", `infoOfVehicles${counterVehicles}`);
    vehicles.appendChild(infoOfVehicles);

    let legend = document.createElement("legend");
    legend.setAttribute("class", "legend-text");
    let legendText = document.createTextNode(`Info of Vehicles(${counterVehicles})`);
    legend.appendChild(legendText);
    infoOfVehicles.appendChild(legend);

    //rowOne
    {
        let divRowOne = document.createElement("div");
        divRowOne.setAttribute("class", "row");
        infoOfVehicles.appendChild(divRowOne);

        let colOne = document.createElement("div");
        colOne.setAttribute("class", "input-field col s12 m6 l6");
        divRowOne.appendChild(colOne);

        let typeOfVehicles = document.createElement("select");
        typeOfVehicles.setAttribute("id", `typeOfVehicles${counterVehicles}`);
        typeOfVehicles.setAttribute("class", "browser-default");
        let optionType = document.createElement("option");
        optionType.selected = "selected";
        optionType.disabled = "disabled";
        optionType.style.color = "#D8A533";
        optionType.value = "";
        let optionText = document.createTextNode("Select Type of Vehicles");
        typeOfVehicles.appendChild(optionType);
        optionType.appendChild(optionText);

        colOne.appendChild(typeOfVehicles);
        let type=["Car","Bicycle","Motorbike"];
        for (let k = 0; k < type.length; k++) {
        let optionType = document.createElement("option");
        optionType.setAttribute("value",`${type[k]}`);
        let optionText = document.createTextNode(`${type[k]}`);
        typeOfVehicles.appendChild(optionType);
        optionType.appendChild(optionText);
        }

        let colTwo = document.createElement("div");
        colTwo.setAttribute("class", "input-field col s12 m6 l6");
        colTwo.setAttribute("id",`divCapacity${counterVehicles}`)
        divRowOne.appendChild(colTwo);

        let numberOfOrder = document.createElement("input");
        numberOfOrder.setAttribute("id", `numberOfOrder${counterVehicles}`);
        numberOfOrder.setAttribute("type", "number");
        numberOfOrder.setAttribute("class", "validate");
        colTwo.appendChild(numberOfOrder);

        let label2 = document.createElement("label");
        label2.setAttribute("for", `numberOfOrder${counterVehicles}`);
        let textLable2 = document.createTextNode("Capacity");
        label2.appendChild(textLable2);
        colTwo.appendChild(label2);

    }
    //rowTwo
    {
        let divRowTwo = document.createElement("div");
        divRowTwo.setAttribute("class", "row");
        infoOfVehicles.appendChild(divRowTwo);

        let colOne = document.createElement("div");
        colOne.setAttribute("class", "col s12 m6 l6");
        divRowTwo.appendChild(colOne);

        let fridge = document.createElement("label");
        fridge.setAttribute("class", "responsive fridge");
        let textLable1 = document.createTextNode("Does the  Vehicles accept fridge?");
        fridge.appendChild(textLable1);
        colOne.appendChild(fridge);

        let colTwo = document.createElement("div");
        colTwo.setAttribute("class", "col s6 m3 l3");
        divRowTwo.appendChild(colTwo);

        let label1 = document.createElement("label");
        colTwo.appendChild(label1);

        let typeFridgeYes = document.createElement("input");
        typeFridgeYes.setAttribute("class", "with-gap yes");
        typeFridgeYes.setAttribute("name", `typeFridge${counterVehicles}`);
        typeFridgeYes.setAttribute("onchange", "checkfridge(this)");
        typeFridgeYes.setAttribute("type", "radio");
        typeFridgeYes.setAttribute("value", "Yes");
        label1.appendChild(typeFridgeYes);

        let radioYes = document.createElement("span");
        radioYes.setAttribute("class", "radio-yes");
        let textSpan1 = document.createTextNode("Yes");
        radioYes.appendChild(textSpan1);
        label1.appendChild(radioYes);

        let colThird = document.createElement("div");
        colThird.setAttribute("class", "col s6 m3 l3");
        divRowTwo.appendChild(colThird);

        let label2 = document.createElement("label");
        colThird.appendChild(label2);

        let typeFridgeNo = document.createElement("input");
        typeFridgeNo.setAttribute("class", "with-gap no");
        typeFridgeNo.setAttribute("name", `typeFridge${counterVehicles}`);
        typeFridgeNo.setAttribute("onchange", "checkfridge(this)");
        typeFridgeNo.setAttribute("type", "radio");
        typeFridgeNo.setAttribute("value", "No");
        typeFridgeNo.setAttribute("checked", "checked");
        label2.appendChild(typeFridgeNo);

        let radioNo = document.createElement("span");
        radioNo.setAttribute("class", "radio-no");
        let textSpan2 = document.createTextNode("No");
        radioNo.appendChild(textSpan2);
        label2.appendChild(radioNo);
    }
}

function decrementVehicles() {
    const counterElementVehicles = document.querySelector('.counterVehicles');
    if (counterVehicles > 1) {
        document.querySelector(`#Vehicles${counterVehicles}`).remove();
        counterVehicles--;
        window.sessionStorage.setItem("counterVehicles", `${counterVehicles}`);
        counterElementVehicles.innerText = window.sessionStorage.getItem("counterVehicles");
    }
}

function checkfridge(V) {

    for (let l = 1; l <= counterVehicles; l++) {

        if (V.name == `typeFridge${l}` && V.value == "Yes") {


            let infoOfVehicles = document.querySelector(`#infoOfVehicles${l}`);

            let div = document.createElement("div");
            div.setAttribute("class", "row");
            div.setAttribute("id", `divFridge${l}`);
            infoOfVehicles.appendChild(div);

            let inputField = document.createElement("div");
            inputField.setAttribute("class", "input-field col s12 m12 l12");
            div.appendChild(inputField);

            let numberOfOrderOfFride = document.createElement("input");
            numberOfOrderOfFride.setAttribute("id", `numberOfOrderOfFride${l}`);
            numberOfOrderOfFride.setAttribute("type", "number");
            numberOfOrderOfFride.setAttribute("class", "validate");
            inputField.appendChild(numberOfOrderOfFride);

            let label = document.createElement("label");
            label.setAttribute("for", `numberOfOrderOfFride${l}`);
            let textLable = document.createTextNode("Capacity of fridge");
            label.appendChild(textLable);
            inputField.appendChild(label);


        } else if (V.name == `typeFridge${l}` && V.value == "No" && document.querySelector(`#divFridge${l}`)) {

            document.querySelector(`#divFridge${l}`).remove();

        }
    }

}

function incrementStores() {
    const counterElementStores = document.querySelector('.counterStores');
    counterStores++;
    sessionStorage.setItem('counterStores',`${counterStores}`);
    counterElementStores.innerText = window.sessionStorage.getItem("counterStores");

}


function decrementStores() {
    if (counterStores > 1) {
        const counterElementStores = document.querySelector('.counterStores');
        counterStores--;
        window.sessionStorage.setItem("counterStores",`${counterStores}`);
        counterElementStores.innerText = window.sessionStorage.getItem("counterStores");

    }
}


function geometry(City) {
    fetch(`info2.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0].cities)
            const cityData = data.data[0].cities.find(city => Object.keys(city)[0] === City)[City];
    
            let cityCoordinates = cityData.coordinates;
            let cityPointsOnTheStreet = cityData.PointsOnTheStreet;
            sessionStorage.setItem('cityCoordinates',`${cityCoordinates}`);
            sessionStorage.setItem('cityPointsOnTheStreet',`${cityPointsOnTheStreet}`);
    
            console.log("Assiut Coordinates:", cityCoordinates);
            console.log("ggggggggggggggggggggggggggggggggggggggggg")
            console.log("Points on the Street in Assiut:", cityPointsOnTheStreet);
        })
        .catch(error => {
            console.error(error);
        });
}

document.forms[0].onsubmit = function(e){
        let info = [];
        for (let i = 0; i < counterVehicles; i++) {

            let fieldset = document.querySelector(`#infoOfVehicles${i+1}`);
            let type     = document.querySelector(`#typeOfVehicles${i+1}`);
            let capacity = document.querySelector(`#numberOfOrder${i+1}`);
            let fridge   = document.querySelector(`#numberOfOrderOfFride${i+1}`);
            let country  = document.querySelector("#Country");
            let city     = document.querySelector("#City");
            

            let checkType      = false;
            let checkCapacity  = false;
            let checkYesFridge = false;
            let yesOrNo        = false;

            
            if(country.value!=""){
                
                country.style.borderColor="#509958";
                sessionStorage.setItem('Country', JSON.stringify(`${country.value}`));
            }
            else{
                country.style.borderColor="#f00";
                e.preventDefault();
            }
            if(city.value!=""){
                geometry(`${city.value}`);
                city.style.borderColor="#509958";
                sessionStorage.setItem('City', JSON.stringify(`${city.value}`));
            }
            else{
                city.style.borderColor="#f00";
                e.preventDefault();
            }
            
            if(type.value!=""){
                checkType    = true;
                fieldset.style.borderColor = "#509958";
            }
            else{
                fieldset.style.borderColor = "#f00";
                e.preventDefault();
            }
            if((capacity.value!="" && capacity.value>0 && capacity.value<=500)){

                checkCapacity= true;
                if(document.querySelector(".error2")){
                    document.querySelector(".error2").remove();
                }
            }
            else {
                
                fieldset.style.borderColor = "#f00";

                if(!document.getElementById(`error2${i+1}`)){
                    let div = document.getElementById(`divCapacity${i+1}`);

                    let labelError = document.createElement("div");
                    labelError.setAttribute("class", "col s12 m6 l6 error2 ");
                    labelError.setAttribute("id", `error2${i+1}`);
                    div.appendChild(labelError);

                    let label = document.createElement("p");
                    let textLable = document.createTextNode("Capacity must be positive integer number and less than 500");
                    label.appendChild(textLable);
                    labelError.appendChild(label);
                }
                e.preventDefault();
            }
            if(counterVehicles+counterStores<=10){
                if(document.querySelector(".error3")){
                    document.querySelector(".error3").remove();
                }
            }
            else{
                if(!document.getElementById(`error3${i+1}`))
                {
                    let div = document.getElementById(`NumberOfVic`);

                    let labelError = document.createElement("div");
                    labelError.setAttribute("class", "col s12 m6 l6 error3");
                    labelError.setAttribute("id", `error3${i+1}`);
                    div.appendChild(labelError);

                    let label = document.createElement("p");
                    let textLable = document.createTextNode("The total number of vehicles and the number of stores must not exceed 10");
                    label.appendChild(textLable);
                    labelError.appendChild(label);
                }
                e.preventDefault();

            }

            if (fridge !== null) {
                if(fridge.value!="" && +capacity.value >= +fridge.value && +(fridge.value)>0){
                    checkYesFridge= true;
                    if(document.querySelector(".error")){
                        document.querySelector(".error").remove();
                    }
                }
                else{

                    fieldset.style.borderColor = "#f00";
                    if(!document.getElementById(`error${i+1}`)){
                        let div = document.getElementById(`divFridge${i+1}`);
        
                        let labelErroe = document.createElement("div");
                        labelErroe.setAttribute("class", "col s12 m12 l12 error ");
                        labelErroe.setAttribute("id", `error${i+1}`);
                        div.appendChild(labelErroe);
        
                        let label = document.createElement("p");
                        let textLable = document.createTextNode("Enter a number less than or equal to the full amplitude and not equal to 0");
                        label.appendChild(textLable);
                        labelErroe.appendChild(label);
                    }
                e.preventDefault();
                }

            }
            else{
                
                yesOrNo = true;
            }
            if(!yesOrNo){
                if( checkType == true || checkCapacity == true ||checkYesFridge == true  )
                {
                info[i]={ "type": type.value, "capacity": capacity.value, "fridge": fridge.value ,"market":"vehicles"};
                sessionStorage.setItem('Vehicles', JSON.stringify(info));
                
                }
                
            }
            else{
            if( checkType == true || checkCapacity == true )
            {
                info[i]={ "type": type.value, "capacity": capacity.value, "fridge": "no","market":"vehicles" };
                sessionStorage.setItem('Vehicles', JSON.stringify(info));
                
            }
            }
        }
        
}




