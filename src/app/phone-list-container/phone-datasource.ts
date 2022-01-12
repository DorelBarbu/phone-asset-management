import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import phones from 'src/mocks/phones';
import Phone from '../../types/phone';

export class PhoneDataSource extends DataSource<Phone> {
  connect(collectionViewer: CollectionViewer): Observable<readonly Phone[]> {
    return of(phones);
  }

  disconnect(collectionViewer: CollectionViewer): void {}
}
