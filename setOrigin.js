var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://www.youtube.com/watch?v=i0wxon609f8", true);
xhr.setRequestHeader("Origin", 'https://www.youtube.com');
xhttp.send();
