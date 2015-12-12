
// Have loaded jQuery - a JS library

$(document).ready(function() {



    $('#aSpecificButton').click(function(event)
    {
      event.preventDefault();
      if ($('#aSpecificParagraph').hasClass('highlight'))
      {
      	   $('#aSpecificParagraph').removeClass('highlight')
      }
       else
      {
		        $('#aSpecificParagraph').addClass('highlight');
      };
    	
    });
    

    
}); // END of the Document ready func.
