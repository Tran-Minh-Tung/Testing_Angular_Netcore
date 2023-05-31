import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNodeComponent } from './menu/add-node/add-node.component';
import { EditNodeComponent } from './menu/edit-node/edit-node.component';
import { DeleteNodeComponent } from './menu/delete-node/delete-node.component';
import { DialogNodeComponent } from './menu/dialog-node/dialog-node.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddNodeComponent,
    EditNodeComponent,
    DeleteNodeComponent,
    DialogNodeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule ,
    MatTreeModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    CdkTreeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
