var slideTicker = 0;
$(document).ready(function(){
	var id = '0';
	var isMoving = false;
	//give content width here
	var slideSize = 900;
	
	//slides the slider
	function slideTheSlide ( event ) {
		var clickedId = $(this).attr('id');
		var imageNum = parseInt(clickedId, 10);
		event.preventDefault();
		//console.log('DSAJLF');
		$('.outerBox').animate({
			marginLeft: '-' + (slideSize * imageNum) + 'px' 
		}, 1000);
	}
	//loads the initial slider
		$('.contentContainer').load('slider/frags/bwSlide.html', function(){
			
			numPics = $('.imageSelect').children().length;
			//console.log(numPics);
			numPhoto = $('.outerBox').children().length;
			$('.outerBox').css('width', (numPhoto*slideSize) + 'px');
			if (numPics <= 5) {$('.miniSelect').css('width', (numPics*104) + 'px');}
			else {$('.miniSelect').css('width', (5*104) + 'px');}
			$('.selector').on('click', slideTheSlide);
			$('.currentIMG').removeClass('currentIMG');
			$('#bw').addClass('currentIMG');
			//readds event listener
			$('.team').on('click', loadFrag);
			//readds ids
			$('.imageSelect').children().each(function(index) 
			{
				$('.imageSelect a:nth-child(' + (index+1) + ')').attr('id', index);
			});
		});
	//function which loads slider contents
	function loadFrag () {
		var currentClick = $(this).attr('id');
		$('.contentContainer').load('slider/frags/' + currentClick + 'Slide.html', function(){
			numPics = $('.imageSelect').children().length;
			numPhoto = $('.outerBox').children().length;
			$('.outerBox').css('width', (numPhoto*slideSize) + 'px');
			if (numPics <= 5) {$('.miniSelect').css('width', (numPics*104) + 'px');}
			else {loadMiniSlide();}
			$('.selector').on('click', slideTheSlide);
			$('.currentIMG').removeClass('currentIMG');
			$('#'+ currentClick).addClass('currentIMG');
			//readds event listener
			$('.team').on('click', loadFrag);
			//adds id
			$('.imageSelect').children().each(function(index) 
			{
				$('.imageSelect a:nth-child(' + (index+1) + ')').attr('id', index);
			});
		});
	}
	
	$('.selector').on('click', slideTheSlide);
	//adds initial event listener
	$('.team').on('click', loadFrag);
	
	//pictureSelect mover
	function loadMiniSlide(){
		$('.miniSelect').css('width', (5*104) + 'px');
		numPics = $('.imageSelect').children().length;
		$('.imageSelect').css('width', (numPics*104) + 'px');
		//adds event listener for arrowR
		$('#arrowR').on('click', slideTheMiniSlideR);
		$('#arrowL').on('click', slideTheMiniSlideR);
	}
	function slideTheMiniSlideR( event ){
		numPics = $('.imageSelect').children().length;
		//var slideAmount = numPics - 5; 
		//console.log(slideAmount + ', ' + $('.imageSelect').css('marginLeft'));
		//if we are sliding right
		if($(this).attr('id') == "arrowR"){
			if (slideTicker == (numPics - 5)){
			//if the slide can't go right anymore
				$('.imageSelect').animate({marginLeft: '-=5'}, 150, function(){
					//function upon completion to finish the slide
					$('.imageSelect').animate({
						marginLeft: '+=5' 
					}, 150);
					});
			}
			else{
			//if the slide CAN move
				slideTicker = slideTicker + 1;
				$('.imageSelect').animate({marginLeft: '+=5'}, 150, function(){
					//function upon completion to finish the slide
					$('.imageSelect').animate({
						marginLeft: '-=109' 
					}, 450);
					});
			}
		}
		//if we are sliding left
		else	{
			if (slideTicker == 0){
			//if the slide can't go left anymore
				$('.imageSelect').animate({marginLeft: '+=5'}, 150, function(){
					//function upon completion to finish the slide
					$('.imageSelect').animate({
						marginLeft: '-=5' 
					}, 150);
					});
			}
			else{
			//if the slide CAN move
				slideTicker = slideTicker - 1;
				$('.imageSelect').animate({marginLeft: '-=5'}, 150, function(){
					//function upon completion to finish the slide
					$('.imageSelect').animate({
						marginLeft: '+=109' 
					}, 450);
					});
			}
		
		}		
	}
	

});
