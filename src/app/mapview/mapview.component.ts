
import { Component, ElementRef, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { loadModules } from 'esri-loader';
import { SidemenuComponent} from '../sidemenu/sidemenu.component';



@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css'],

 
})

export class MapviewComponent {
  showFiller = false;
  view: any;
  zoomValue: any;
 

  
  constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }
  ngOnInit(){
    this.initMap(); 
  }

initMap() {

loadModules([

"esri/WebMap",

"esri/views/MapView",

"esri/portal/Portal",

"esri/widgets/ScaleBar",

"esri/widgets/Legend",

 

 ]).
 
 then(([WebMap, MapView, Portal, ScaleBar, Legend,Extent]) => {

 //once you create this you will have this exceuted

const webMap = new WebMap({
 portalItem: {

 id: "019ea240fdba4ed1b4c73ff6da805e61",

 portal: "https://bnsf.maps.arcgis.com"

 }

 });

 this.view = new MapView({

container: "viewDiv", // Div element

map: webMap,

// center: [-118.805, 34.027], // Longitude, latitude

//zoom: 12, // Zoom level
 });
//  const zoomChanged=(newValue:any,oldValue:any)=>{
//   console.log(newValue,oldValue);
//   this.zoomValue=newValue;
//  }
//  this.view.watch('zoom',zoomChanged);
//    this.view.ui.add('heading-for-map', 'top-right');
 })
 
}
// onLoad(iframe:any){
//   this.doc = iframe.contentDocument || iframe.contentWindow;
//   this.createComponent();
// }

// createComponent() {
//   const compFactory = this.resolver.resolveComponentFactory(SidemenuComponent);
//   this.compRef = this.vcRef.createComponent(compFactory);
//   this.compRef.location.nativeElement.id = 'innerComp';

//   (<SidemenuComponent>this.compRef.instance).firstInput = this.firstInput;

//   // (<SidemenuComponent>this.compRef.instance).emitOutput.subscribe((response:any) => {
//   //   console.log(response);
//   // });

//   this.doc.body.appendChild(this.iframe.nativeElement);
// }
}