import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListarService } from './listar.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,jqxGridComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ListarService]
})
export class AppModule { }
