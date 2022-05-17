import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <div>
        <Layout>
          <Head title='About'/>
          <h1>About</h1>
          <p>My name is Jon and I like to code.  This recently became a passion of mine after I had some time to dig deeper.  The pandemic slowed everything down which gave me some time to focus on career development.  I completed the Front-End Techdegree through Team Treehouse and I was hooked.  A few months later, I completed the Full Stack JavaScript Techdegree through Team Treehouse.</p>
          <Link to='/contact'>Contact me</Link>
        </Layout>
    </div>
  )
}

export default AboutPage;