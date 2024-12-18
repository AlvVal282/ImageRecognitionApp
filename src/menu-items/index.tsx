// project import
import other from './contacts';
import pages from './dashboard';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [pages, other]
};

export default menuItems;
