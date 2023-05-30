import { Component } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  emitOutput: any;
  firstInput: number | undefined;
  view: any;

  ngOnInit(){
    this.initMap(); 
  }

initMap() {
alert("view");
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
}
