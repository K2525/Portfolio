$(function(){
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf;
	var categoryFlag=false;

	$(".controller li").eq(pageN).addClass("active");
	$("#header .menu li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#footer").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}
		// console.log("pageN : "+pageN);

		$(".controller li").removeClass("active");
		$(".controller li").eq(pageN).addClass("active");
		$(".menu li").removeClass("active");
		$(".menu li").eq(pageN).addClass("active");

		if(pageN != 0){
			$(".controller").addClass("dark");
			$(".menu").addClass("dark");
			$(".fix_logo img").attr("src", "images/logo_dakn.png");
			$(".fix_tab").addClass("dark");
			$(".fix_copy").addClass("dark");
			$(".fix_contact").addClass("dark");
			$(".checkout img").attr("src", "images/arrow_dakn.png");

		}
		else{
			$(".controller").removeClass("dark");
			$(".menu").removeClass("dark");
			$(".fix_logo img").attr("src", "images/logo.png");
			$(".fix_tab").removeClass("dark");
			$(".fix_copy").removeClass("dark");
			$(".fix_contact").removeClass("dark");
			$(".checkout img").attr("src", "images/arrow.png");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#start").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$(".fix_tab").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active")){
			$("body").removeClass("fixed");
			$(this).removeClass("active");
			$(".controller").removeClass("active");
		}
		else{
			$("body").addClass("fixed");
			$(this).addClass("active");
			$(".controller").addClass("active");
		}
	});

	/*
	$(".fix_tab").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$(this).addClass("active");
		$(".floating_menu").addClass("active");
	});
	*/

	$(".menu li, .controller li").click(function(e){
		e.preventDefault();
		var href=$(this).find("a").attr("href");
		targetY=$(href).offset().top;
		$("html").animate({"scrollTop":targetY}, 300);
	});

	var portfolioN=0;

	$(".project:first").addClass("active");

	$(".project .title").click(function(e){
		e.preventDefault();
		var portfolio=$(this).parents(".project");
		// console.log(portfolioN, portfolio.index());

		if(portfolioN != portfolio.index()){
			portfolioN=portfolio.index();
			$(".project").removeClass("active");
			portfolio.addClass("active");

			var portfolioY=$(this).offset().top-60;
			$("html").animate({scrollTop:portfolioY}, 800);
		}
	});

	var videoUrl=["video0","video1"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");
	video.muted=true;
	video.play();

	function videoDimmed(){
		$(".media video").hide().css({opacity:0});

		setTimeout(function(){
			$(".media video").show().animate({opacity:1.5}, 300);
		}, 500);
	}

	videoDimmed();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();
		videoDimmed();
	});
	$(".arrow .left").click(function(e){
		e.preventDefault();

		if(videoN > 0){
			videoN-=1;
		}
		else{
			videoN=videoTotal;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		videoDimmed();
		video.play();
	});
	$(".arrow .right").click(function(e){
		e.preventDefault();

		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		videoDimmed();
		video.play();
	});

	function mobileLink(){
		if(isMobile){
			$("a.project1").attr({href: "project1/mobile/index.html"});
		}
		else{
			$("a.project1 ").attr({href: "project1/pc/index.html"});
		}

		$("a.project2").attr({href: "project2/index.html"});
	}

	mobileLink();
});