import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import phones from 'src/mocks/phones';
import Phone from '../../types/phone';
import { PhoneDataSource } from '../phone-list-container/phone-datasource';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent  {
  columns: string[] = ['id', 'type', 'serial', 'color'];

  @Input()
  dataSource: PhoneDataSource;
}
