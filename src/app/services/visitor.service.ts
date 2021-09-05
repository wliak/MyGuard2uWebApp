import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Visitor {
  id: string,
  name: string,
  username: string,
  email: string,
  address: any,
  phone: string,
  website: string,
  company: any
}

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) {

  }

  observable_getVisitors() {
    return this.http.get<Visitor[]>('https://jsonplaceholder.typicode.com/users');
  }

  getVisitors() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
