
import { Component, ElementRef, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { loadModules } from 'esri-loader';



@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css'],

 
})

export class MapviewComponent {
  showFiller = false;
  view: any;
  zoomValue: any;
 isRightArrowButton:boolean=true;
 showLeftPanel:boolean=false;

  
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


 });

 })
 
}

onClose(){
 
this.isRightArrowButton=!this.isRightArrowButton;

}
// onOpen(){
//   this.isLeftArrowButton=true;
//   this.isRightArrowButton=false;
// }

}