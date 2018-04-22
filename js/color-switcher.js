/********************************************************
 *
 * Custom scripts demo background & colour switcher
 *
 *******************************************************/
$(document).ready(function() {
  // Background & colour switcher
  // =============================
  var defaultColour = 'orange';
  
  //make current background active in switcher
  if ($('.switcher a.background').size() > 0) {
	  
    var bgActive = $('#background-wrapper').attr('class');
	console.log(bgActive);
    $('.switcher a.background').removeClass('active');
    $('.switcher a.'+ bgActive).addClass('active');
	console.log(bgActive);
  }
  
 ///background & colour switch
  $('.switcher a').click(function() {
    var c = $(this).attr('href').replace('#','');
    console.log(c);
    //colours
    if ($(this).hasClass('colour')) {
      if (c == 'blue') {
        //$('#colour-scheme').attr('href','css/colour-'+ c +'.css');
		$('.header-hidden').css('background-color',"blue");
      }
	  
	  else if(c == 'green')
		   {
        //$('#colour-scheme').attr('href','css/colour-'+ c +'.css');
		$('.header-hidden').css('background-color',"green");
      }
	  
	  
	  else if(c == 'lavender')
		   {
        //$('#colour-scheme').attr('href','css/colour-'+ c +'.css');
		$('#background-wrapper').css('background-color',"lavender");
      }
		  
	  /*
	  
      else {
        $('#colour-scheme').attr('href', '#');
      }*/
      
      $('.switcher a.colour').removeClass('active');
    }
    
    //backgrounds
    if ($(this).hasClass('background')) {
		
	  $('#background-wrapper').removeClass();
      $('#background-wrapper').addClass(c);
      $('.switcher a.background').removeClass('active');
    }
    
    $('.switcher a.'+ c).addClass('active');
  });
  
  
  
});