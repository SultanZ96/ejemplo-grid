import { Component, OnInit,ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { ReporteRRHH } from './reporte-rrhh';
import { ListarService } from './listar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    @ViewChild('ComisionesRRHHGrid', { static: false }) ComisionesRRHHGrid: jqxGridComponent;
    data: any[] = [];
    datafields: any[] = [];
    columns: any[] = [];
    reportes: Array<ReporteRRHH>;

    constructor(
    private listarService: ListarService) { }
    
    ngOnInit(): void {
        this.generateData();
    }

    source: any =
    {
        localdata: this.data,
        datatype: 'array',
        datafields: this.datafields
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    generateData(): void {
        for (let i = 0; i < 200; i++) {
            let row = {};
            for (let j = 0; j < 200; j++) {
                row['Name' + j] = 'Cell ' + (1 + i) + '.' + (1 + j);
                if (i == 0) {
                    this.columns.push({ datafield: 'Name' + j, text: 'Column ' + (1 + j), width: 100 });
                    this.datafields.push({ name: 'Name' + j, type: 'string' });
                }
            }
            this.data[i] = row;
        }
    }
}