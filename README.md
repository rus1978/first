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


LICENSE
=======
Copyright (c) 2016 Бери кто хочешь!




