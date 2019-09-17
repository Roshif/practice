
		window.addEventListener('scroll', function(){
		  var target = document.querySelector('.parallax');
		  var scrolled = window.pageYOffset;
		  var rate = scrolled * 0.4;
		  target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';  
		})
		    $(document).ready(function(){
		  // Add scrollspy to <body>
		  $('body').scrollspy({target: ".navbar", offset: 50});   
		
		  // Add smooth scrolling on all links inside the navbar
		  $(".smooth-scroll a").on('click', function(event) {
		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();
		
		      // Store hash
		      var hash = this.hash;
		
		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      $('html, body').animate({
		        scrollTop: $(hash).offset().top
		      }, 500, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        window.location.hash = hash;
		      });
		    }  // End if
		  });
		});
		
		function openModal() {
		    document.getElementById("myModal").style.display = "block";
		  }
		  
		  function closeModal() {
		    document.getElementById("myModal").style.display = "none";
		  }
		  
		  var slideIndex = 1;
		  showSlides(slideIndex);
		  
		  function plusSlides(n) {
		    showSlides(slideIndex += n);
		  }
		  
		  function currentSlide(n) {
		    showSlides(slideIndex = n);
		  }
		  
		  function showSlides(n) {
		    var i;
		    var slides = document.getElementsByClassName("mySlides");
		    var dots = document.getElementsByClassName("demo");
		    var captionText = document.getElementById("caption");
		    if (n > slides.length) {slideIndex = 1}
		    if (n < 1) {slideIndex = slides.length}
		    for (i = 0; i < slides.length; i++) {
		        slides[i].style.display = "none";
		    }
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");
		    }
		    slides[slideIndex-1].style.display = "block";
		    dots[slideIndex-1].className += " active";
		    captionText.innerHTML = dots[slideIndex-1].alt;
		  }
