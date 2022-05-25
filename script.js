const tabela = document.getElementById("unosImena");
const tablica = document.getElementById("igra");
const bule = document.getElementById("prikaz-bule");

var ime = [];

function pocnii(){

    ime.push(document.getElementById("player-1").value);
    ime.push(document.getElementById("player-2").value);
    ime.push(document.getElementById("player-3").value);
    ime.push(document.getElementById("player-4").value);

    if(ime[0] != '')
    document.getElementById("ime-1").innerHTML = ime[0];
    if(ime[1] != '')
    document.getElementById("ime-2").innerHTML = ime[1];
    if(ime[2] != '')
    document.getElementById("ime-3").innerHTML = ime[2];
    if(ime[3] != '')
    document.getElementById("ime-4").innerHTML = ime[3];

    tabela.style.display = "none";
    tablica.style.display = "grid";
}

let pl1 = 0, pl2 = 0, pl3 = 0, pl4 = 0;
let arh1= [];
let arh2= [];
let arh3= [];
let arh4= [];

function racunaj(){

    var le1 = 0, le2 = 0, le3 = 0, le4= 0;
    le1 = document.getElementById("rez-1").value;
    le2 = document.getElementById("rez-2").value;
    le3 = document.getElementById("rez-3").value;
    le4 = document.getElementById("rez-4").value;

    if(parseInt(le1)){
        le1 = parseInt(le1);
    }else{
        le1 = 0;
    }
    if(parseInt(le2)){
        le2 = parseInt(le2);
    }else{
        le2 = 0;
    }
    if(parseInt(le3)){
        le3 = parseInt(le3);
    }else{
        le3 = 0;
    }
    if(parseInt(le4)){
        le4 = parseInt(le4);
    }else{
        le4 = 0;
    }

    pl1 += le1;
    pl2 += le2;
    pl3 += le3;
    pl4 += le4;

    arh1.push(pl1);
    arh2.push(pl2);
    arh3.push(pl3);
    arh4.push(pl4);

    document.getElementById("re-1").innerHTML = pl1;
    document.getElementById("re-2").innerHTML = pl2;
    document.getElementById("re-3").innerHTML = pl3;
    document.getElementById("re-4").innerHTML = pl4;

}

function bula(vrijednost){
    tablica.style.display = "none";
    bule.style.display = "grid";
    
    document.getElementById("bu-11").innerHTML = arh1[0+4*vrijednost];
    document.getElementById("bu-21").innerHTML = arh1[1+4*vrijednost];
    document.getElementById("bu-31").innerHTML = arh1[2+4*vrijednost];
    document.getElementById("bu-41").innerHTML = arh1[3+4*vrijednost];

    document.getElementById("bu-12").innerHTML = arh2[0+4*vrijednost];
    document.getElementById("bu-22").innerHTML = arh2[1+4*vrijednost];
    document.getElementById("bu-32").innerHTML = arh2[2+4*vrijednost];
    document.getElementById("bu-42").innerHTML = arh2[3+4*vrijednost];

    document.getElementById("bu-13").innerHTML = arh3[0+4*vrijednost];
    document.getElementById("bu-23").innerHTML = arh3[1+4*vrijednost];
    document.getElementById("bu-33").innerHTML = arh3[2+4*vrijednost];
    document.getElementById("bu-43").innerHTML = arh3[3+4*vrijednost];

    document.getElementById("bu-14").innerHTML = arh4[0+4*vrijednost];
    document.getElementById("bu-24").innerHTML = arh4[1+4*vrijednost];
    document.getElementById("bu-34").innerHTML = arh4[2+4*vrijednost];
    document.getElementById("bu-44").innerHTML = arh4[3+4*vrijednost];
}

function nazad(){
    tablica.style.display = "grid";
    bule.style.display = "none";
}
