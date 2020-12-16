const lights = {
    red: document.getElementById("red"),
    yellow: document.getElementById("yellow"),
    green: document.getElementById("green")
}

// set timeout 30 seconds (red) set timeout 2 seconds (yellow) set timeout 40 secs (green)

function switchLight(color,status){
    if(status === "on"){
        lights[color].style.backgroundColor = color
    }else{
        lights[color].style.backgroundColor = "grey"
    }
}


function trafficCycle(){
    lights.red.style.backgroundColor = "red";
    lights.green.style.backgroundColor = "grey";

    setTimeout(()=>{
        switchLight("red","off")
        switchLight("yellow","on")
    },30000)

    setTimeout(()=>{
        switchLight("yellow","off")
        switchLight("green","on")
    },32000)
}


window.onload = () => {
    trafficCycle()
    setInterval(trafficCycle,72000)
}