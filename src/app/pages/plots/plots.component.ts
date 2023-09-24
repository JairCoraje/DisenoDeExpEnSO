import { Component, OnInit, SimpleChanges } from '@angular/core';
import {PlotsService} from "./service/plots.service";
import {Plot} from "./model/Plot";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteParcelComponent } from 'src/app/components/dialog-delete-parcel/dialog-delete-parcel.component';
import { DialogAddPlotComponent } from 'src/app/components/dialog-add-plot/dialog-add-plot.component';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {

  name: string | undefined;
  plots: Plot[] = [];
  plotsView: Plot[] = [];

  constructor(private plotsService: PlotsService, public dialog: MatDialog) {
    this.plotsService.getAll().subscribe((response: any) => {this.plots = response});
  }

  ngOnInit(): void {
    this.plotsService.getAll().subscribe((response: any) => {this.plotsView = response});
  }

   openDialogAddPlot(): void {
     const dialogRef = this.dialog.open(DialogAddPlotComponent, {
       width: '400px',
       data: {
        plantName : this.name
       }
     })
   }
   openDialogDeleteParcel(){
    const dialogRef = this.dialog.open(DialogDeleteParcelComponent, {
    width: '400px',
    data: {
     }
   })
 }

};
