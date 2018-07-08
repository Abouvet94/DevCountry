// //Variables
 var menu = document.getElementById('menu');
 var body = document.getElementById('main');
 var menuli = '#'+menu.id+" li";

 //Function Click Menu
 $(menuli).click(function(){  
     var body_enfant = $("#main").children(); 
     var id = "#"+$(this).attr('id')+"_pages"; 
     console.log(id);
     if (body_enfant){ body_enfant.hide();}
     $('#main').append(ShowDiv(id));
 })

 //Function Div (Hide + Show)
function HideDiv(id){ setTimeout(function(){ $(id).hide();}, 2500);}
function ShowDiv(id){ $(id).show(); }


var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
});

var fixed = document.querySelector('.fixed-header');
    slideout.on('translate', function(translated) {
    fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeopen', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(256px)';
});

slideout.on('beforeclose', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function () {
    fixed.style.transition = '';
});

slideout.on('close', function () {
    fixed.style.transition = '';
});

/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
    this.classList.toggle("is-active");
    }, false);
});
}