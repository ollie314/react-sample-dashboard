import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpIcon from '@mui/icons-material/Help';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ApartmentIcon from '@mui/icons-material/Apartment';

const items = [
  {
    id: '21e50790-041e-4fe4-b8ae-2d8e135cc48b',
    name: 'Dashboard',
    uri: '/',
    icon: DashboardIcon,
  },
  {
    id: 'dede5ccb-1825-46da-b3e2-98c4dede2732',
    name: 'Clients',
    uri: '/clients',
    icon: PeopleIcon,
  },
  {
    id: 'f6b61c06-6c3a-4cde-a739-1f0df95e57cc',
    name: 'Reports',
    uri: '/reports',
    icon: BarChartIcon,
  },
  {
    id: '528b2bac-5ac3-46db-9d49-8b4cf4edde09',
    name: 'Integrations',
    uri: '/integrations',
    icon: ApartmentIcon,
  },
  {
    id: 'f5fbe8b1-54e8-4923-8fda-a5e49824133f',
    name: 'Settings',
    uri: '/settings',
    icon: SettingsApplicationsIcon,
  },
  {
    id: '3cd0b481-b57b-433b-a87b-e04c3a7a3d7e',
    name: 'Help',
    uri: '/help',
    icon: HelpIcon,
  },
];

const Item = ({ name, uri, icon: Icon }) => {
  const navigate = useNavigate();
  const onItemClick = (e) => {
    e.preventDefault();
    navigate(uri);
  };

  return (
    <ListItemButton onClick={onItemClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};

export const mainListItems = (
  <>
    {items.map(({ id, name, uri, icon }) => (
      <Item key={id} name={name} uri={uri} icon={icon} />
    ))}
  </>
);
