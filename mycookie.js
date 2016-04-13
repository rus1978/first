/*
//mycookie v4 min 17.08.2015     чото мин не работает работает full версия
function mycookie(b,c,d,a){if("undefined"==typeof c)return c=document.cookie,(b=(new RegExp(b+"=(.*?)($|;)")).exec(c))?b[1]:void 0;var e="";d&&(e="; expires ="+(new Date((new Date).getTime()+1E3*d)).toUTCString());!1===a?a="":(a||(a="/"),a=";path="+a);document.cookie=b+"="+c+e+a};
*/


/*mycookie v4 min 17.08.2015
Пример:

//Установить на год
mycookie('site_pass', '12345', 60*60*24*30*12);//31104000

//Установить на сессию
mycookie('site_pass', '12345');

//Удалить
mycookie('site_pass', '12345', -86400); ????? надо тестить

//Получить
 alert(mycookie('site_pass'));


//По патчам
mycookie('site_pass', '12345');				патч корень сайта "/"
mycookie('site_pass', '12345', 0, '/cart/');конкректный патч "/cart/"
mycookie('site_pass', '12345', 0, false);	автопатч - текущей страницы
*/

function mycookie(name, value, seconds, path) {
	if(typeof value=='undefined'){//get
		var value = document.cookie;
		var matches = new RegExp(name+ "=(.*?)($|;)").exec(value);
		return matches ? matches[1] : undefined;
	}

	var expires='';
	if( seconds ){
/*	    var date = new Date();
   		date.setTime(date.getTime() + seconds*1000);
*/		
		var date = new Date(new Date().getTime() + seconds*1000);
		
		expires='; expires ='+date.toUTCString();
	}

	if( path === false )path= '';//current path
	else{
		if( !path )path= '/';
		path= ';path='+ path;
	}
	
//	console.log( name+ '='+ value+ expires+ path );
	document.cookie= name+ '='+ value+ expires+ path;
}