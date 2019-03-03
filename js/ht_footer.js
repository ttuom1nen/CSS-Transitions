//Tommi Tuominen 2014
//Footerin toiminnot

var pv = ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'];

function DokumentinMuokkausPaiva(){
	var dateString = "";
	var dateString_mod = "";

	//Haetaan ajat ja muutetaan ne millisekunneiksi
	var aika = new Date();
	var aika_milsek = aika.getTime();

	var aika_mod = new Date(document.lastModified);
	var aika_mod_milsek = aika_mod.getTime();

	var month = aika.getMonth() + 1;
	var day = aika.getDate();
	var year = aika.getFullYear();
	var hours = aika.getHours();
	var minutes = aika.getMinutes();

	dateString = "Nyt on "+pv[aika.getDay()]+" "+day+"."+month+"."+year+" klo "+hours+":"+minutes+"<br/>";

	//Lasketaan muokkaus- ja nykypvän erotus
	var milseks = aika_milsek-aika_mod_milsek;

	var sek;
	var min;
	var tun;
	var pva;

	//Muutetaan millisekunnit muihin aikamuotoihin
	sek = Math.floor(milseks/1000);
	min = Math.floor(sek/60);
	sek = sek%60;
	tun = Math.floor(min/60);
	min = min%60;
	pva = Math.floor(tun/24);
	tun = tun%24;

	//Jos alle viikko
	if(milseks < 604800000 && milseks >= 86400000){
		dateString_mod = "Sivun muokkauksesta "+pva+" päivää "+tun+" tuntia";
	}
	//Jos alle päivä
	else if(milseks < 86400000){
		dateString_mod = "Sivun muokkauksesta "+pva+" päivää "+tun+" tuntia "+min+" minuuttia";
	}
	//Jos yli viikko
	else{
		dateString_mod = "Sivun muokkauksesta "+pva+" päivää";
	}

	document.write(dateString);
	document.write(dateString_mod);
}

document.write("<footer>");
DokumentinMuokkausPaiva();
document.write("<div id='footerdiv'>Tommi Tuominen</div></footer>");