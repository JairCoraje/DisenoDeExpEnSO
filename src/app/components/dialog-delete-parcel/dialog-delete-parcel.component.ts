import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-delete-parcel',
  templateUrl: './dialog-delete-parcel.component.html',
  styleUrls: ['./dialog-delete-parcel.component.css']
})
export class DialogDeleteParcelComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DialogDeleteParcelComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
