$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");

    if($(window).width() < 992) {
        $(".video-section video").prop('muted', true);
        $('#myVideo')[0].play();
        $(".video-section .btn-volume").removeClass('active');
    }
});

$(document).ready(function() {
    console.log("script.js Ready");

    // JS fullpage
    if($(window).width() > 991 && $('#fullpage').length > 0) {
        $('#fullpage').fullpage({
            sectionSelector: '.section-full',
            anchors: ['home', 'gameplay', 'video', 'nfts-item', 'theta-coin', 'theta-gem', 'team', 'roadmap', 'partner'],
            licenseKey: '',
            autoScrolling:true,
            navigation:true,
            navigationTooltips: ['Home', 'Gameplay', 'Video', 'Nfts item', 'Theta Coin', 'Theta Gem', 'Team', 'Roadmap', 'Partner', 'Footer'],
            navigationPosition: 'left',
            menu: '#menu-fullpage',
            scrollHorizontally: true,
            verticalCentered: true,

            onLeave: function(index, nextIndex, direction){
                console.log('anchor:' , origin);
                var leavingSection = $(this);
                
                if(direction =='up'){
                    $('body').addClass('fixed');
                }
                if(direction =='down'){
                    $('body').removeClass('fixed');
                }

                //after leaving section 1
                // if(index == 1 && direction =='down'){
                //     document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.2)";
                //     $(".logo a").css("color", "#ec008c");
                //     $(".box-shadow-menu").css("background-color", "#ec008c");
                //     $(".box-shadow-menu").css("box-shadow", "0 0.37em 0 0 #ec008c, 0 0.73em 0 0 #ec008c");       
                // }
                
                $('.section-full').find('.animated').removeClass('go');
            },

            afterLoad: function(index, nextIndex, direction){
                console.log('origin', origin);
                console.log('index', index);
                console.log('nextIndex', nextIndex);

                $('.section-full').find('.animated').addClass('go');

                $('#bgvid')[0].play();
                // $('#myVideo')[0].play();
                // if(origin.anchor == 'video'){
                //     $('#myVideo')[0].pause();
                // }

                if($('body').hasClass('fp-viewing-video')) {
                    $('#myVideo')[0].play();
                } else {
                    $('#myVideo')[0].pause();
                }
                
                // if($('.about-section').hasClass('active')) {
                //     $('.header').addClass('fixed');
                // } else {
                //     $('.header').removeClass('fixed');
                // }
            }
        });
    }
    
    $(".scroll-to-target[href^='#']").on("click", function(scroll_to_target) {
        scroll_to_target.preventDefault();
        var a = this.hash,
            i = $(a);
        $("html, body").stop().animate({
            scrollTop: i.offset().top
        }, 1500, "swing", function() {})
    })

    // JS Menu mobile
    function closeMenu() {
        $('.y-mobile-menu').removeClass('show');
        $('.overlay-menu').removeClass('active');
    }
    $(".has-submenu > .btn-toggle-sub").on("click", function(e){
        var parentli = $(this).closest('li');
        if(parentli.hasClass('opened')) {
            parentli.removeClass('opened');
            parentli.find('> ul.sub-menu').slideUp(400);
        } else {
            parentli.addClass('opened');
            parentli.find('> ul.sub-menu').slideDown(400);
        }
        parentli.siblings('li').removeClass('opened');
        parentli.siblings('li').find('.has-submenu.opened').removeClass('opened');
        parentli.siblings('li').find('ul:visible').slideUp();
    })
    $('.btn-menu-mobile').on("click", function(){
        $('.overlay-menu').toggleClass("active");
        $(".y-mobile-menu").toggleClass("show");
        return false;
    })
    $('.overlay-menu, .m-menu-close').on("click", function(){
        closeMenu();
    })
    $(".y-mobile-menu ul li a[href^='#']").on("click", function(scroll_to_target) {
        scroll_to_target.preventDefault();
        var a = this.hash,
            i = $(a);
        $("html, body").stop().animate({
            scrollTop: i.offset().top - 69
        }, 800, "swing", function() {})

        $('.m-menu-close').trigger('click');
    })

    // Video section
    // Get the video
    var video = document.getElementById("myVideo");

    // Get the button
    var btn = document.getElementById("myBtn");

    // Pause and play the video, and change the button text
    function myFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";
        }
    }

    // Gameplay Slider
    if($('.js-gameplay-slider').length >0) {
        $('.js-gameplay-slider').owlCarousel({
            // animateOut: 'fadeOut',
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 4000,
            // autoplaySpeed: 2000,
            // nestedItemSelector: 'item-gall',
            lazyLoad: true,
            margin: 0,
            responsiveClass:true,
            items: 1,
            dots: true,
            navText : ["<img src='/poo-arena/assets/images/mutual/btn_prev.png' />", 
                        "<img src='/poo-arena/assets/images/mutual/btn_next.png' />"],
            rewindNav : true,
            nav: true,
            responsive : {
    		    // breakpoint from 0 up
    		    0 : {
    		       items: 1,
    		    },
    		    480 : {
    		        items: 1,
    		    },
    		    768 : {
    		        items: 1,
    		    },
    		    1200 : {
    		        items: 1,
    		    }
    		}
        })
    }

    if($('.js-nfts-slider').length >0) {
        $('.js-nfts-slider').owlCarousel({
            // animateOut: 'fadeOut',
            loop: true,
            autoplay: true,
            // autoplayTimeout: 4000,
            lazyLoad: true,
            margin: 40,
            responsiveClass:true,
            items: 6,
            dots: true,
            navText : ["", ""],
            rewindNav : true,
            nav: true,
            responsive : {
    		    // breakpoint from 0 up
    		    0 : {
    		       items: 2,
                   margin: 30,
    		    },
    		    480 : {
    		        items: 2,
    		    },
    		    768 : {
    		        items: 3,
    		    },
                992 : {
    		        items: 4,
    		    },
    		    1200 : {
    		        items: 6,
    		    },
    		    // 1400 : {
    		    //     items: 7,
    		    // }
    		}
        })
    }

    if($('.js-team-slider').length >0) {
        $('.js-team-slider').owlCarousel({
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 4000,
            // margin: 35,
            responsiveClass:true,
            items: 5,
            dots: true,
            navText : ["<img src='/poo-arena/assets/images/mutual/btn_prev.png' />", 
                        "<img src='/poo-arena/assets/images/mutual/btn_next.png' />"],
            rewindNav : true,
            nav: true,
            responsive : {
    		    // breakpoint from 0 up
    		    0 : {
    		       items: 1,
    		    },
    		    480 : {
    		        items: 2,
    		    },
    		    768 : {
    		        items: 2,
    		    },
                992 : {
    		        items: 3,
    		    },
    		    // 1200 : {
    		    //     items: 3,
    		    // },
    		}
        })
    }

    $(".video-section .btn-volume").click( function (){
        // $(this).toggleClass('active');
        if( $(".video-section video").prop('muted') ) {
            $(".video-section video").prop('muted', false);
            $(this).addClass('active');
        } else {
            $(".video-section video").prop('muted', true);
            $(this).removeClass('active');
        }
    });

    $('#bgvid')[0].play();
    
});

$(document).on( 'scroll', function(){
    if($(window).width() < 992) {
        var my_video = $('#myVideo');
        if(!$('.video-section .box-video').hasClass('go')) {
            $(".video-section video").prop('muted', true);
            $(".video-section .btn-volume").removeClass('active');
            $('#myVideo')[0].pause();
        } else {
            $('#myVideo')[0].play();
            // $(".video-section video").prop('muted', false);
            // $(".video-section .btn-volume").addClass('active');
        }
    }
});