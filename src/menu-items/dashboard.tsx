// third-party
import { FormattedMessage } from 'react-intl';

// assets
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ImageIcon from '@mui/icons-material/Image';
// type
import { NavItemType } from 'types/menu';

// icons
const icons = { DashboardOutlinedIcon, HelpOutlineOutlinedIcon, ImageIcon };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'Projects',
  title: <FormattedMessage id="Projects" />,
  type: 'group',
  children: [
    {
      id: 'Dashboard',
      title: <FormattedMessage id="Dashboard" />,
      type: 'collapse',
      icon: icons.DashboardOutlinedIcon,
      children: [
        {
          id: 'Image Recognition',
          title: <FormattedMessage id="Image Recognition" />,
          type: 'collapse',

          icon: icons.DashboardOutlinedIcon,
          children: [
            {
              id: 'About',
              title: <FormattedMessage id="About" />,
              type: 'item',
              url: '/imagerecognition/about-page',
              icon: icons.HelpOutlineOutlinedIcon
            },
            {
              id: 'Image Analyzer',
              title: <FormattedMessage id="Image Analyzer" />,
              type: 'item',
              url: '/imagerecognition/image-page',
              icon: icons.ImageIcon
            }
          ]
        }
      ]
    }
  ]
};

export default pages;
