var counter = 0;
var hatchcounter = 0;

function hatchegg(){
    setInterval(() => {
        hatchcounter +=1;
        if(hatchcounter >= 15){
            document.querySelector(".rockegg").style.display = 'none';
            document.querySelector("#text3").style.display = 'inline';
            document.querySelector(".progress").style.display = 'inline';
        }
    }, 1000);
}

function breakRock(){
    counter +=1;
    if(counter >= 10){
        document.querySelector(".rock").style.display = 'none';
        document.querySelector(".rockegg").style.display = 'inline';
        document.querySelector("#text2").style.display = 'inline';
        hatchegg()
    }
}