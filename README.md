Mycookie.js
===========

Быстрая запись / чтение cookie в среде javascript.  

## Installation

Download package or install with Bower and include `mycookie.min.js` in your document after including jQuery.

## Версия
v.4 17.08.2015


###Примеры использования:
```javascript
mycookie('site_pass', '12345'); //Установить на сессию
mycookie('site_pass', '12345', 60*60*24*30*12); //Установить на год
mycookie('site_pass', '12345', -86400); //Удалить
alert(mycookie('site_pass')); //Получить
```

С использованием патчей - существуют на определенных страницах:
```javascript
mycookie('site_pass', '12345');	//(default) - для всех страниц сайта
mycookie('site_pass', '12345', 0, '/cart/'); //только для "/cart/"
mycookie('site_pass', '12345', 0, false); //только для текущей страницы (автоопределение)
```





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




