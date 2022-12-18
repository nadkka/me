document.onselectstart = function(){return false;};

var pieniadze= 0

function graj1(){
  document.getElementById("caly").style.display="none";
  document.getElementById("guziki").style.display="none";
  document.getElementById("memory").style.display="block";
}

function graj2(){
  document.getElementById("caly").style.display="none";
  document.getElementById("guziki").style.display="none";
  document.getElementById("matematyka").style.display="block";   
}

function graj3(){
  document.getElementById("caly").style.display="none";
  document.getElementById("guziki").style.display="none";
  document.getElementById("slowo").style.display="block";  
}

function graj4(){
  document.getElementById("caly").style.display="none";
  document.getElementById("guziki").style.display="none";
  document.getElementById("wisielec").style.display="block"; 
}


function powrot(){
    document.getElementById("caly").style.display="block";
    document.getElementById("guziki").style.display="block";
    document.getElementById("pytanie").style.display="none"; 
    document.getElementById("kolofortuny").style.display="none"; 
    document.getElementById("info").style.display="none"; 
    document.getElementById("zainte").style.display="none"; 
    document.getElementById("podroze").style.display="none"; 
    document.getElementById("filmy").style.display="none"; 
    document.getElementById("memory").style.display="none"; 
    document.getElementById("matematyka").style.display="none"; 
    document.getElementById("slowo").style.display="none"; 
    document.getElementById("wisielec").style.display="none"; 
}


function znakzap(){
  document.getElementById("caly").style.display="none";
  document.getElementById("guziki").style.display="none";
  document.getElementById("pytanie").style.display="block"; 
  document.getElementById("kolofortuny").style.display="none"; 
  document.getElementById("info").style.display="none"; 
  document.getElementById("zainte").style.display="none"; 
  document.getElementById("podroze").style.display="none"; 
  document.getElementById("filmy").style.display="none"; 
  document.getElementById("memory").style.display="none"; 
  document.getElementById("matematyka").style.display="none"; 
  document.getElementById("slowo").style.display="none"; 
  document.getElementById("wisielec").style.display="none"; 
}

function kolo(){
    document.getElementById("caly").style.display="none";
    document.getElementById("guziki").style.display="none";
    document.getElementById("pytanie").style.display="none"; 
    document.getElementById("kolofortuny").style.display="block"; 
    document.getElementById("info").style.display="none"; 
    document.getElementById("zainte").style.display="none"; 
    document.getElementById("podroze").style.display="none"; 
    document.getElementById("filmy").style.display="none"; 
    document.getElementById("memory").style.display="none"; 
    document.getElementById("matematyka").style.display="none"; 
    document.getElementById("slowo").style.display="none"; 
    document.getElementById("wisielec").style.display="none"; 
}

function wheel(){
    if(pieniadze>=3){
    document.getElementById("wygrana").style.display="none";
    document.getElementById("boxkolo").style.display="none";
    pieniadze= pieniadze- 3;
    win= Math.floor(Math.random() * 4);
    if (win==0){
        pieniadze=0;
        document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
        document.getElementById("wygrana").style.display="block";
        document.getElementById("wygrana").innerHTML= "PRZEGRYWASZ CAŁE SWOJE PIENIĄDZE!";
        setTimeout(() => {
            document.getElementById("boxkolo").style.display="block"
            document.getElementById("wygrana").style.display="none";
          }, 2000);
        
    }    

    if (win==1){
        pieniadze+=3;
        document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
        document.getElementById("wygrana").style.display="block";
        document.getElementById("wygrana").innerHTML= "WYGRYWASZ: 3$";
        setTimeout(() => {
            document.getElementById("boxkolo").style.display="block"
            document.getElementById("wygrana").style.display="none";
          }, 2000);
    }

    if (win==2){
        pieniadze+=5;
        document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
        document.getElementById("wygrana").style.display="block";
        document.getElementById("wygrana").innerHTML= "WYGRYWASZ: 5$";
        setTimeout(() => {
            document.getElementById("boxkolo").style.display="block"
            document.getElementById("wygrana").style.display="none";
          }, 2000);
    }

    if (win==3){
        pieniadze+=10;
        document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
        document.getElementById("wygrana").style.display="block";
        document.getElementById("wygrana").innerHTML= "WYGRYWASZ: 10$";
        setTimeout(() => {
            document.getElementById("boxkolo").style.display="block"
            document.getElementById("wygrana").style.display="none";
          }, 2000);
    }
}
else{
    document.getElementById("bezkasy").innerHTML="NIE MASZ WYSTARCZAJĄCO PIENIĘDZY"
    setTimeout(() => {
        document.getElementById("bezkasy").innerHTML=""
      }, 2000);
}

    


}

