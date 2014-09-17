


var backEventListener = null;

var unregister = function() {
    if ( backEventListener !== null ) {
       document.removeEventListener( 'tizenhwkey', backEventListener );
       backEventListener = null;
     window.tizen.application.getCurrentApplication().exit();
 }
}
   /* document.addListener('tizenhwkey', function(button) {
    	switch(e.keyName)
    	        {
    	            case 'back':
    	            	$.mobile.back();
    	                switch($.mobile.activePage)
    	                {
    	                    case 'one': // use your first page or another page where the application should close if the use press back
    	                    	$.mobile.back();
    	                    		tizen.application.getCurrentApplication().exit();
    	                        break;
    	                    default: // if no case available, the back button returns back to previous page
    	                        $.mobile.back();
    	                }
    	                break;
    	            case 'menu':
    	                // TODO: write a code for pressing menu button
    	                break;
    	        }
    	});*/
    $(window).on("tizenhwkey", function(ev) 
    		{
    		   if (ev.originalEvent.keyName === "back") 
    		   {
    			   
    			   window.history.back()
    		      /* Call window.history.back() to go to previous browser window */
    		      /* or add script to add another behavior */
    		   }
    		})
    
//Initialize function
var init = function () {
    // register once
    if ( backEventListener !== null ) {
        return;
    }
    // TODO:: Do your initialization job
    console.log("init() called");
  
   var backEvent = function(e) {
       if ( e.keyName == "back" ) {
          try {
                if ( $.mobile.urlHistory.activeIndex <= 0 ) {
                    // if first page, terminate app
                   unregister();
                } else {
                    // move previous page
                    $.mobile.urlHistory.activeIndex -= 1;
                    $.mobile.urlHistory.clearForward();
                    window.history.back();
              }
           } catch( ex ) {
                unregister();
           }
        }
    }
    
    // add eventListener for tizenhwkey (Back Button)
    document.addEventListener( 'tizenhwkey', backEvent );
    backEventListener = backEvent;
};

$(document).bind( 'pageinit', init );
$(document).unload( unregister );