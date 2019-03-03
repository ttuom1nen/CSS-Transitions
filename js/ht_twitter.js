//Tommi Tuominen 2014
//Twitterin toiminnot

document.write(""+      
"<div class=\"twitterbox\">"+
  "<div id=\"floatmenu_b\" class=\"ui-widget-content\">"+
    "<a class=\"twitter-timeline\" style=\"float: right;\" href=\"https://twitter.com/w3c\"  data-widget-id=\"470638724376571904\">Twiittejä käyttäjältä @w3c</a>"+
  "</div>"+
"</div>");

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");