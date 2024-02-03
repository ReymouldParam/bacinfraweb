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
  homeBannerOwlOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    nav:false,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
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
      breif:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources ",
      imgUrl:"../../../assets/images/home-about-us.png",
      content:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources"
    },
    {
      title:"Plant Pipeline Installations",
      breif:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources ",
      imgUrl:"../../../assets/images/Completed-projects/1.webp",
      content:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources"
    },
    {
      title:"Irrigation Pipeline Installations",
      breif:"Our core business activity is to execute projects pertaining to core infrastructure development like water resources ",
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
