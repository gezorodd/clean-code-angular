import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Store} from './store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getAllStores(): Observable<Store[]> {
    return of([
      new Store(1, 'Nivelles', true, 1.99),
      new Store(2, 'Mons', true, 3.49),
      new Store(3, 'Charleroi', false),
      new Store(4, 'Namur', false),
      new Store(5, 'Liège', false)
    ]).pipe(
      delay(300)
    );
  }
}
