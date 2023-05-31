import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/node-data.model';

@Component({
  selector: 'app-dialog-node',
  templateUrl: './dialog-node.component.html',
  styleUrls: ['./dialog-node.component.css']
})
export class DialogNodeComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditClick(): void {
    this.dialogRef.close({ nodeName:this.data.Name });
  }
}