// zakladki

var gA=0

function guzior1(){
if(gA==1){
    document.getElementById("caly").style.display="none";
    document.getElementById("guziki").style.display="none";
    document.getElementById("info").style.display="block"; 
}
  if(pieniadze>=3 && gA==0){
    document.getElementById("caly").style.display="none";
    document.getElementById("guziki").style.display="none";
    document.getElementById("info").style.display="block"; 
    pieniadze-=3;
    gA+=1;
    document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
    document.getElementById("guzikA").innerHTML="ODBLOKOWANE";
  }
  if(pieniadze<3 && gA==0){
    document.getElementById("a").innerHTML+=" <br>NIE MASZ WYSTARCZAJĄCO PIENIĘDZY!"
    setTimeout(() => {
      document.getElementById("a").innerHTML="<h2>OGÓLNE INFORMACJE</h2> KOSZT: 3 $ <br> <br> <button class='guzior' id='guzikA' onclick='guzior1()'>ODBLOKUJ</button>"
    }, 3000);
  }

}

var gB=0

function guzior2(){
    if(gB==1){
        document.getElementById("caly").style.display="none";
        document.getElementById("guziki").style.display="none";
        document.getElementById("zainte").style.display="block"; 
    }
    if(pieniadze>=2 && gB==0){
      document.getElementById("caly").style.display="none";
      document.getElementById("guziki").style.display="none";
      document.getElementById("zainte").style.display="block"; 
      pieniadze-=2;
      gB+=1;
      document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
      document.getElementById("guzikB").innerHTML="ODBLOKOWANE";
    }
    if(pieniadze<2 && gB==0){
      document.getElementById("b").innerHTML+=" <br>NIE MASZ WYSTARCZAJĄCO PIENIĘDZY!"
      setTimeout(() => {
        document.getElementById("b").innerHTML="<h2>MOJE ZAINTERESOWANIA</h2>KOSZT: 2 $ <br> <br><button class='guzior' id='guzikB' onclick='guzior2()'>ODBLOKUJ</button>"
      }, 3000);
    }
  
}

var gC=0

function guzior3(){
    if(gC==1){
        document.getElementById("caly").style.display="none";
        document.getElementById("guziki").style.display="none";
        document.getElementById("podroze").style.display="block"; 
    }
if(pieniadze>=2 && gC==0){
    document.getElementById("caly").style.display="none";
    document.getElementById("guziki").style.display="none";
    document.getElementById("podroze").style.display="block"; 
    pieniadze-=2;
    gC+=1;
    document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
    document.getElementById("guzikC").innerHTML="ODBLOKOWANE";
}
if(pieniadze<2 && gC==0){
    document.getElementById("c").innerHTML+=" <br>NIE MASZ WYSTARCZAJĄCO PIENIĘDZY!"
    setTimeout(() => {
    document.getElementById("c").innerHTML="<h2>PODRÓŻE MAŁE I DUŻE</h2> KOSZT: 2 $ <br> <br> <button class='guzior' id='guzikC' onclick='guzior3()'>ODBLOKUJ</button>"
    }, 3000);
}

}

var gD=0

function guzior4(){
    if(gD==1){
        document.getElementById("caly").style.display="none";
        document.getElementById("guziki").style.display="none";
        document.getElementById("filmy").style.display="block"; 
    }
if(pieniadze>=1 && gD==0){
    document.getElementById("caly").style.display="none";
    document.getElementById("guziki").style.display="none";
    document.getElementById("filmy").style.display="block"; 
    pieniadze-=1;
    gD+=1;
    document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
    document.getElementById("guzikD").innerHTML="ODBLOKOWANE";
}
if(pieniadze<2 && gD==0){
    document.getElementById("d").innerHTML+=" <br>NIE MASZ WYSTARCZAJĄCO PIENIĘDZY!"
    setTimeout(() => {
    document.getElementById("d").innerHTML="<h2>ULUBIONE FILMY I SERIALE</h2> KOSZT: 1 $ <br> <br> <button class='guzior' id='guzikD' onclick='guzior4()'>ODBLOKUJ</button>"
    }, 3000);
}

}

// MEMORY

var cards=[];
var numbers=[1,2,3,4,5,6,1,2,3,4,5,6];

function losowanie(){
    licznik=0
    while(cards.length<=12){
        var number = Math.floor(Math.random()*numbers.length);
        cards.push("kot"+numbers[number]+'.jpg')
        numbers.splice(number,1);
    }
}


var oneVisible = false;
var nrKarty;
var licznik =0;
var blokada=false;
var koniec = 6;


