## js-text-truncation ##
This code truncates the text then adds the elipsis to the end of it.

The Simple Method truncates the text to an exact length, then adds the ellipsis to the end of it. The Advanced Method truncates the text to the end of the next word after that exact length, then adds a space and the ellipsis to the end of it.

This script was original written by <a href="https://github.com/abrad45/" target="blank">abard45</a>.

## Usage ##
Simple Method 
```html
<p class="truncate">We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.</p>
```

```js
//simple method
var str = '';
var len = 150;
$('.truncate').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text(str.substring(0, len) + '...');
  }
});
```
The result will be 
```html
<p class="truncate">We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defe...</p>
```


Advanced Method 
```html
<p class="truncate">We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.</p>
```

```js
//advanced method
var str = '';
var len = 150;
$('.truncate').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text(str.substring(0, len) + '...');
  }
});
```
The result will be 
```html
<p class="truncate">We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense,...</p>
```
