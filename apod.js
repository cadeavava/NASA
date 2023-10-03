//API

$.ajax ({
    url:"https://api.nasa.gov/planetary/apod?api_key=zm0qVouyYudWcYLomlDJFT89oevqP5Af64rvkgcP",
    method: "GET",
    datatype: "json",
    success: function(whatyougot){
        document.getElementById('title').innerHTML=whatyougot.title;
        document.getElementById('img').src=whatyougot.url; 
        document.getElementById('cpright').innerHTML=whatyougot.copyright;
        document.getElementById('exp').innerHTML=whatyougot.explanation;
    }
})

//PARALLAX

document.addEventListener("DOMContentLoaded", function() {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
  });
   //efeito de paralaxe no elemento HTML com o ID "scene" da biblioteca Parallax