function odkryj(nr){
    var opacityValue=$("#c"+ nr).css('opacity');
    if(opacityValue!= 0 && blokada==false){
        blokada=true;
        var obraz= "url("+cards[nr]+")";

        $("#c" + nr).css("background-image", obraz );
        
        if(oneVisible==false){
        
            oneVisible=true;
            nrKarty=nr;
            blokada=false;
        }
        else{
        if(cards[nrKarty]==cards[nr]){
            setTimeout(function(){para(nr, nrKarty)}, 200)
        
        }
        else{
            setTimeout(function(){pudlo(nr, nrKarty)}, 1000)
        }
            oneVisible=false;
            licznik++;
        
            $(".score").html("LICZNIK RUCHÓW: "+ licznik)
        }
        
    }

}

function para(nr1, nr2){
    if(nr1!= nr2){
        $("#c"+ nr1).css('opacity','0');
        $("#c"+ nr2).css('opacity','0');
        koniec--;
        if(koniec==0){
          pieniadze = pieniadze + 1
            document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
            document.getElementById("memory").style.display="none";
            document.getElementById("guziki").style.display="block";
            document.getElementById("caly").style.display="block";
            $("#c0").css('opacity', '100%')
            $("#c1").css('opacity', '100%')
            $("#c2").css('opacity', '100%')
            $("#c3").css('opacity', '100%')
            $("#c4").css('opacity', '100%')
            $("#c5").css('opacity', '100%')
            $("#c6").css('opacity', '100%')
            $("#c7").css('opacity', '100%')
            $("#c8").css('opacity', '100%')
            $("#c9").css('opacity', '100%')
            $("#c10").css('opacity', '100%')
            $("#c11").css('opacity', '100%')
            $("#c0").css('background-image', 'url(karta.jpg)')
            $("#c1").css('background-image', 'url(karta.jpg)')
            $("#c2").css('background-image', 'url(karta.jpg)')
            $("#c3").css('background-image', 'url(karta.jpg)')
            $("#c4").css('background-image', 'url(karta.jpg)')
            $("#c5").css('background-image', 'url(karta.jpg)')
            $("#c6").css('background-image', 'url(karta.jpg)')
            $("#c7").css('background-image', 'url(karta.jpg)')
            $("#c8").css('background-image', 'url(karta.jpg)')
            $("#c9").css('background-image', 'url(karta.jpg)')
            $("#c10").css('background-image', 'url(karta.jpg)')
            $("#c11").css('background-image', 'url(karta.jpg)')
            koniec = 6
            licznik = 0
            $(".score").html("LICZNIK RUCHÓW: "+ licznik)
            numbers=[1,2,3,4,5,6,1,2,3,4,5,6]
            cards=[]
            oneVisible = false
            blokada=false
            nrKarty =""
        }
    }
    else{
        $("#c"+nr1).css('background-image', 'url(karta.jpg)');
    }
    blokada=false;
}

function pudlo(nr1,nr2){
    $("#c"+nr1).css('background-image', 'url(karta.jpg)')
    $("#c"+nr2).css('background-image', 'url(karta.jpg)')
    blokada=false;
}

// MATEMATYKA


var punkty=0
var liczba1
var liczba2
var wynik
var suma
var znak

function poczatek(){
    znak = Math.floor(Math.random() * 2);
    if (znak==0){
    liczba1 = Math.floor(Math.random() * 200);
    liczba2 = Math.floor(Math.random() * 200);
        document.getElementById("dzialanie").innerHTML= liczba1 + "+" + liczba2 + "=";
        suma = liczba1+ liczba2;
        console.log(suma)
    }
    if (znak==1){
    liczba1 = Math.floor(Math.random() * 100);
    liczba2 = Math.floor(Math.random() * 100);
        document.getElementById("dzialanie").innerHTML= liczba1 + "-" + liczba2 + "=";
        suma = liczba1- liczba2;
        console.log(suma)
    }
    if (znak==2){
    liczba1 = Math.floor(Math.random() * 20);
    liczba2 = Math.floor(Math.random() * 20);
        document.getElementById("dzialanie").innerHTML= liczba1 + "*" + liczba2 + "=";
        suma = liczba1* liczba2;
        console.log(suma)
    }
}
poczatek()
console.log(znak)
function func(){
    wynik = document.getElementById("wynik").value;
    if(znak==0){
        suma = liczba1+ liczba2;
    }
    if(znak==1){
        suma = liczba1- liczba2;
    }
    if(znak==2){
        suma = liczba1* liczba2;
    }
    if (wynik == suma){
        punkty= punkty+1;
        document.getElementById("punkty").innerHTML="PUNKTY: " + punkty;
        document.getElementById("abc").innerHTML = "DOBRZE!";
        document.getElementById("wynik").value="";
        if(punkty==5){
          pieniadze= pieniadze+2
          document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
          document.getElementById("matematyka").style.display="none";
          document.getElementById("guziki").style.display="block";
          document.getElementById("caly").style.display="block";
          document.getElementById("abc").innerHTML = "";
          punkty=0
          document.getElementById("punkty").innerHTML="PUNKTY: " + punkty;

        }
    }
    if (wynik!= suma){
        document.getElementById("abc").innerHTML="ŹLE, WYNIK TO: "+ suma+ "!";    
    }
    poczatek()



}

