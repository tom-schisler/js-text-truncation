## Jquery Text Truncation ##
This code truncates the text then adds the elipsis to the end of it.

The Simple Method truncates the text to an exact character length, then adds the ellipsis to the end of it. The Advanced Method truncates the text to the end of the next word after that exact character length, then adds a space and the ellipsis to the end of it.

This script was originally written by <a href="https://github.com/abrad45/" target="blank">abrad45</a>.

### <a href="http://codepen.io/tschisler/full/qbMaeo" target="_blank">CodePen Demo</a> ###

## Usage ##
### Simple Method ###
```html
<p class="simple">We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.</p>
```

```js
//simple method
var str = '';
var len = 65;
$('.simple').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text(str.substring(0, len) + '...');
  }
});
```
The result will be
```html
We the People of the United States, in Order to form a more perfe...
```


### Advanced Method ###
```html
<p class="advanced">We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.</p>
```

```js
//advanced method
var str = '';
var len = 65;
$('.advanced').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text((str.indexOf(' ', len) === -1) ? $(this).text() : str.substring(0, str.indexOf(' ', len)) + '...');
  }
});
```
The result will be
```html
We the People of the United States, in Order to form a more perfect...
```
