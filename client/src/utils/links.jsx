import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'adicionar trabalho',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'todos os trabalhos',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    text: 'estatísticas',
    path: 'stats',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'perfil',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'configurações',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
