// Simple Method - This code truncates the text to an exact length, then adds the elipsis to the end of it.

var str = '';
var len = 15;
$('YOUR_SELECTOR').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text(str.substring(0, len) + '...');
  }
});


// Advanced Method - This code truncates the text to the end of the next word after that exact length, then adds a space and the elipsis to the end of it.

var str = '';
var len = 15;
$('YOUR_SELECTOR').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text((str.indexOf(' ', len) === -1) ? $(this).text() : str.substring(0, str.indexOf(' ', len)) + '...');
  }
});


