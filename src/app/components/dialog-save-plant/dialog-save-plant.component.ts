import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plants } from '../../pages/plants/model/Plants';
import { PlantsService } from '../../pages/plants/service/plants.service';

@Component({
  selector: 'app-dialog-save-plant',
  templateUrl: './dialog-save-plant.component.html',
  styleUrls: ['./dialog-save-plant.component.css'],
})
export class DialogSavePlantComponent implements OnInit, OnChanges {
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
    public dialogRef: MatDialogRef<DialogSavePlantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plants,
    private plantsService: PlantsService
  ) {
    this.plantsService.getById(this.data.id).subscribe((response: any) => {
      this.plant = response;
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  savePlant() {
    if (this.plant.saved) {
      this.plantsService.patch(this.plant.id, { savePlant: false }).subscribe();
    } else {
      this.plantsService.patch(this.plant.id, { savePlant: true }).subscribe();
    }
  }

  closeClick() {
    this.dialogRef.close();
  }
}
