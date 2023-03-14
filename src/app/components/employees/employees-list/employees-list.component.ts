import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] = [


    {
      id: '1',
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      phone: 1234567890,
      salary: 50000,
      department: 'Sales'
    },
    {
      id: '2',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phone: 2345678901,
      salary: 60000,
      department: 'IT'
    },
    {
      id: '3',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      phone: 3456789012,
      salary: 70000,
      department: 'Marketing'
    }
  ]

  constructor() {

  }

  ngOnInit(): void {

    

  }


}
