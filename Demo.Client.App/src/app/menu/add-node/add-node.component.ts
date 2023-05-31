import { DialogData, TreeData } from './../../models/node-data.model';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogNodeComponent } from '../dialog-node/dialog-node.component';


@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent {
  @Input() isTop: boolean | undefined;
  @Input() currentNode: TreeData | undefined;
  @Output() addedNode = new EventEmitter;
  name: string | undefined;
  description: string | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNodeComponent, {
      width: '280px',
      data: {nodeName: this.name, Component: 'Add'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const node: TreeData = {
          id: 0,
          name: result.nodeName,
          children: []
        };
        if (this.isTop) {
          this.addedNode.emit(node);
        } else {
          this.addedNode.emit({currentNode: this.currentNode, node: node});
        }
      }
    });
  }
}

