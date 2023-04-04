import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type Employee = any;

@Injectable()
export class EmployeeService {
  private readonly employeeers = [
    {
      employeeId: 1,
      employeename: 'john',
      password: 'changeme',
    },
    {
      employeeId: 2,
      employeename: 'maria',
      password: 'guess',
    },
  ];

  async findOne(employeename: string): Promise<Employee | undefined> {
    return this.employeeers.find((user) => user.employeename === employeename);
  }
}
