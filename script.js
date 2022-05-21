const tabela = document.getElementById("unosImena");
const tablica = document.getElementById("igra");
var ime = [];

function pocni(){

    ime.push(document.getElementById("player-1").value);
    ime.push(document.getElementById("player-2").value);
    ime.push(document.getElementById("player-3").value);
    ime.push(document.getElementById("player-4").value);

    document.getElementById("ime-1").innerHTML = ime[0];
    document.getElementById("ime-2").innerHTML = ime[1];
    document.getElementById("ime-3").innerHTML = ime[2];
    document.getElementById("ime-4").innerHTML = ime[3];

    tabela.style.display = "none";
    tablica.style.display = "grid";
    console.log(ime);
}

var le = [];

let pl1 = 0, pl2 = 0, pl3 = 0, pl4 = 0;

function racunaj(){
    le= [];
    le.push(document.getElementById("rez-1").value);
    le.push(document.getElementById("rez-2").value);
    le.push(document.getElementById("rez-3").value);
    le.push(document.getElementById("rez-4").value);

    let reg = /-/gi;


    if(!reg.test(pl1)){
    pl1 = pl1 + parseInt(le[0]);
    } else{
        pl1 = pl1 - parseInt(le[0]);
    }
    

    if(!reg.test(pl2)){
        pl2 = pl2 + parseInt(le[1]);
    } else{
        pl2 = pl2 - parseInt(le[1]);
    }

    if(!reg.test(pl3)){
        pl3 = pl3 + parseInt(le[2]);
    } else{
        pl3 = pl3 - parseInt(le[2]);
    }

    if(!reg.test(pl4)){
        pl4 = pl4 + parseInt(le[3]);
    } else{
        pl4 = pl4 - parseInt(le[3]);
    }

    document.getElementById("re-1").innerHTML = pl1;
    document.getElementById("re-2").innerHTML = pl2;
    document.getElementById("re-3").innerHTML = pl3;
    document.getElementById("re-4").innerHTML = pl4;

}