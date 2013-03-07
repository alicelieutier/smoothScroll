smoothScroll
============

A teeny tiny, standard compliant, smooth scroll script with ease-in-out effect and no jQuery (or any other dependancy, FWIW).

How to use
-
Just include smoothscroll inside your page, like this:

    <script src="https://raw.github.com/alicelieutier/smoothScroll/master/smoothscroll.js"></script>

You're done!
 
Of course, if you want some personalisation, or you do not want to be affected by any commit I may make on this file, you should just download it and include it locally to your project. 

smoothscroll.js
-
This script will search for internal links and will add a smooth scrolling effect to navigate to anchors.
This works in Firefox, Chrome, Opera and Safari.
It should work on IE9+ but I do not have one here to test.

Unsupported browsers would just use the normal internal link behaviour.

There is an easing function. You can change it quite easily in the code. Here is where I found the one I use:
- http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/

Example
-
The example.html file is the script applied to a w3c page. I just changed the style so the table of content is fixed to the left, and added the script.
Check out the result. Wouldn't that be great?

Similar scripts
-
While I was looking for a name for this script, I found these sites. If this script is not what you need, you might have more luck there:
- http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
- http://www.kryogenix.org/code/browser/smoothscroll (best cross browser compatibility)

Licence
-
This Library is release under the MIT licence.

