import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
//import { DialogNodeComponent } from '../dialog-node/dialog-node.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData, TreeData } from 'src/app/models/node-data.model';
import { DialogNodeComponent } from '../dialog-node/dialog-node.component';

@Component({
  selector: 'app-edit-node',
  templateUrl: './edit-node.component.html',
  styleUrls: ['./edit-node.component.css']
})
export class EditNodeComponent {

  @Input() isTop: boolean | undefined;
  @Input() currentNode: TreeData ;
  @Output() edittedNode = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNodeComponent, {
      width: "280px",
      data: {
        Name: this.currentNode.name,
        Component: "Edit"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const node: TreeData = {
          id: 0,
          name: result.nodeName,
          children: this.currentNode.children
        };
        this.edittedNode.emit({ currentNode: this.currentNode, node: node });
      }
    });
  }
}