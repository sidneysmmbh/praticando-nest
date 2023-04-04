import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  async signIn(employeename, pass) {
    const employee = await this.employeeService.findOne(employeename);
    if (employee?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {
      employeename: employee.employeename,
      sub: employee.employeeId,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
