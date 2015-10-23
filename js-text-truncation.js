// simple method

var str = '';
var len = 15;
$('YOUR_SELECTOR').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text(str.substring(0, len) + '...');
  }
});



// advanced method 

var str = '';
var len = 15;
$('YOUR_SELECTOR').each(function () {
  str = $(this).text();
  if(str.length >= len) {
    $(this).text((str.indexOf(' ', len) === -1) ? $(this).text() : str.substring(0, str.indexOf(' ', len)) + '...');
  }
});


