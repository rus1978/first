# mycookie.js v4 min 17.08.2015
Быстрая запись / чтение cookie в среде javascript.




###Примеры использования:
```javascript
mycookie('site_pass', '12345'); //Установить на сессию
mycookie('site_pass', '12345', 60*60*24*30*12); //Установить на год
mycookie('site_pass', '12345', -86400); //Удалить
alert(mycookie('site_pass')); //Получить
```

###По патчам
```javascript
mycookie('site_pass', '12345');	//патч корень сайта "/"
mycookie('site_pass', '12345', 0, '/cart/'); //конкректный патч "/cart/"
mycookie('site_pass', '12345', 0, false); //автопатч - текущей страницы
```


Parallax.js
===========

Simple parallax scrolling effect inspired by [Spotify.com](http://spotify.com/) implemented as a jQuery plugin  


## Installation

Download package or install with Bower and include `parallax.min.js` in your document after including jQuery.


`Выделенный` текст
[ссылка](http://blbblb.ru/)

# Заголовок 1
## Заголовок 2
### Заголовок 3

```
выделеный блок
```

```bash
$ bower i --save parallax.js
```

```html
<b>HTML</b>
```

```javascript
var a= 'javascript';
```

```css
.parallax-window {css:12px}
```

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 100px;">type</th>
			<th style="width: 50px;">default</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>imageSrc</td>
			<td>path</td>
			<td>null</td>
			<td>You must provide a path to the image you wish to apply to the parallax effect.</td>
		</tr>

	</tbody>
</table>



LICENSE
=======
Copyright (c) 2016 Бери кто хочешь!




