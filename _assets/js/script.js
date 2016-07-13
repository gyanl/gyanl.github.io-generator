(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-77722386-1', 'auto');
ga('send', 'pageview');

var win = window,
    docEl = document.documentElement,
    $logo = document.getElementById('dis');
    $bg = document.getElementById('main');

    function genColor() {
        var a = "";
        for (var i = 0; i < 3; i++)
            a = a.concat(Math.floor(Math.random() * 255).toString(16));

        if (a.length < 6) {
            for (var i = 0; i < (6 - a.length); i++)
                a = "0" + a;
        }
        return "#" + a;
    }

var color = genColor();
/*
win.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   $logo.className =  sTop > 10 ? "zero2":"zero" ;
   if (sTop>0) {
       document.body.style.background =  color;
     }
   if (sTop > .5*window.innerHeight) {
     document.body.style.background =  "#900C3F"
     }

   if (sTop > 2*(window.innerHeight)) {
       document.body.style.background =  "#e74c3c"
     }


};


window.onload = init();
