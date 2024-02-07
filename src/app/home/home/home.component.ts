import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from '../../models/project';
import { Services } from '../../models/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeServicesOwlOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach:true,
    navSpeed: 600,
    nav:true,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2,
        margin:0
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  }

  owlBannerOptions:OwlOptions = {
    loop: true,
    dots: false,
    autoplay:true,
    navSpeed:500,
    margin:0,
    nav:false,
    items:1
  }

  OwlBannerTextOptions:OwlOptions = {
    loop: true,
    dots: false,
    autoplay:true,
    navSpeed:500,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin:0,
    nav:false,
    items:1,
    animateOut:'fadeOut',
    animateIn:'fadeOut'
  }

  onGoingProjects:Project[] = [
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/On-going-projects/1.webp"
    },
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/On-going-projects/2.webp"
    },
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/On-going-projects/3.webp"
    },
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/On-going-projects/4.webp"
    }
    
  ]

  completedProjects:Project[] = [
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/Completed-projects/1.webp"
    },
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/Completed-projects/2.webp"
    },
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/Completed-projects/3.webp"
    },
    {
      title:"Excavation For Underground Pipeline",
      brief:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      content:"BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility. BAC Infratech Pvt Ltd specializes in installing water supply pipelines across diverse locations, ensuring efficient water distribution and accessibility.",
      location:"Hyderabad, Telanagana",
      imgUrl:"../../../assets/images/Completed-projects/1.webp"
    }
    
  ]

  carouselServices:Services[]=[
    {
      title:"Underground Pipeline Installations",
      breif:"Trust BAC Infratech for expert underground pipeline installation. With precision engineering and meticulous planning, we ensure reliable and durable water distribution.",
      imgUrl:"../../../assets/images/home-about-us.png",
      content:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources"
    },
    {
      title:"Plant Pipeline Installations",
      breif:" Our expert team ensures precise engineering and seamless integration, guaranteeing optimal performance. Trust us to deliver efficient solutions tailored to your plant's needs.",
      imgUrl:"../../../assets/images/Completed-projects/1.webp",
      content:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources"
    },
    {
      title:"Irrigation Pipeline Installations",
      breif:"Elevate your irrigation system with BAC Infratech's precise pipeline installations. Our expert team guarantees efficient water distribution, maximizing crop yield and conserving resources.",
      imgUrl:"../../../assets/images/Completed-projects/2.webp",
      content:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources"
    },
    {
      title:"Local Supervisor Tender",
      breif:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources ",
      imgUrl:"../../../assets/images/Completed-projects/3.webp",
      content:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources"
    }
  ]


}
