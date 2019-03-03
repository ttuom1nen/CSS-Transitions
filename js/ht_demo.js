//Tommi Tuominen 2014
//Transition ominaisuuksien testauksessa
//käytettävän sivun toiminnot

var ominaisuus;
var lisays;

//tehdään tarvittavat arrayt
var komennot = ["width","height","border-radius","box-shadow","font-size","transform","background-color",
"color","border-color","border-top-width","border-right-width","border-bottom-width","border-left-width"];
var arvot = ["100","50","0","0","12","0","#5ECFC6","#ffffff","#34CFC3","1","1","1","1"];
var prefix = ["","","","0px 0px ","","rotate(","","","","","","",""];
var postfix = ["px","px","px","px 0px rgba(50, 50, 50, 0.75)","pt","deg)","","","","px","px","px","px"];

//varastoidaan oletusarvot
var arvot_def = ["100","50","0","0","12","0","#5ECFC6","#ffffff","#34CFC3","1","1","1","1"];

var kesto;
var viive;
var tyyli;

//oletusarvojen palautus
function resetDefaults(){
	for(var i=0; i<komennot.length;i++){
		arvot[i] = arvot_def[i];
	}

defaults();
}

//asetetaan säätimet oletusarvoihin
function defaults(){
	viive = 0;
	kesto = 1;
	tyyli = "ease";

	naytaKoodi(kesto,tyyli,viive);
	asetaMuutos(kesto,tyyli,viive);
	asetaArvot();

	document.getElementById("kesto").value = kesto;
	document.getElementById("viive").value = viive;

	for(var i=0;i<13;i++){
		document.getElementById("field_"+i).value = arvot[i];		
		document.getElementById("slider_"+i).value = arvot[i];
	}

}

//asetetaan uudet arvot arrayhyn
function uudetArvot(id){
var textinput;
var slider;

	if(document.getElementById(id).type != "text"){
		slider = document.getElementById(id);
		textinput = document.getElementById("field_"+slider.name);
		textinput.value = slider.value;
	}
	else{
		textinput = document.getElementById(id);

		slider = document.getElementById("slider_"+textinput.name);

		if(slider.type == "color"){
			slider.value = textinput.value;
		}else{
			slider.value = tarkistaArvot(textinput.value);
		}
	}

	arvot[slider.name] = slider.value;
}

//asetetaan jQueryllä arrayden mukaiset css arvot
function asetaArvot(){

	//haetaan kesto, tyyli ja viive
	//testataan onko kesto tyhjä
	if(document.getElementById("kesto").value != ""){
		kesto = tarkistaArvot(document.getElementById("kesto").value);
	}

	var tyyli_dropdown = document.getElementById("tyyli");
	var tyyli = tyyli_dropdown.options[tyyli_dropdown.selectedIndex].value;
	viive = tarkistaArvot(document.getElementById("viive").value);

	asetaMuutos(kesto, tyyli, viive);

	for(var i=0; i<komennot.length;i++){
	  	$(".animate").css(komennot[i], prefix[i]+arvot[i]+postfix[i]);
	}
  	$("#demobox_trans").addClass('animate');
}

//muutetaan muutosefektin määreitä halutuilla parametreillä
function asetaMuutos(kesto,tyyli,viive){
	$("#demobox_trans").css({"transition-delay": viive+"s"});
	$("#demobox_trans").css({"transition-property": "all"});
	$("#demobox_trans").css({"transition-duration": ""+kesto+"s"});
	$("#demobox_trans").css({"transition-timing-function": ""+tyyli});

	$("#demobox_trans").css({"-moz-transition-delay": viive+"s"});
	$("#demobox_trans").css({"-moz-transition-property": "all"});
	$("#demobox_trans").css({"-moz-transition-duration": ""+kesto+"s"});
	$("#demobox_trans").css({"-moz-transition-timing-function": ""+tyyli});

	$("#demobox_trans").css({"-webkit-transition-delay": viive+"s"});
	$("#demobox_trans").css({"-webkit-transition-property": "all"});
	$("#demobox_trans").css({"-webkit-transition-duration": ""+kesto+"s"});
	$("#demobox_trans").css({"-webkit-transition-timing-function": ""+tyyli});

	$("#demobox_trans").css({"-o-transition-delay": viive+"s"});
	$("#demobox_trans").css({"-o-transition-property": "all"});
	$("#demobox_trans").css({"-o-transition-duration": ""+kesto+"s"});
	$("#demobox_trans").css({"-o-transition-timing-function": ""+tyyli});

	naytaKoodi(kesto,tyyli,viive);	
}

//Tulostetaan koodi
function naytaKoodi(kesto,tyyli,viive){
	var csscodebox = document.getElementById("csscode");
	csscodebox.innerHTML = "";

	var boxcode =
	"#demobox_trans{\n"+
	"	width:100px;\n"+
	"	height: 50px;\n"+
	"	color: white;\n"+
	"	background-color: #5ECFC6;\n"+
	"	font-size: 12pt;\n"+
	"	text-align: right;\n"+
	"	margin-bottom: 25px;\n"+
	"	border: 1px solid #34CFC3;\n"+
	"\n"+
	"	/* Transitionit */\n"+
	"	transition-delay: "+viive+"s;\n"+
	"	transition-property: all;\n"+
	"	transition-duration: "+kesto+"s;\n"+
	"	transition-timing-function: "+tyyli+";\n"+
	"\n"+
	"	-moz-transition-delay: "+viive+"s;\n"+
	"	-moz-transition-property: all;\n"+
	"	-moz-transition-duration: "+kesto+"s;\n"+
	"	-moz-transition-timing-function: "+tyyli+";\n"+
	"\n"+
	"	-webkit-transition-delay: "+viive+"s;\n"+
	"	-webkit-transition-property: all;\n"+
	"	-webkit-transition-duration: "+kesto+"s;\n"+
	"	-webkit-transition-timing-function: "+tyyli+";\n"+
	"\n"+
	"	-o-transition-delay: "+viive+"s;\n"+
	"	-o-transition-property: all;\n"+
	"	-o-transition-duration: "+kesto+"s;\n"+
	"	-o-transition-timing-function: "+tyyli+";\n"+
	"}\n\n";

	boxcode += ".animate{\n";

	for(var i=0;i<komennot.length;i++){
		boxcode += "	"+komennot[i]+": "+prefix[i]+arvot[i]+postfix[i]+";\n";	
	}
	boxcode += "}";
	csscodebox.innerHTML += boxcode;
}

//Numeraalisen syötteen tarkistus
function tarkistaArvot(a){
	if(a.toString().indexOf('.') == -1){
	  if(isNaN(parseInt(a))){
	    a = 0;
	  }else{
	    a = parseInt(a);
	  }
	}
return a;  
}