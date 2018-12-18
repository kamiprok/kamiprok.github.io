
function equation() {
    let a = document.getElementById('pierwsza').value;
    let b = document.getElementById('druga').value;
    let c = document.getElementById('trzecia').value;

    if (isNaN(a)){
        document.getElementById('box').style.display = "block";
        document.getElementById('msg').value = "Zmienna A nie jest liczbą!";
        clearForm2();
        } else if (isNaN(b)){
            document.getElementById('box').style.display = "block";
            document.getElementById('msg').value = "Zmienna B nie jest liczbą!";
            clearForm2();
            } else if (isNaN(c)){
                document.getElementById('box').style.display = "block";
                document.getElementById('msg').value = "Zmienna C nie jest liczbą!";
                clearForm2();

                    } else if ( a == 0 ) {

                            if (b == 0){
                                document.getElementById('box').style.display = "block";
                                document.getElementById('msg').value = "Równanie sprzeczne.";
                                document.getElementById('odpowiedz').value = "Brak rozwiązań.";
                                clearForm3();
                                
                            } else {

                        document.getElementById('box').style.display = "block";
                        document.getElementById('msg').value = "To jest równanie liniowe.";
                        document.getElementById('odpowiedz').value = "Istnieje tylko jedno rozwiązanie!";
                        document.getElementById('pierw1').value = (( 0 - c)  / b );
                            }
                            
                    }   else {
                            document.getElementById('msg').value = null;
                            document.getElementById('box').style.display = "none";

        let delta = (b * b) - 4 * (a * c);
        let sqrtdelta = Math.sqrt(delta);
        document.getElementById('delta').value = delta;

        if (delta < 0){
            document.getElementById('odpowiedz').value = "Delta ujemna. Nie ma rozwiązań!";
            document.getElementById('pierw1').value = null;
            document.getElementById('pierw2').value = null;
        } else if (delta == 0){
            document.getElementById('odpowiedz').value = "Delta równa zero. Istnieje jedno rozwiązanie!";
            document.getElementById('pierw1').value = ((- b - sqrtdelta) / (2 * a));
            document.getElementById('pierw2').value = null;
        } else if (delta > 0){
            document.getElementById('odpowiedz').value = "Delta dodatnia. Istnieją dwa rozwiązania!";
            document.getElementById('pierw1').value = ((- b - sqrtdelta) / (2 * a));
            document.getElementById('pierw2').value = ((- b + sqrtdelta) / (2 * a));
        }}};

function clearForm() {
    document.getElementById('pierwsza').value = null;
    document.getElementById('druga').value = null;
    document.getElementById('trzecia').value = null;
    document.getElementById('delta').value = null;
    document.getElementById('odpowiedz').value = null;
    document.getElementById('pierw1').value = null;
    document.getElementById('pierw2').value = null;
    document.getElementById('msg').value = null;
    document.getElementById('box').style.display = "none";
}

function clearForm2() {
    document.getElementById('delta').value = null;
    document.getElementById('odpowiedz').value = null;
    document.getElementById('pierw1').value = null;
    document.getElementById('pierw2').value = null;
}

function clearForm3() {
    document.getElementById('delta').value = null;
    document.getElementById('pierw1').value = null;
    document.getElementById('pierw2').value = null;
};


// full page tab

function openPage(pageName,elmnt,color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// vat

function vatt() {
        let vat = parseInt(document.getElementById('vat').value);
        let procent = document.getElementById('wartoscvat').value;
            if (isNaN(vat)){
                document.getElementById('wartosc-netto').value = 'Podana wartość nie jest liczbą!';
                document.getElementById('wartosc-vat').value = '';
                document.getElementById('wartosc-brutto').value = '';
            } else {
                $("#wynik-vat").show();
                document.getElementById('wartosc-netto').value = vat;
                document.getElementById('wartosc-vat').value = vat * procent;
                document.getElementById('wartosc-brutto').value = vat + (vat * procent);
}};

function clearForm5() {
    document.getElementById('vat').value = null;
    document.getElementById('wartosc-netto').value = null;
    document.getElementById('wartosc-vat').value = null;
    document.getElementById('wartosc-brutto').value = null;
    document.getElementById('wynik-vat').style.display = 'none';
};

