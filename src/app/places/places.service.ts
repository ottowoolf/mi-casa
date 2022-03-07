import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private placesList: Place[] = [
    new Place(
      'p1',
      'Brisbane Apt',
      'In the city center',
      'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/1ca74d9ed1617c51b23f747e1d03dd98fc0288aa5e8ef213af2376c29c47ef6c/image.jpg',
      60
    ),
    new Place(
      'p2',
      'Sydney Apt',
      'with view of the city and harbor bridge',
      'https://cdn.newsapi.com.au/image/v1/c3748ef161c981a5cdc87afb6c0b3640?width=320',
      75
    ),
    new Place(
      'p3',
      'Gold Coast Apt',
      'Beach front view',
      'https://q-xx.bstatic.com/xdata/images/hotel/840x460/102510305.jpg?k=86d096e758f372ed47cae336fb5753b9153a29c3cec56742e2a9325e717c5aac&o=',
      85
    ),
  ];

  constructor() {}

  get places() {
    return [...this.placesList];
  }
}
