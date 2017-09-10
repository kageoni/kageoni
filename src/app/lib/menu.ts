export class Menu {
  static buildMenuList(categories: any[]): {menuList: any[], menuItems: any} {
    let menuItems: any = {};
    let menuList: any[] = [];
    for (let i = 0; i < categories.length; i++) {
      let item: any = categories[i];
      item.children = [];
      menuItems[item.id] = item;
      // if item has no parent - is the 1st level item. Save it as main item.
      if (!item.parent) {
        menuList.push(item);
      }

      if (item.parent && menuItems[item.parent]) {
        menuItems[item.parent].children.push(item);
      }
    }

    return {menuList: menuList, menuItems: menuItems};
  }
}
