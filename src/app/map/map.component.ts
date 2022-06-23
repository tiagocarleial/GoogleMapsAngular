import { Component, OnInit } from '@angular/core';
import { MapData } from '../models/map.model';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  constructor(private mapService: MapService) { }

  placeName: string 
  url: string
  name: string
  mapData? : MapData;
  status: string;


  /* ngOnInit() { 
    this.getMapData(this.placeName);
    
  } */

  onSubmit() {
    this.getMapData(this.placeName);
    this.placeName = '';
  }

  public getMapData(placeName: string) {
    this.mapService.getMapData(placeName)
    .subscribe ({
      next: (response) => {
        this.mapData = response;
        console.log(response)
      }
    });
  }

}
