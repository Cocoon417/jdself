var CategorySlide = function () {

}

CategorySlide.prototype = {
    CategoryLeft: function () {
        var swiper = new Swiper('#categoryLeft', {
            direction: 'vertical',

            slidesPerView: 'auto',

            freeMode: true,
            mousewheel: true,

        })
    },
    CategoryRight: function () {
        var swiper = new Swiper('#categoryRight', {
            direction: 'vertical',

            slidesPerView: 'auto',

            freeMode: true,
            mousewheel: true,

        })
    },
    CategoryLeftClick: function () {

        var ul = document.querySelector('#main .left ul');
        var lis = document.querySelectorAll('#main .left ul li');
        var swiperWrapper = document.querySelector('#main .swiper-wrapper');
        var ulHeight = ul.offsetHeight;
        var swiperWrapperHeight = swiperWrapper.offsetHeight;
        var maxHeight = swiperWrapperHeight - ulHeight;

        ul.addEventListener('click', function (e) {
            for (var i = 0; i < lis.length; i++) {

                lis[i].classList.remove('active');
                lis[i].index = i;

            }
            e.target.parentNode.classList.add('active');

            var translateY = -e.target.parentNode.index * e.target.offsetHeight;
            if(translateY < maxHeight){
                translateY = maxHeight;
            }
            swiperWrapper.style.transform = 'translate3d(0px,'+ translateY +'px,0px)';
            swiperWrapper.style.transition = 'all 0.3s';
            
        })

    }
}

window.addEventListener('load', function () {

    var categorySlide = new CategorySlide();

    categorySlide.CategoryLeft();
    categorySlide.CategoryRight();
    categorySlide.CategoryLeftClick();

})