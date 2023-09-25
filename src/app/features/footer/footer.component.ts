import { Component } from '@angular/core';

interface IImgLinks {
  src: string;
  alt: string;
  name: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  linksEducacao: IImgLinks[] = [
    {
      src: '../../../assets/images/svg/footerImgs/Caelum.svg',
      alt: 'Logo da Caelum',
      name: 'Caelum'
    },
    {
      src: '../../../assets/images/svg/footerImgs/CasaDoCodigo.svg',
      alt: 'Logo da casa do código',
      name: 'Casa do Código'
    }
  ];

  linksEdOnline: IImgLinks[] = [
    {
      src: '../../../assets/images/svg/footerImgs/Alura.svg',
      alt: 'Logo da Alura',
      name: 'Alura'
    },
    {
      src: '../../../assets/images/svg/footerImgs/AluraEmpresas.svg',
      alt: 'Logo da Alura para Empresas',
      name: 'Alura para Empresas'
    },
    {
      src: '../../../assets/images/svg/footerImgs/AluraLATAM.svg',
      alt: 'Logo da Alura Latam',
      name: 'Alura LATAM'
    },
    {
      src: '../../../assets/images/svg/footerImgs/AluraStart.svg',
      alt: 'Logo da Alura Start',
      name: 'Alura Start'
    },
    {
      src: '../../../assets/images/svg/footerImgs/MusicDot.svg',
      alt: 'Logo da Music Dot',
      name: 'Music Dot'
    },
    {
      src: '../../../assets/images/svg/footerImgs/AluraLingua.svg',
      alt: 'Logo da Alura Língua',
      name: 'Alura Língua'
    },
    {
      src: '../../../assets/images/svg/footerImgs/PM3.svg',
      alt: 'Logo da PM3',
      name: 'PM3'
    },
  ];

  linksComunidade: IImgLinks[] = [
    {
      src: '../../../assets/images/svg/footerImgs/HipstersTech.svg',
      alt: 'Logo da Hipsters ponto Tech',
      name: 'Hipsters ponto Tech'
    },
    {
      src: '../../../assets/images/svg/footerImgs/ScubaDev.svg',
      alt: 'Logo da ScubaDev',
      name: 'ScubaDev'
    },
    {
      src: '../../../assets/images/svg/footerImgs/LayersTech.svg',
      alt: 'Logo da Layers ponto Tech',
      name: 'Layers ponto Tech'
    },
    {
      src: '../../../assets/images/svg/footerImgs/LikeABoss.svg',
      alt: 'Logo da Like a Boss',
      name: 'Like a Boss'
    },
    {
      src: '../../../assets/images/svg/footerImgs/CarreiraSemFronteira.svg',
      alt: 'Logo da Carreira Sem Fronteira',
      name: 'Carreira Sem Fronteira'
    },
    {
      src: '../../../assets/images/svg/footerImgs/HipstersJobs.svg',
      alt: 'Logo da Hipsters Jobs',
      name: 'Hipsters ponto Jobs'
    },
    {
      src: '../../../assets/images/svg/footerImgs/GUJ.svg',
      alt: 'Logo da GUJ',
      name: 'GUJ'
    },
  ];
}
