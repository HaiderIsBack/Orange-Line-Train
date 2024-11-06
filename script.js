const stations = document.querySelectorAll(".station");
var direction = "right";

var currStation = 12;

stations[currStation].querySelector(".status").classList.remove("on");
stations[currStation].querySelector(".status").classList.remove("off");
stations[currStation].querySelector(".status").classList.add("curr");

function turnOffLights(index){
    const condition = direction == "right" ? stations.length : 0;

    for(var start=index; start < condition; (direction == "right" ? start++ : start--)){
        stations[start].querySelector(".status").classList.remove("on");
        stations[start].querySelector(".status").classList.remove("curr");
        stations[start].querySelector(".status").classList.add("off");
    }
}

turnOffLights(currStation + (direction == "right" ? 1 : -1));

document.getElementById("station-selector").addEventListener("change", (e) => {
    currStation = e.target.value;
    stations[currStation].querySelector(".status").classList.remove("on");
    stations[currStation].querySelector(".status").classList.remove("off");
    stations[currStation].querySelector(".status").classList.add("curr");
    turnOffLights(currStation + (direction == "right" ? 1 : -1))
});