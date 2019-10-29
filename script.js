$(document).ready(function(){

    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
  	var params = {
    'query': 'Hồ Chí Minh',
    'limit': 10,
    'indent': true,
    'key' : 'AIzaSyAx70pKho_O8IGCTYjpZcIvom0K9LFoSUU',
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $.each(response.itemListElement, function(i, element) {
      $('<div>', {text:element['result']['name']}).appendTo(document.body);
    });
  });

}); 