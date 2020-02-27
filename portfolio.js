



// (function($) { "use strict";

$(document).ready(function() {
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//portfolio portfolio page
	
	$(".portfolio").on('click', function () {
		$("body").addClass("portfolio-on");
	});
	$(".portfolio-close").on('click', function () {
		$("body").removeClass("portfolio-on");
	});

	
	//skills portfolio page
	
	$(".skills").on('click', function () {
		$("body").addClass("skills-on");
	});
	$(".skills-close").on('click', function () {
		$("body").removeClass("skills-on");
	});

	
	//Education portfolio page
	
	$(".education").on('click', function () {
		$("body").addClass("education-on");
	});
	$(".education-close").on('click', function () {
		$("body").removeClass("education-on");
	});

	//Experience portfolio page
	
	$(".experience").on('click', function () {
		$("body").addClass("experience-on");
	});
	$(".experience-close").on('click', function () {
		$("body").removeClass("experience-on");
	});
});
		
	//Page cursors

    

	
// })(jQuery); 