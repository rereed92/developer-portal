import React from 'react';

import Heading from '../../atoms/Heading/Heading';
import Container from '../../atoms/Container/Container';
import Links from '../../atoms/Links/Links';

import './Home.scss';

const Home = () => (
  <div className="home">
    <Container>
      <Heading level={1} className="home__heading">
        Welcome to the Developer Portal
      </Heading>

      <p>In this portal, you can view your apps and their corresponding users</p>
      <Links location="/apps" text="View apps" />
    </Container>
  </div>
);

export default Home;
