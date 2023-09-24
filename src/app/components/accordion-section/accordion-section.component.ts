import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDo } from 'src/app/pages/calendar/model/Event';
import { EventService } from 'src/app/pages/calendar/services/event.service';
import { Plants } from '../../pages/plants/model/Plants';
import { PlantsService } from '../../pages/plants/service/plants.service';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css'],
})
export class AccordionSectionComponent implements OnInit, OnChanges {
  indexPh: Array<any> = [
    { index: 0, color: '#F70000' },
    { index: 1, color: '#EA5400' },
    { index: 2, color: '#FF7A00' },
    { index: 3, color: '#FFB800' },
    { index: 4, color: '#ADFF00' },
    { index: 5, color: '#70FF00' },
    { index: 6, color: '#42FF00' },
    { index: 7, color: '#05FF00' },
    { index: 8, color: '#00FF38' },
    { index: 9, color: '#00FFD1' },
    { index: 10, color: '#0085FF' },
    { index: 11, color: '#0047FF' },
    { index: 12, color: '#3300FF' },
    { index: 13, color: '#5200FF' },
    { index: 14, color: '#4D02AC' },
  ];

  eventData: ToDo;

  actualDate: Date;

  currentPh: number = 4;

  @Input('id') id?: number;

  plant: Plants = {
    id: 0,
    name: '',
    scientifist_name: '',
    distance_between: '',
    image: '',
    weather: '',
    variety: '',
    info_weather_conditions: '',
    depth: '',
    info_distance_between: '',
    info_ideal_depth: '',
    info_land_type: '',
    ph: 0,
    info_fert_fumig: '',
    intervale_fert: 0,
    intervale_fumig: 0,
    saved: false,
  };

  constructor(
    private plantsService: PlantsService,
    private eventService: EventService,
    private dialog: MatDialog
  ) {
    this.eventData = {} as ToDo;
    this.actualDate = new Date();
    this.actualDate.setHours(0, 0, 0, 0);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.plantsService.getById(this.id).subscribe((response: any) => {
      this.plant = response;
    });
  }

  addEventFert() {
    for (let index = 0; index < 3; index++) {
      this.eventData.id = 0;
      this.eventData.date = this.plusDays(this.actualDate, index);
      this.eventData.description =
        (index + 1).toString() + '° Fertilization of ' + this.plant.name;
      this.eventService.create(1, this.eventData).subscribe();
    }
    this.showDialog();
  }

  addEventFumig() {
    for (let index = 0; index < 3; index++) {
      this.eventData.id = 0;
      this.eventData.date = this.plusDays(this.actualDate, index);
      this.eventData.description =
        (index + 1).toString() + '° Fumigation of ' + this.plant.name;
      this.eventService.create(1, this.eventData).subscribe();
    }
    this.showDialog();
  }

  plusDays(date: Date, days: number) {
    date.setDate(date.getDate() + 7 * this.plant.intervale_fert * days);
    return date;
  }

  showDialog() {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      width: '450px',
    });
  }
}
