var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://hookb.in/VGP17oagG0TE22bwzRXn", true);
xhr.setRequestHeader("Origin", 'maximum.blog');
xhttp.send();
