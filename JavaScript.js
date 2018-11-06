$( document ).ready(function() {
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
	  $('#slideshow > div:first')
	    .fadeOut(2000)
	    .next()
	    .fadeIn(2000)
	    .end()
	    .appendTo('#slideshow');
	}, 5000);

	// $(document).ready(function(){ 
	// var song = new Audio("http://media.falundafa.org/media1/media/dafa/music/48k/JiShi.mp3")
	// song.play()

	// })

	// var show = $("#lightbox").on("click",function(){
	// 	show.style.display = "block"
	// })

	var click = $("#clickone").on("click",function(){
		image1.style.display = "block"
	})
	var click = $("#clicktwo").on("click",function(){
		image2.style.display = "block"
	})
	var click = $("#clickthree").on("click",function(){
		image3.style.display = "block"
	})
	var click = $("#clickfour").on("click",function(){
		image4.style.display = "block"
	})
	var click = $("#clickfive").on("click",function(){
		image5.style.display = "block"
	})
	var click = $("#clicksix").on("click",function(){
		image6.style.display = "block"
	})
	var click = $("#clickseven").on("click",function(){
		image7.style.display = "block"
	})
	var click = $("#clickeight").on("click",function(){
		image8.style.display = "block"
	})

	var closeX = $(".close").on("click",function(){
		image1.style.display = "none"
		image2.style.display = "none"
		image3.style.display = "none"
		image4.style.display = "none"
		image5.style.display = "none"
		image6.style.display = "none"
		image7.style.display = "none"
		image8.style.display = "none"
	})
});

