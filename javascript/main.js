$('.ask').on('click',function (e) {
    e.preventDefault();

    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500)
    $(this).toggleClass('active').next().stop().slideToggle(500)
})


$('button[data-filter]').click(function () { 
    let attr = $(this).attr('data-filter');
    attr === 'all'? $('div[data-filter]').slideDown(500):$('div[data-filter]').slideUp(500);
    
    $(`div[data-filter=${attr}]`).slideDown(500)
 })


function writting(element) { 
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++
        fullText === inner? clearInterval(interval):''
    }, 200);
 }

 writting($(`.text-center p`))


 $('.read-more').on('click', function () { 
    $('.text-hidden').toggleClass('hidden');
    const x = document.querySelector('.read-more');
    x.innerHTML === 'Hidden'? x.innerHTML = 'Read More': x.innerHTML = 'Hidden'
 })

 
 $(".js-modal-show").click(function (e) { 
     e.preventDefault();
     $('.modal').fadeIn(500)
  })

  $('.modal .close').click(function (e) {
      e.preventDefault();
      $('.modal').fadeOut(500)
  })

  $('.modal').click(function (e) { 
      e.target === e.currentTarget ? $(this).fadeOut(500) : ''

   })

   $('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    zIndex:10
   })

   $(window).on('scroll',function () {
       let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()
       if (editPosition > 0) {
           $('.nav').css({
               top: editPosition + 'px'
           })
       }
       else{
           $('.nav').css({
               top: 0
           })
       }
   })



   $('.js-sroll-to-id').click(function (e) { 
       e.preventDefault();
       let attr = $(this).attr('href'),
       toel = $(attr).offset().top

       $('html, body').stop().animate({
           scrollTop: toel - $('.nav').outerHeight()
       },{
           duration: 1000
       })
    })


    $(window).on('scroll',function () { 
        if ($(window).scrollTop() > 300) {
            $('.js-btn-top').css({
                bottom: `5%`
            })
        }
        else{
            $('.js-btn-top').css({
                bottom: `-100%`
            })
        }
     })


$('.js-btn-top').click(function () { 
    $('html,body').animate({
        scrollTop:0
    },{
        duration:1000
    })
})



$('.modal-footer .btn').click(function () { 
    $('.modal').fadeOut(500)
})