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

      id: '5b4ed4cc-f31b-444b-a06e-05ce7b322892',
      name: 'Daniel Chaves',
      email: 'dccastro.7@gmail.com',
      phone: 88998106150,
      salary: 60000,
      department: 'IT'

    },
    {

      id: '5c4ed2cc-f31b-444b-a06e-05ce7b322892',
      name: 'Whilian Smith',
      email: 'wsimith.67@gmail.com',
      phone: 56759878,
      salary: 10000,
      department: 'Garden'

    },
    {

      id: '5b4ed1cc-f31b-434b-a06e-05ce7b322892',
      name: 'Gabriel Pec',
      email: 'gabrielpec.10@gmail.com',
      phone: 98726371,
      salary: 100,
      department: 'Student'

    },



  ];

  constructor() {

  }

  ngOnInit(): void {

    

  }


}
