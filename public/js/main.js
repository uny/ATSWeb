(function() {
  'use strict';

  var PORT = location.port;
  var BASE_URL = location.hostname + (PORT ? ':' + PORT : '');

  // AJAX
  var AJAX_ENDPOINT = 'api/v1/dogs/1';
  var AJAX_URLS = [`https://${BASE_URL}/${AJAX_ENDPOINT}`, `http://${BASE_URL}/${AJAX_ENDPOINT}`];
  var AJAX_NODE_IDS = ['https-ajax', 'http-ajax'];
  AJAX_NODE_IDS.forEach(function(element, index) {
    var node = document.getElementById(element).getElementsByTagName('td')[1];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) {
        return;
      }
      if (xhr.status == 200) {
        node.innerHTML = xhr.responseText;
      } else {
        node.innerHTML = xhr.statusText;
      }
    };
    xhr.open('GET', AJAX_URLS[index], true);
    xhr.send();
  });
})();
