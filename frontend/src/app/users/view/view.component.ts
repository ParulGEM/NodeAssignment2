import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  allData: any[] = [];
  flag: boolean = false;

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.getAllData();
  }
   setId(id:string){
    this.dataService.itemId=id;
   }
  getAllData() {
    this.http.get<any[]>('http://localhost:8000/record/all-user').subscribe(
      (data) => {
        this.allData = data;
        console.log(this.allData);
        this.flag = true;
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );
  }

  deleteItem(id: string) {
    this.http
      .delete(`http://localhost:8000/record/delete/${id}`)
      .subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the data after deleting
          this.getAllData();
        },
        (error) => {
          console.log('Error deleting item:', error);
        }
      );
  }
}
