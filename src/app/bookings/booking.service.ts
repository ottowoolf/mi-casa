import { Injectable } from '@angular/core';
import { Booking } from '../bookings/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private allBookings: Booking[] = [
    {
      id: 'gcgucklb641651',
      placeId: 'ghcyuc6546514bviuv',
      userId: 'jh564654hgvuyvh',
      placeTitle: 'This is a simple title',
      guestNumber: 2,
    },
  ];

  get bookings() {
    return [...this.allBookings];
  }
}
