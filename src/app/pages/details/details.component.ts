import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogSavePlantComponent } from 'src/app/components/dialog-save-plant/dialog-save-plant.component';
import { Plants } from '../plants/model/Plants';
import { PlantsService } from '../plants/service/plants.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnChanges {
  private sub: any;

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

  plantId?: Number;
  nameButton?: String;
  ID?: String;
  save_plant?: boolean;

  constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.plantId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.plantsService.getById(this.plantId).subscribe((response: any) => {
      this.plant = response;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  showDialog() {
    const dialogRef = this.dialog.open(DialogSavePlantComponent, {
      width: '450px',
      data: {
        id: this.plant.id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      window.location.reload();
    });
  }
}
