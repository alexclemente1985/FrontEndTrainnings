import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from 'src/app/directives/swiper.directive';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ],
})
export class CarrosselComponent {

  sliders: string[] = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
    'Test 5',
    'Test 6',
    'Test 7',
    'Test 8',
    'Test 9',
  ]

  ngOnInit(){
    register();
  }
  ngAfterViewInit(){
    const swiperEl = document.querySelector('swiper-container');
    const buttonEl = document.querySelector('button');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    /* breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {
        // ...
      },
    }, */
  };

  // now we need to assign all parameters to Swiper element
  if(swiperEl){
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    // @ts-ignore
    swiperEl.initialize();
    if(buttonEl){
      buttonEl.addEventListener('click', () => {
        // if it was initialized with attributes
        //swiperEl.setAttribute('slides-per-view', '3');
    
        // or if it was initialized with props
        //@ts-ignore
       // swiperEl.slidesPerView = 3;

       swiperEl.swiper.slideNext();
      });
    }
  }
  
  }

  /* public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    navigation: false,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  } */

  /* ngOnInit(){
    register();
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  } */

}
