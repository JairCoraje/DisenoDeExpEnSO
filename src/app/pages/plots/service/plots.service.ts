import { Injectable } from '@angular/core';
import {TemplateService} from "../../../services/template.service";
import { Plot } from '../model/Plot';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlotsService extends TemplateService<Plot>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/plot'
   }
}
