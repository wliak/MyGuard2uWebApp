import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor, VisitorService } from 'src/app/services/visitor.service';
import { Subject } from 'rxjs';
declare const $: any;


@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit, AfterViewInit {
  displayTableFlag: boolean = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  posts: any;
  // httpVisitorList: Observable<Visitor[]>;

  constructor(private service: VisitorService) {
  }
  visitors: any;


  ngOnInit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    // .subscribe((data) => {
    //   this.visitors = data;
    // });

    // this.service.getVisitors().subscribe((data) => {
    //   this.visitors = data;
    //   this.dtTrigger.next();
    // });
    // this.dtTrigger.next();
    // $("#datePicker").datepicker({
    //   "format": "d-m-yy",
    //   "startDate": "-5m",
    //   "endDate": "05-15-2020",
    //   });
  }

  ngAfterViewInit(): void {
    //   $('#example').DataTable({
    //     "order": [[ 4, "desc" ]]
    // });
    // $("#datePicker").datepicker({
    //   "format": "d-m-yy",
    //   "startDate": "-5m",
    //   "endDate": "05-15-2020",
    //   });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  displayTable(displayOption: any) {
    console.log(displayOption);
    // this.dtTrigger.unsubscribe();

    $('#example').DataTable().destroy();


    this.service.getVisitors().subscribe((data) => {
      // this.displayTableFlag = true;
      this.visitors = data;
      this.dtTrigger.next();
      // $('#example').DataTable({
      //   "order": [[4, "desc"]]
      // });
    });


  }





}
