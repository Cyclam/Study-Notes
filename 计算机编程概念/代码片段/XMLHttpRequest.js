var xhr = new XMLHttpRequest();

xhr.open("post", "/api/article");
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      return xhr.responseText;
    }
  }
};
