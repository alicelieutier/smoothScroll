(function(){

if(!document.querySelectorAll || typeof window.pageYOffset === 'undefined') { return; }

var getTop = function(element) {
    var top = element.offsetTop;
    while (element = element.offsetParent) {
        top += element.offsetTop;
    }
    return top;
}
// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

var position = function(start, end, ellapsed, time) {
    if (ellapsed > time) return end;
    return start + (end - start) * easeInOutCubic(ellapsed / time);
}

var smoothScroll = function(el, time){
    time = time || 2000;
    var start = window.pageYOffset;
    var end = getTop(el);
    var clock = Date.now();
    var j = window.setInterval(function(){
        var ellapsed = Date.now() - clock;
        window.scroll(0, position(start, end, ellapsed, time));
        if (ellapsed > time) {
            window.clearInterval(j);
        }
    }, 10);
}
document.addEventListener("DOMContentLoaded", function () {
    var internal = document.querySelectorAll('a[href^="#"]'), a;
    for(var i=internal.length; a=internal[--i];){
        a.addEventListener("click", function(event){
            event.preventDefault();
            smoothScroll(document.getElementById(this.href.split('#').pop()), 500);
        });
    }
});

})();