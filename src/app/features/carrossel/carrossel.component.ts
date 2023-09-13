import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from 'src/app/directives/swiper.directive';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';

interface IBookImg{
  src: string;
  alt: string;
}

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

  slider!: HTMLElement | null;

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

  imgSliders: IBookImg[] = [
    {
      src: '../../../assets/images/svg/books/ApacheKafka.svg',
      alt: 'Livro sobre Apache Kafka'
    },
    {
      src: '../../../assets/images/svg/books/Arquitetura.svg',
      alt: 'Livro sobre Arquitetura Javascript'
    },
    {
      src: '../../../assets/images/svg/books/Construct2.svg',
      alt: 'Livro sobre Construct2'
    },
    {
      src: '../../../assets/images/svg/books/Gestao.svg',
      alt: 'Livro sobre Gestão'
    },
    {
      src: '../../../assets/images/svg/books/Gestao2.svg',
      alt: 'Livro sobre Gestão 2'
    },
    {
      src: '../../../assets/images/svg/books/Lideranca.svg',
      alt: 'Livro sobre Liderança'
    },
    {
      src: '../../../assets/images/svg/books/MetricasAgeis.svg',
      alt: 'Livro sobre Métricas Ágeis'
    },
    {
      src: '../../../assets/images/svg/books/Nodejs.svg',
      alt: 'Livro sobre NodeJS'
    },
    {
      src: '../../../assets/images/svg/books/Portugol.svg',
      alt: 'Livro sobre Portugol'
    },
    {
      src: '../../../assets/images/svg/books/ReactNative.svg',
      alt: 'Livro sobre React Native'
    },
    {
      src: '../../../assets/images/svg/books/Tuning.svg',
      alt: 'Livro sobre Tuning'
    },
    {
      src: '../../../assets/images/svg/books/UX.svg',
      alt: 'Livro sobre UX'
    },
  ];

  constructor(){}

  ngOnInit(){
    register();
    this.slider = document.getElementById('book-swiper');
    //this.setBannerImgs(); //imagens não permitem ajustes dessa maneira
  }
  ngAfterViewInit(){
    //this.setBannerImgStyles();
    const swiperEl = document.querySelector('swiper-container');
    const buttonEl = document.querySelector('button');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 40,
    modules: [Navigation, Pagination],
    /* pagination: {
      //el: ".swiper-pagination",
     // dynamicBullets: true,
    }, */
    // inject modules styles to shadow DOM
    injectStylesUrls: [
      'swiper/element/css/navigation',
      'swiper/element/css/pagination',
      'swiper/element/css/scrollbar'
    ],
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    },
    
    /* on: {
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

  setBannerImgs(){
    if(!!this.slider){
      this.imgSliders.map((img, index) => {
        let newSlide = `<swiper-slide class='img-container'><img id='slide-img-${index}'  [style.width]="'100%'" src='${img.src}' alt='${img.alt}'></swiper-slide>`;
        this.slider?.insertAdjacentHTML( 'beforeend', newSlide );
        
      })
    }
    
  }

  setBannerImgStyles(){
    this.imgSliders.map((img, index)=>{
      const imgSlide = document.getElementById(`slide-img-${index}`);
      imgSlide?.classList.add('slider-img');
    })
    
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
