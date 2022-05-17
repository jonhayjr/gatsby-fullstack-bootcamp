import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <div>
       <Layout>
          <Head title='Contact'/>
          <h1>Contact</h1>
          <p>You can find me on Twitter <a href='https://twitter.com/JonHaymaker' target='_blank' rel='noreferrer'>@JonHaymaker</a>.</p>
        </Layout>
    </div>
  )
}

export default ContactPage;