import React from 'react';

import List from '../../atoms/List/List';
import Links from '../../atoms/Links/Links';
import Container from '../../atoms/Container/Container';

import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <Container>
      <List isUntyled isInline className="navigation__list">
        <li className="navigation__item">
          <Links className={`navigation__link ${window.location.pathname === '/' ? 'navigation__link--active' : ''}`} location="/" text="Home" />
        </li>
        <li className="navigation__item">
          <Links className={`navigation__link ${window.location.pathname === '/apps' ? 'navigation__link--active' : ''}`} location="/apps" text="Apps" />
        </li>
      </List>
    </Container>
  </nav>
);

export default Navigation;
