/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
import Swiper, { Navigation, Pagination, Autoplay, } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
togglePopupWindows()
// =======================================================================================================

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()
// =======================================================================================================




/*Открытие/закрытие блоков spollers =======================================================================
// https://youtu.be/0fg9bZcL1RM
* Чтобы блок sollers открывался и закрывался
* На блок-оболочку спойллера и кнопку/заголовок, которая открывает и закрывает spollers
* Повешай атрибут data-spollers(на блок-оболочку) и data-spoller(на кнопку/заголовок)
* Если нужно что б spollers работал на определенной ширине экрана
* Добавь для атрибута блока значение в виде data-spollers="<ширина экрана, тип медиа запроса (min/max)"
* Для того что бы спойлер по умолчанию был открыть, следует к нужному блоку дописать класс "_active"
// ! Следует писать в HTML блок спойллера после кнопки/заголовки (иначе работать спойллер не будет)
// ! Визуальные атрибуты спойллера добавляются по классу "._init"
*/
/* Раскомментировать для использования */
// spollerInit()

// =======================================================================================================

// const textarea = document.textarea
// if(textarea.length > 0){
//   textarea.addEventListener('keyup', function(){
//     for( let i = 0; i < textarea.length; i++) {
//       if(textarea[i].scrollTop > 0){
//         textarea[i].style.height = this.scrollHeight + "px";
//       }
//     }
//   })
// }
// var textarea = document.querySelector('textarea');

// textarea.addEventListener('keyup', function(){
//   if(this.scrollTop > 0){
//     this.style.height = this.scrollHeight + "px";
//   }
// });

const swiperAdvant = new Swiper('.advant__swiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  modules: [Autoplay],
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    720: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    1020: {
        slidesPerView: 4,
        spaceBetween: 20,
        slideToClickedSlide: true,
        
    },
    1300: {
        slidesPerView: 5,
        spaceBetween: 20,
        slideToClickedSlide: true,
    }
  },
});
const swiperCases = new Swiper('.cases__swiper', {
  speed: 600,
  spaceBetween: 20,
  slidesPerView: 1,
  slideToClickedSlide: true,
  modules: [Autoplay],
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
})
const swiperOption = new Swiper('.option__swiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  modules: [Autoplay],
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    720: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    1020: {
        slidesPerView: 4,
        spaceBetween: 20,
        slideToClickedSlide: true,
    },
    1300: {
        slidesPerView: 4,
        spaceBetween: 20,
        slideToClickedSlide: true,
    }
  },
});

const swiperReviews = new Swiper('.reviews__swiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  modules: [Autoplay],
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
  },
});


//Модуль спойлера
let spollersButtonAll = document.querySelectorAll(".spollers__header")
if(spollersButtonAll.length > 0) {
    spollersButtonAll.forEach((button) => {
      button.addEventListener('click',  (e) => {
      button.closest(".spollers__item").classList.toggle("active")
    })
  })
}