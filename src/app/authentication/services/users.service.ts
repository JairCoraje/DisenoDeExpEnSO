import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends TemplateService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8080/api/users';
  }
}
