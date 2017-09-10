import { Component, OnInit } from '@angular/core';
import { PubSubDistinct } from 'pubsub-distinct';
import { Menu } from '../../lib/menu';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  categories: any = {};
  menuList: any[];

  constructor(private dataManager: DataManagerService, private pubSub: PubSubDistinct) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.dataManager.subscribeToCategories((response: any[]) => {
      let {menuList, menuItems} = Menu.buildMenuList(response);
      this.menuList = menuList;
      this.categories = menuItems;
      console.log('categories are:', this.categories, this.menuList);
    });
  }
}
