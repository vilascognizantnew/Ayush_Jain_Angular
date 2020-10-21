import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  columnSpan: number = 2;
 firstName: string = 'Tommy';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    isDisabled:boolean=true;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(): void {
    this.isDisabled=!this.isDisabled;
        console.log('Button Clicked');
    }


    

}
