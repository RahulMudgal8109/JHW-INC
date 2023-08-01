//function to take on the top on refresh

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

    // Get the button
    let mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


    //navbar color change on scroll

    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
          $(".colorr").css("background" , "rgb(7, 5, 5)");
         
        }
    
        else{
          $(".colorr").css("background" , "transparent");  	
         
        }
      })
    })

   
   

    