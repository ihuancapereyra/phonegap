


// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;





// Add view


  $$(document).on('deviceready', function() {
    
    console.log("Device is ready!");
    
  });





var mainView = myApp.addView('.view-main',{
  dynamicNavbar: true

});




myApp.sizeNavbars(".view-main");






$$('.hide-toolbar').on('click', function () {
    mainView.hideToolbar();
});
 
$$('.show-toolbar').on('click', function () {
    mainView.showToolbar();
});


// Handle Cordova Device Ready Event
$$('.hide-navbar').on('click', function () {
    app.navbar.hide('.navbar');
  });
  $$('.show-navbar').on('click', function () {
    app.navbar.show('.navbar');
  });


myApp.onPageInit("index",function(page){
  mainView.hideNavbar();
})







// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('presentacion', function (page) {

    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        betspeed: 400,
        spaceBetween:0
      });
    
});



function ocultar(){
  var test=document.getElementById("ocult");
  test.style.display="block";
}


myApp.onPageInit("inicio", function(page){

  
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
 
  var calendarInline = myApp.calendar({
      container: '#calendar-inline-container',
      value: [new Date()],
      weekHeader: false,
      toolbarTemplate: 
          '<div class="toolbar calendar-custom-toolbar">' +
              '<div class="toolbar-inner">' +
                  '<div class="left">' +
                      '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                  '</div>' +
                  '<div class="center"></div>' +
                  '<div class="right">' +
                      '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                  '</div>' +
              '</div>' +
          '</div>',
      onOpen: function (p) {
          $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
          $$('.calendar-custom-toolbar .left .link').on('click', function () {
              calendarInline.prevMonth();
          });
          $$('.calendar-custom-toolbar .right .link').on('click', function () {
              calendarInline.nextMonth();
          });
      },
      onMonthYearChangeStart: function (p) {
          $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
      }
  });     

});
// --------------------------------------------------------------

myApp.onPageInit("inicio",function(page){
 
var loading = false;
 
// Last loaded index
var lastIndex = $$('.list-block li').length;
 
// Max items to load
var maxItems = 60;
 
// Append items per load
var itemsPerLoad = 20;
 
// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    loading = false;
 
    if (lastIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      myApp.detachInfiniteScroll($$('.infinite-scroll'));
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;
    }
 
    // Generate new items HTML
    var html = '';
    for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
      html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
    }
 
    // Append new items
    $$('.list-block ul').append(html);
 
    // Update last loaded index
    lastIndex = $$('.list-block li').length;
  }, 1000);
});  

});

// ---------------------------------------------------------------------------------
// Funcion cambiar tema de la app

var boton1=document.getElementById("boton_cambio");

boton1.addEventListener("click",()=>{
  var condicion="layout-dark";
  var mybody=document.getElementsByTagName("body");
  if(mybody[0].classList.contains("layout-dark")){
    mybody[0].classList.remove("layout-dark");
    mybody[0].classList.add("theme-red");
  }
  else if(mybody[0].classList.contains("theme-red")){
    mybody[0].classList.remove("theme-red");
    mybody[0].classList.add("layout-dark");
  }

});

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

// --------------------------------------------------------------------------------------

// 

// myApp.onPageInit("seguimiento",function(){

  
 


//   let myPhotoBrowserPopupDark = myApp.photoBrowser({
//     photos : [
//         {
//             html: '<iframe src="https://firebasestorage.googleapis.com/v0/b/ruttic-20670.appspot.com/o/sentadillas.mp4?alt=media&token=f7397ae6-6406-4ebc-864c-45589d62988d" frameborder="0" allowfullscreen></iframe>',
//             caption: 'EJEMPLO'
//         }
//     ],
//     theme: 'dark',
//     type: 'standalone',
    
//   });
//   $$('.pb-standalone-video').on('click', function () {
//     myPhotoBrowserPopupDark.open();
//   });

  
// });


