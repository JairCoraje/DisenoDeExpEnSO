import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { ToDo } from './model/Event';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  selected: Date;

  userId = 5;

  eventData: ToDo;
  dataSource: MatTableDataSource<ToDo>;
  displayedColumns: string[] = ['actions', 'description'];

  @ViewChild('eventForm', { static: false })
  eventForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private eventService: EventService) {
    this.eventData = {} as ToDo;
    this.dataSource = new MatTableDataSource<ToDo>();
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    this.selected = now;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getEventsbyDate();
  }

  getEventsbyDate() {
    this.eventService.getByDate(this.selected).subscribe((response) => {
      this.dataSource.data = response;
    });
  }

  handleDateChange(date: Date) {
    this.selected = date;
    this.getEventsbyDate();
  }

  deleteEvent(id: number) {
    this.eventService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: ToDo) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addEvent() {
    this.eventData.id = 0;
    this.eventData.date = this.selected;
    this.eventService
      .create(this.userId, this.eventData)
      .subscribe((response) => {
        this.dataSource.data.push({ ...response });
        this.dataSource.data = this.dataSource.data.map((o) => {
          return o;
        });
      });
    this.eventForm.resetForm();
  }

  onSubmit() {
    if (this.eventForm.form.valid) {
      console.log('valid');
      console.log('about to add');
      this.addEvent();
    } else {
      console.log('invalid data');
    }
  }
}
