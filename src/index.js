import React from 'react';
import Main from './Main';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <Main tab="home"/>
)