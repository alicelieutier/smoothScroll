smoothScroll
============

A teeny tiny, standard compliant, smooth scroll script with ease-in-out effect and no jQuery (or any other dependancy, FWIW).

How to use
-
Just include smoothscroll inside your page, like this:

    <script type="text/javascript" src="path/to/smoothscroll.min.js"></script>

Of course, if you want some personalisation, you should work with the unminified version of the script. 

smoothscroll.js
-
This script will search for internal links and will add a smooth scrolling effect to navigate to anchors.
This works in Firefox, Chrome, Opera and Safari.
It should work on IE9+ but I do not have one here to test.

Unsupported browsers would just use the normal internal link behaviour.

There is an ease-in-out type timing function. You can change it quite easily in the code. Here is where I found the one I use:
- http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/

You can also change the total time of a scroll, which is 500ms by default.

Example
-
The example.html file is basically the script applied to a w3c page. I just changed the style so the table of content is fixed to the left.

Check out the result. Wouldn't that be great if all w3c specs where that easy to navigate in?

Similar scripts
-
While I was looking for a name for this script, I found these sites. If this script is not what you need, you might have more luck there:
- http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
- http://www.kryogenix.org/code/browser/smoothscroll (best cross browser compatibility)

Licence
-
This Library is release under the MIT licence.

