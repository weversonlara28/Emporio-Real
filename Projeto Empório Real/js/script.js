$(document).ready(function()
{
    //código parallax
    $('.parallax').parallax();
    
    //Codigo tooltip
    $("a.tooltip").mouseover(function(){
        var texto = $(this).attr('data-tooltip');
        $(this).children(".text_tooltip").html(texto);
        $(this).children(".text_tooltip").css('opacity','1');
    });
    
    $("a.tooltip").mouseout(function(){
        $(this).children(".text_tooltip").css('opacity','0');
    });
    
    //Codigo Para Mostra ou Não o Menu
    $("nav").mouseover(function(){
       $(".nav-itens").addClass("nav-show");
    });
    
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");
    });

    
     //Codigo Para ajustar logo
    $(document).scroll(function(){
        var topWindow = $(window).scrollTop();
        if(topWindow > 60)
            {
                $("header img").addClass('logo_menu');
                $("[id^='menu']").addClass('sumirmenu');
                $("[id^='menu1']").removeClass('sumirmenu');
                $("header").addClass('header_fixed');
            }
        else
        {
            $("header img").removeClass('logo_menu');
            $("[id^='menu']").removeClass('sumirmenu');
            $("[id^='menu1']").addClass('sumirmenu');
            $("header").removeClass('header_fixed');
        };
        
        
    });
    
    
    
    //janela de login
        // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});

