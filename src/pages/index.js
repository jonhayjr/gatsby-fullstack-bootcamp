import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const Home = () => {
  return (
    <div>
      <Layout>
        <Head title="Home"/>
        <h1>Hello</h1>
        <h2>I'm Jon, a React developer living in beautiful, Santa Barbara, California.</h2>
        <p>Need a developer?  <Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default Home;