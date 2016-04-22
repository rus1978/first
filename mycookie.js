function mycookie(name, value, seconds, path) {
	if(typeof value=='undefined'){//get
		var value = document.cookie;
		var matches = new RegExp(name+ "=(.*?)($|;)").exec(value);
		return matches ? matches[1] : undefined;
	}

	var expires='';
	if( seconds ){
		
		var date = new Date(new Date().getTime() + seconds*1000);
		
		expires='; expires ='+date.toUTCString();
	}

	if( path === false )path= '';//current path
	else{
		if( !path )path= '/';
		path= ';path='+ path;
	}
	
	document.cookie= name+ '='+ value+ expires+ path;
}
