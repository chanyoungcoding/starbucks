
const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0
        })
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
        //버튼 숨기기
        gsap.to('#to-top', .2, {
            x: 100
        })
    }
}, 300));

const toTopEl = document.querySelector('#to-top')
toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


// fade-in

const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function (faedEl, index) {
    gsap.to(faedEl, 1, {
        delay: (index + 1) * .6,
        opacity: 1
    });
});


//swiper - 길죽한 부분

new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay: true,
    loop: true
});

//swiper - 양 옆 부분

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데로 보여주기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자 페이지 번호 요소 제어(실제로 사용자가 페이지를 눌러서 이동 가능하게 함)
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

// swiper - 밑에 후원 브렌드
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})

// 버튼 눌렀을 때 양 옆 부분 숨김 처리

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
})

//둥둥 떠다니는 동그라미

function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        {
            delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
            y: size,                // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
            repeat: -1,             // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
            yoyo: true,             // 한번 재생된 애니메이션을 다시 뒤로 재생.
            ease: Power1.easeInOut  // Easing 함수 적용.
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

//scrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, //보여짐 여부를 감시할 요소
            triggerHook: .8       //내가 보는 웹사이트 기준 80% 정도
        })                        // 80%정도일때 setClassToggle 실행
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})

