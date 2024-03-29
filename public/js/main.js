(function() {
  'use strict';

  var PORT = location.port;
  var BASE_URL = location.hostname + (PORT ? ':' + PORT : '');

  function getLastTd(id) {
    return document.getElementById(id).getElementsByTagName('td')[1];
  }

  // AJAX
  var AJAX_ENDPOINT = 'api/v1/dogs/1';
  var AJAX_URLS = [`https://${BASE_URL}/${AJAX_ENDPOINT}`, `http://${BASE_URL}/${AJAX_ENDPOINT}`];
  var AJAX_NODE_IDS = ['https-ajax', 'http-ajax'];
  AJAX_NODE_IDS.forEach(function(element, index) {
    var node = getLastTd(element);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) {
        return;
      }
      node.innerHTML = xhr.responseText;
    };
    xhr.open('GET', AJAX_URLS[index], true);
    xhr.send();
  });

  // IMG
  var IMG_ENDPOINT = 'img/swift.png';
  var IMG_SRCS = [`https://${BASE_URL}/${IMG_ENDPOINT}`, `http://${BASE_URL}/${IMG_ENDPOINT}`];
  var IMG_NODE_IDS = ['https-img', 'http-img'];
  IMG_NODE_IDS.forEach(function(element, index) {
    var node = getLastTd(element);
    node.innerHTML = `<img alt="Swift" src="${IMG_SRCS[index]}">`;
  });

  // A
  var A_HREFS = [`https://${BASE_URL}`, `http://${BASE_URL}`];
  var A_NODE_IDS = ['https-a', 'http-a'];
  A_NODE_IDS.forEach(function(element, index) {
    var node = getLastTd(element);
    node.innerHTML = `<a href="${A_HREFS[index]}">LINK</a>`;
  });

  // CSS
  var CSS_HREFS = [`https://${BASE_URL}/css/https.css`, `http://${BASE_URL}/css/http.css`];
  CSS_HREFS.forEach(function(element) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = element;
    document.body.appendChild(link);
  });

  // JavaScript
  var JS_SRCS = [`https://${BASE_URL}/js/https.js`, `http://${BASE_URL}/js/http.js`];
  JS_SRCS.forEach(function(element) {
    var script = document.createElement('script');
    script.src = element;
    document.body.appendChild(script);
  });
})();
