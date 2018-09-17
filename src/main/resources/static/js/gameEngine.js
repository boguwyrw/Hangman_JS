
var tabTekstu = new Array(11);
tabTekstu[0] = "Kompot";
tabTekstu[1] = "Samolot";
tabTekstu[2] = "Niebo";
tabTekstu[3] = "Przezroczysty";
tabTekstu[4] = "Wydmuszka";
tabTekstu[5] = "Róża";
tabTekstu[6] = "Kolce";
tabTekstu[7] = "Pinokio";
tabTekstu[8] = "Szosa";
tabTekstu[9] = "Marchew";
tabTekstu[10] = "Jajko";

var nrTekstu = Math.floor((Math.random() * tabTekstu.length-1) + 1);

var haslo = tabTekstu[nrTekstu];

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var iloscSkuch = 0;

var ukryteHaslo = "";

for(i = 0; i < dlugosc; i++){
    if(haslo.charAt(i) == " "){ukryteHaslo = ukryteHaslo + " ";}
    else{ukryteHaslo = ukryteHaslo + "-";}
}

function wypiszHaslo(){
    document.getElementById("plansza").innerHTML = ukryteHaslo;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start(){

    var divAlfabet = "";

    for(i = 0; i<=34; i++){
        var element = "lit" + i;
        divAlfabet = divAlfabet + '<div class="litera" onclick="sprawdz('+i+');" id="'+element+'">'+litery[i]+'</div>';
        if((i+1)%7 == 0)divAlfabet = divAlfabet + '<div style="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML = divAlfabet;

    wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak){
    if(miejsce > this.length-1){
        return this.toString();
    }
    else{
        return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
    }
}

function sprawdz(nr){

    var trafiona = false;

    for(i = 0; i < dlugosc; i++){
        if(haslo.charAt(i) == litery[nr]){
            ukryteHaslo = ukryteHaslo.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }

    if(trafiona == true){
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        wypiszHaslo();
    }
    else{
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";")

        //skucha
        iloscSkuch++;
        var obraz = "img/s"+ iloscSkuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt=""/>';
    }
    // wygrana
    if(haslo == ukryteHaslo){
        document.getElementById("alfabet").innerHTML = "WYGRANA! Podano prawidłowe hasło: " + haslo + '<br><br><span class="reset" onclick="location.reload()">Jeszcze raz?</span>'
    }

    // przegrana
    if(iloscSkuch >= 9){
        document.getElementById("alfabet").innerHTML = "PRZEGRANA! Prawidłowe hasło: " + haslo + '<br><br><span class="reset" onclick="location.reload()">Jeszcze raz?</span>'
    }
}

