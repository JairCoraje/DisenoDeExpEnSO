import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogConfirmationComponent>) { }

  ngOnInit(): void {
  }

  closeClick(){
    this.dialogRef.close();
  }
}
