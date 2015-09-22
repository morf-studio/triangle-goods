$(document).ready(function () {

    $(window).on("scroll resize", function () {
        
        var pos = $('#product-info-display').offset(); //this is the visible info container

        $('.product').each(function () {            
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                
                

                $('#product-info-display').html($(this).find('.product-info').html()); //or any other way you want to get the desc
                // the second part above is the invisible info container in each div.
                return; //break the loop
            }
        });
    
    });
    
    $(window).trigger('scroll'); // init the value

});



// var productName =
// var productLink =
// var productStore =
// var productStoreLink =

// If the ".product" containing div has passed into the viewport
// load its "h2.product-name" as a productName variable
// load its "a.product-link" as a productLink variable
// load its "p.product-store" as a productStoreWithLink variable

// then 

// wrap productName in h2 tag with productLink a tag variables
// give "a.product-link-button" an href of productLink variable

// and insert productStoreWithLink variable into "p.product-store-display"


// $("button").click(function(){
//     $("p").html("Hello <b>world</b>!");
// });