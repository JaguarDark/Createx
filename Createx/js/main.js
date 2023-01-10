

$(function () {
  var mixer = mixitup ('.directions__list');
    $('.directions__filter-btn').on('click', function () {
      $('.directions__filter-btn').removeClass('directions__filter-btn--active')
      $(this).addClass('directions__filter-btn--active');
    })

    $('.team__slider').slick ({
      waitForAnimate: false,
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      appendArrows: $('.team__slider-arrows'),
    })
    $('.team__slider-prev').on('click', function (e){e.preventDefault()
      $('.team__slider').slick('slickPrev')})
    $('.team__slider-next').on('click', function (e) {e.preventDefault()
      $('.team__slider').slick('slickNext')})
    
    $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
    })
    $('.testimonials__prev').on('click', function (e){e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')})
    $('.testimonials__next').on('click', function (e) {e.preventDefault()
      $('.testimonials__slider').slick('slickNext')})

/*     $('.program__acc-link').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideToggle()
    }) */


    $('.program__acc-link').on('click', function (e) {
      e.preventDefault()

      /* ниже не аккардион */
      /* $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).toggleClass('program__acc-link--active')
        $(this).cildren('.program__acc-text').slideDown() */



        /* по умолчанию при открытии сайта весь аккардион свёрнут */
      if ($(this).hasClass('program__acc-link--active')) /* ------------------------------1) но если что-либо (х) уже имеет класс актив (то есть на это (х) уже нажато и это уже активиравано) и мы нажмаем на это (х) еще раз*/
      {                                                  /* ------------------------------тогда */
        $(this).removeClass('program__acc-link--active') /*-------------------------------2) класс у этого (х) (на то, что нажато и что активиравано) удаляется  */
        $(this).children('.program__acc-text').slideUp() /*-------------------------------3) а текст скрывается*/
      } 
        else { /*-------------------------------------------------------------------------иначе */
        $('.program__acc-link').removeClass('program__acc-link--active')/*----------------1) остальные случаи (то есть если нажимаем на что то другое) (у), то тогда у того (х), на что мы нажали в предыдущий раз удаляется актив */
        $('.program__acc-text').slideUp() /*----------------------------------------------2) и скрывается текст*/
        $(this).addClass('program__acc-link--active') /*----------------------------------3) но у того, на что мы нажали сейчас (у) добавляется актив  */
        $(this).children('.program__acc-text').slideDown() /*-----------------------------4) и разворачивается текст  */
      }
    })
    
/*     $(window).on('scroll', function () {
    }) */
    
    setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) { 
        /* если скролл большенуля и хедертоп имеет класс хедертопопен (и это не правда, то есть наоборот не имеет), тогда на бургер накидываетсябургерфалоу */
          $('.burger').addClass('burger--follow')
        } else {
          /* в остальных случаях на бургер не накидывается бургерфаллоу (случай когда скролл = 0 и когда у хедер топ нет класса хедер опен) */
          $('.burger').removeClass('burger--follow')
        }        
      },0);
      
    $('.burger, .overlay').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('burger--actual')
    })

        /* по умолчанию при открытии сайта окно с меню свернуто */
      
        




  });