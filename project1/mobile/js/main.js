$(function(){
	$("#page2 .menu_list li").click(function(e){
			e.preventDefault();
			$(this).css({left : 100});
	});
	var sub_swiper=new Swiper("#sub_slider .swiper-container",{
		slidesPerView: 1.5,
		spacBetwwen: 12,
		pagination: {
			el: "#sub_slider .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: "#sub_slider .swiper-button-next",
			prevEl: "#sub_slider .swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
		},
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider .swiper-slide").length;
				$("#sub_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_swiper.activeIndex;
				currentSlider+=1;
				$("#sub_slider .num").text(currentSlider);
			}
		}
	});
	var mainSwiper=new Swiper(".mainSwiper", { 

		autoplay: { 
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});
	$(".prev").click(function(e){ 
		e.preventDefault();
		mainSwiper.slidePrev(); 
	});
	$(".next").click(function(e){ 
		e.preventDefault();
		mainSwiper.slideNext(); 
	});
	$(".play").click(function(e){ 
		e.preventDefault();
		mainSwiper.autoplay.start(); 
	});
	$(".pause").click(function(e){ 
		e.preventDefault();
		mainSwiper.autoplay.stop(); 
	});
	
});