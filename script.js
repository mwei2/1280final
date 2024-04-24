x =  new Date();
    y = x.getFullYear();
    m = x.getMonth() + 1;
    d = x.getDate();

    var timestamp = new Date();
    // var element = document.querySelector('#entryTime')
    // element.innerHTML = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;

    document.getElementById("day").innerHTML = d + "/" +m + "/"  + y + " at " + timestamp.getHours() + ":" + timestamp.getMinutes();

const btnRoll = document.getElementById("btn");

function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

btnRoll.addEventListener("click", tryit);

var n;

function getRandomImage() {
    rnd = randomIntFromInterval(1, 6);;
    n = rnd;
    return "dice-" + rnd + ".svg";
    console.log(rnd);

  }
  
 
function tryit()
{
    
    first = document.getElementById("imgD1");
    first.src=getRandomImage();
    a = n;

    secend = document.getElementById("imgD2");
    secend.src=getRandomImage();
    b = n;

    // console.log(a+b);
    document.getElementById("total").innerHTML = a+b;

    if(a+b < 8 )
    document.querySelector("h3").innerHTML = "You didn't win: Try Again!";
    else
    document.querySelector("h3").innerHTML = "You Win: Try Again!";

    // x =  new Date();
    // y = x.getFullYear();
    // m = x.getMonth() + 1;
    // d = x.getDate();

    // var timestamp = new Date();
    // // var element = document.querySelector('#entryTime')
    // // element.innerHTML = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;

    // document.getElementById("day").innerHTML = d + "/" +m + "/"  + y + " at " + timestamp.getHours() + ":" + timestamp.getMinutes();

}