// ODNAJDZ SLOWO

let ile=15;
let wyrazy=["jajko", "komputer", "kremowy", "murarz", "kalkulator", "chleb", "frytki", "policzek", "kanapki", "sowa", "antarktyda", "katecheta","kolorowanka",'milion','komoda','chevrolet','grosz','arachnofobia','lekkoatletyka','kasztanowy','szafa','deoksyrybonukleinowy', 'supermarket','bluza', "zamek", "paczka", 'nos', 'akrobatyka', 'balet', 'kuchnia', 'parapet', 'wyspa', 'cukier', 'torebka', 'nauka'];
let zgadnij
let los

    los= Math.floor(Math.random()*wyrazy.length);
    zgadnij = wyrazy[los];
    zgadnij=zgadnij.toUpperCase();
    
    console.log(zgadnij);


let wyrazUp=[];
let wyrazDown=[];

function aaaa(){
    document.getElementById("nad").innerHTML="";
    document.getElementById("pod").innerHTML="";

    let wyraz = document.getElementById("wyraz").value;
    wyraz=wyraz.toUpperCase();
    ile-=1;

    if(wyraz<zgadnij){
        wyrazUp.push(wyraz);

    }
    if(wyraz>zgadnij){
        wyrazDown.push(wyraz);
    }

    wyrazUp.sort();
    wyrazDown.sort();

    for (let i=0; i<wyrazUp.length; i++){
        for(let x=0; x<wyrazUp[i].length; x++){
            if(zgadnij.charAt(x)==wyrazUp[i].charAt(x)){
                document.getElementById("nad").innerHTML+="<a class='poprawna'>"+ wyrazUp[i].charAt(x) + "</a>";
            }
            else{
                document.getElementById("nad").innerHTML+="<a class='zwykla'>"+ wyrazUp[i].charAt(x) + "</a>";
            }

        }
        document.getElementById("nad").innerHTML +="<br>";
        document.getElementById("wyraz").value="";

    }

    for (let i=0; i<wyrazDown.length; i++){
        for(let x=0; x<wyrazDown[i].length; x++){
            if(zgadnij.charAt(x)==wyrazDown[i].charAt(x)){
                document.getElementById("pod").innerHTML+="<a class='poprawna'>"+ wyrazDown[i].charAt(x) + "</a>";
            }
            else{
                document.getElementById("pod").innerHTML+="<a class='zwykla'>"+ wyrazDown[i].charAt(x) + "</a>";
            }

        }
        document.getElementById("pod").innerHTML +="<br>";
        document.getElementById("wyraz").value="";

    }

    document.getElementById("life").innerHTML=ile;

    if(zgadnij==wyraz){
        pieniadze= pieniadze+3
        document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
        document.getElementById("slowo").style.display="none";
        document.getElementById("guziki").style.display="block";
        document.getElementById("caly").style.display="block";
        document.getElementById("nad").innerHTML="";
        document.getElementById("pod").innerHTML="";
        document.getElementById("wyraz").value="";
        ile=15;
        document.getElementById("life").innerHTML=ile;
        wyrazUp=[];
        wyrazDown=[];
        los= Math.floor(Math.random()*wyrazy.length);
        zgadnij = wyrazy[los];
        zgadnij=zgadnij.toUpperCase();
        
        console.log(zgadnij);
    }

    if(ile<1){
        document.getElementById("slowo").style.display="none";
        document.getElementById("guziki").style.display="block";
        document.getElementById("caly").style.display="block";
        document.getElementById("nad").innerHTML="";
        document.getElementById("pod").innerHTML="";
        document.getElementById("wyraz").value="";
        ile=15;
        document.getElementById("life").innerHTML=ile;
        wyrazUp=[];
        wyrazDown=[];
        los= Math.floor(Math.random()*wyrazy.length);
        zgadnij = wyrazy[los];
        zgadnij=zgadnij.toUpperCase();
        
        console.log(zgadnij);

    }

}

