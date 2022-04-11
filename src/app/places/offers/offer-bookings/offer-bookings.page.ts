import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  place: Place;
  placesSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placesSub = this.placesService
        .getPlace(paramMap.get('placeId'))
        .subscribe((place) => {
          this.place = place;
        });
    });
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/offers');
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
