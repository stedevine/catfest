/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

/*
function toggleFn() {
  // bit hacky - it'll do.
  console.log('toggle me');
  console.log(this);
  console.log(this.src);
  src = this.src;
  tokens = this.src.split('_');
  tail = tokens[1];
  console.log(tail)
  if (tail == 'bw.jpg') {
    a = [tokens[0], 'fish.jpg'];
    src = a.join('_')
  } else {
    a = [tokens[0], 'bw.jpg'];
    src = a.join('_')
  }
  console.log(src);
  this.src = src;
  var targetEl = document.getElementById(this.value);
  console.log(targetEl);
}
*/


window.addEventListener('DOMContentLoaded', event => {

    /*
      // Add the event listener to the images of the band
      var $para = document.querySelectorAll("[value^=staff]");
      for(var i=0; i<$para.length; i++) {
        $para[i].addEventListener('click', toggleFn, false);
        console.log($para[i]);
      }
    */
    
        // Navbar shrink function
        var navbarShrink = function () {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
    
        };
    
        // Shrink the navbar
        navbarShrink();
    
        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);
    
        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 72,
            });
        };
    
        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    
    });