// WISIELEC

    
var slowo, slowa, el, strzal, dl;
var odpowiedzi=[];
trafienie= false;
var bledy=0;
var indeks
    slowa=["jajko", "komputer", "kremówki", "pieniądze", "kalkulator", "naleśniki", "borówka", "pociąg", "kanapki", "ślimak", "antarktyda", "księżniczka","kolorowanka",'tysiąc','komoda','chevrolet','pięćdziesięciogroszówka','arachnofobia','lekkoatletyka','kasztanowy','kołowrotek','deoksyrybonukleinowy', "murarz", "chleb", "frytki", "policzek", "sowa", "katecheta",'milion','cappuccino','szafa', 'supermarket','bluza', "zamek", "paczka", 'nos', 'akrobatyka', 'balet', 'kuchnia', 'parapet', 'wyspa', 'cukier', 'torebka', 'drzewo'];
    var kategoria=["jedzenie", "urządzenie", "jedzenie", "rzeczy", "urządzenie", "jedzenie", "jedzenie", "transport", "jedzenie", "zwierzę", "kontynent", "osoba","rzecz",'liczba','mebel','auto','moneta','lęk','sport','kolor','rzecz','biologia','praca', 'jedzenie', 'jedzenie', 'część ciała', 'zwierzę', 'praca', 'liczba', 'napój', 'rzecz', 'miejsce', 'ubranie', 'miejsce', 'rzecz', 'część ciała', 'sport', 'sport', 'pokój', 'rzecz', 'miejsce', 'jedzenie', 'akcesoria', 'roślina'];
       
        indeks=Math.floor(Math.random() * slowa.length);
        slowo=slowa[indeks];
        document.getElementById("kategoria").innerHTML= kategoria[indeks];
        dl=slowo.length;
        console.log(slowo);
        
        for(var i=0; i<dl; i++){
            odpowiedzi[i]= '_';
        }
        document.getElementById('haslo').innerHTML=odpowiedzi.join(" ");
    


function sprawdz(){
    trafienie= false;
    strzal=document.getElementById('znak').value;
    document.getElementById("literki").innerHTML+=strzal+", ";
   for(var j=0; j<slowo.length; j++) {
       if(slowo[j]==strzal && odpowiedzi[j]=="_"){
           odpowiedzi[j]=strzal;
           dl--;
           trafienie=true;
       }
       document.getElementById('haslo').innerHTML=odpowiedzi.join(" ");
   }
   document.getElementById('znak').value="";

   if(trafienie== false && bledy<9){
       bledy++;
       obraz= "s" + bledy + ".jpg";
       document.getElementById("szubienica").innerHTML=' <img src=" '+ obraz+ ' ">';
   }
   if(dl==0 && bledy<9){
    pieniadze= pieniadze+3
    document.getElementById("kasa").innerHTML="STAN KONTA: "+ pieniadze+ " $";
    document.getElementById("wisielec").style.display="none";
    document.getElementById("guziki").style.display="block";
    document.getElementById("caly").style.display="block";
    document.getElementById("haslo").innerHTML="";
    bledy=0
    odpowiedzi=[]
    obraz= "s" + bledy + ".jpg";
    document.getElementById("szubienica").innerHTML=' <img src=" '+ obraz+ ' ">';
    indeks=Math.floor(Math.random() * slowa.length);
    slowo=slowa[indeks];
    document.getElementById("kategoria").innerHTML= kategoria[indeks];
    dl=slowo.length;
    console.log(slowo);
    
    for(var i=0; i<dl; i++){
        odpowiedzi[i]= '_';
    }
    document.getElementById('haslo').innerHTML=odpowiedzi.join(" ");
    document.getElementById("literki").innerHTML="";

   }
   if(bledy==9){
    document.getElementById("wisielec").style.display="none";
    document.getElementById("guziki").style.display="block";
    document.getElementById("caly").style.display="block";
    document.getElementById("haslo").innerHTML="";
    bledy=0
    odpowiedzi=[]
    obraz= "s" + bledy + ".jpg";
    document.getElementById("szubienica").innerHTML=' <img src=" '+ obraz+ ' ">';
    indeks=Math.floor(Math.random() * slowa.length);
    slowo=slowa[indeks];
    document.getElementById("kategoria").innerHTML= kategoria[indeks];
    dl=slowo.length;
    console.log(slowo);
    
    for(var i=0; i<dl; i++){
        odpowiedzi[i]= '_';
    }
    document.getElementById('haslo').innerHTML=odpowiedzi.join(" ");
    document.getElementById("literki").innerHTML="";

}
}