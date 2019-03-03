//Tommi Tuominen 2014
//Navigaatiossa käytettävät toiminnot

var toggle = 1;

//Leijuvan navigaation piilotus
function piilota(){
	if(toggle==1){
		toggle = 0;
		$("#floatmenu_ul").css("visibility","hidden");
		$("#floatmenu").css("height","30");
	}else{
		toggle = 1;	
		$("#floatmenu_ul").css("visibility","visible");
		$("#floatmenu").css("height","400");				
	}
}

//Leijuvan navigaation raahaus
$(function(){
	$("#floatmenu").draggable({ scroll: true, scrollSpeed: 100 });	
});

//Navigaation tulostus
document.write("<br/><nav>"+
	"<ul>"+
		"<li><a href='index.html'>CSS3-Muutokset</a>"+
		"<li><a href='page2.html'>Testaus</a>"+
		"<li><a href='page3.html'>Palaute</a>"+
		"<li><a href='page4.html'>Lähteet</a>"+		
	"</ul></nav>");