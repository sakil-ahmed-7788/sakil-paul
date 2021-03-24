
//menu
/*
$(document).ready(function() {

    $(".open-menu").click(function(){
    
        $(".menu-container").show()
    })
    

    $(".close-menu").click(function(){
    
        $(".menu-container").hide()
    })

    
    $(".menu-container").click(function(){
    
        $(this).hide()
    })
    

    $(".menu-container ul li a").click(function(){
    
        $(".menu-container").hide()
    })
    
});


/*
onclick="document.getElementById('demo').style.fontSize='35px'"

//smooth scroll
$('.next-section a, .menu-container ul li a').on('click' , function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});
//mixitup
var mixer=mixitup('.work-grid');
//wow
new WOW({
    mobile:  false,
}).init();
*/
$(document).ready(function() {

$(".open-menu").click(function(){

    $(".menu-container").show()
})

$(".close-menu").click(function(){

    $(".menu-container").hide()
})

$(".menu-container").click(function(){

    $(this).hide()
})

$(".menu-container ul li a").click(function(){

    $(".menu-container").hide()
})

})
//smooth scroll
$('.next-section a, .menu-container ul li a').on('click' , function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});
//mixitup
var mixer=mixitup('.work-grid');
//wow
new WOW({
    mobile:  false,
}).init();


/*var age="25";
var isMarid= true;
var job;
console.log( firstName);
alert (firstName); */




/* typeportion:-
var firstName, age, job, isMarid;
firstName='sakil';
age=25;
job="web developer";
isMaried=true;
console.log(firstName +' is a '+age +' year old ' +job+','+ ' is he maried? '+isMaried ); */



/*  mettation:-
job="web designer";
alert(firstName +' is a '+age +' year old ' +job+','+ ' is he maried? '+isMaried ); */



/*
var lastName = prompt('what is the last name');
console.log(firstName + ' ' + lastName); */




/*operator: math & logical:-
var ageRahim, ageKarim;
ageRahim=20;
ageKarim=30;
console.log(ageRahim * ageKarim);
var karimOlder = ageRahim > ageKarim;
console.log(karimOlder); */


//$('h1').hide();



/*
$(document).ready(function(){
    $('button').click(function(){
        $('h1').hide(5000);
    });

});
*/



/*$('button').click(function(){
    $('h1').show(1000);
});  */


/*$('button').click(function(){
    $('h1').toggle(1000);
});  */


/*$('button').on('click',function(){

    $('h1').show();
});  */


/*$('button').on('mouseenter',function(){

    $('h1').show();
});  */
/*$('button').on('mouseleave',function(){

    $('h1').show();
});  */


/*$('button').hover('mouseleave',function(){

    $('h1').show();
});  */


/*$('button').on('focus',function(){

    $('input').css({
        
    });
});  */


/*$('button').click(function(){

    $('p').fadeIn(3000);
});  */



/*$('button').click(function(){

    $('p').fadeOut(2000);
});  */
/*$('button').click(function(){

    $('p').fadetoggle(2000);
});  */


//animate:-