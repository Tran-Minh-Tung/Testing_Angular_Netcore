import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeData } from '../models/node-data.model';
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";
import { of as observableOf } from "rxjs";
import { MenuServiceService } from '../service/menu-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{

    nestedTreeControl: NestedTreeControl<TreeData>;
    nestedDataSource: MatTreeNestedDataSource<TreeData>;
  
    constructor(
      private menuService: MenuServiceService
    ) {}
  
    ngOnInit() {
      this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
      this.nestedDataSource = new MatTreeNestedDataSource();
      this.refreshTreeData();
    }
  
    private _getChildren = (node: TreeData) => observableOf(node.children);
    hasNestedChild = (_: number, nodeData: TreeData) =>
      nodeData.children.length > 0;
  
    refreshTreeData() {
      this.menuService.getMenu().subscribe(data=>{
        this.nestedDataSource.data = [];
        this.nestedDataSource.data = data;
      })
    }

  
    addNode(node: TreeData) {
      var obj: MenuItem = {Id:0,IdNodeCha: 0,Name: node.name} ;
      this.nestedDataSource.data.push(node);
      this.menuService.createMenuItem(obj).subscribe(() =>{
        this.refreshTreeData();
      })
    }
  
    addChildNode(childrenNodeData: any) {
      var obj: MenuItem = {Id:0,IdNodeCha: childrenNodeData.currentNode.id,Name: childrenNodeData.node.name} ;
      this.menuService.createMenuItem(obj).subscribe(() =>{
        this.refreshTreeData();
      })
    }
  
    editNode(nodeToBeEdited: any) {
      const job = {Id: nodeToBeEdited.currentNode.id ,IdNodeCha: 0, Name: nodeToBeEdited.node.name };
      this.menuService.updateMenuItem(job).subscribe(item =>{
        this.refreshTreeData();
      });
    }
  
    deleteNode(nodeToBeDeleted: TreeData) {
      if (
        window.confirm(
          "Are you sure you want to delete " + nodeToBeDeleted.name + "?"
        )
      ) {
       
        const job = {Id: nodeToBeDeleted.id ,IdNodeCha: 0, Name: nodeToBeDeleted.name };
        this.menuService.deleteMenuItem(job).subscribe(item =>{
          this.refreshTreeData();
        });

      }
    }

  
  }
  

