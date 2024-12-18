// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { GitHub, LinkedIn } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  GitHub,
  LinkedIn,
  ArticleIcon
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'Contact',
  title: <FormattedMessage id="Contact" />,
  type: 'group',
  children: [
    {
      id: 'LinkedIn',
      title: <FormattedMessage id="LinkedIn" />,
      type: 'item',
      url: 'https://www.linkedin.com/in/alvaro-valdez-duran/',
      icon: icons.LinkedIn,
      external: true,
      target: true
    },
    {
      id: 'Github',
      title: <FormattedMessage id="Github" />,
      type: 'item',
      url: 'https://github.com/AlvVal282',
      icon: icons.GitHub,
      external: true,
      target: true
    },
    {
      id: 'Resume',
      title: <FormattedMessage id="Resume" />,
      type: 'item',
      url: '/resume-page',
      icon: icons.ArticleIcon,
      external: true,
      target: true
    }
  ]
};

export default other;
