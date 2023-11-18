import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'Adicionar Trabalho',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'Todos os Trabalhos',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    text: 'Estatísticas',
    path: 'stats',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'Perfil',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'Configurações',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
