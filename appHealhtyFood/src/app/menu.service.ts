import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'

import { Menu } from './menu';
import { MENUS } from './mock-menus';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private messageService: MessageService) { }
  getMenus(): Observable<Menu[]> {
	  this.messageService.add('MenuService: fetched menus')
	  return of(MENUS);
  }
}
