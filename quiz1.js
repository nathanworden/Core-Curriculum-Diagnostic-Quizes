

$(function() {
  // Array.prototype.slice.call(document.querySelector('#main').querySelectorAll('.emphasis'));

  // console.log(Array.prototype.slice.call((document.querySelector('#main')).querySelectorAll('.emphasis')));

  // console.log($.makeArray($('#main').find('.emphasis')));



  var value1 = document.querySelector('div').firstChild.nodeValue;
  var value2 = document.querySelector('div').lastChild.textContent;
  
  console.log(value2 == value1);
  console.log(typeof value2);
  console.log(typeof value1);;
});
