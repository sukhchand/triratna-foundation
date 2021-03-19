import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  onMouseOver(event){
    console.log(event);
    console.log("onMouseOver")
  }
  onMouseOut(event){
    console.log(event);
    console.log("onMouseOut")
  }

  location: Location = {
    latitude: 19.0760,
    longitude: 72.8777,
    zoom: 10,
    isFullScreen: true,
    markers: [
      {
        lat: 19.0760,
        lng: 72.8777,
      },
      {
        lat: 20.0760,
        lng: 62.8777,
      }
    ]
  };

  constructor() { }
  getLocation(event){
    console.log(event)
  }

  ngOnInit(): void {
  }

}
export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
  isFullScreen?: boolean;
  mapType?: string;
  markers?: Array<Marker>;
}
export interface Marker {
  lat: number;
  lng: number;
}
