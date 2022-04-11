import { Component, OnDestroy, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  placesSub: Subscription;
  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places;
    });
  }

  segmentChanged(event: Event) {
    const customEvent = event as CustomEvent<SegmentChangeEventDetail>;
    console.log(customEvent.detail);
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
