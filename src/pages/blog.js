import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head';

import * as blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }`
);

const blogs = data.allContentfulBlogPost.edges.map((d, index) => (
  <li key={index} className={blogStyles.post}>
    <Link to={`/blog/${d.node.slug}`}>
      <h2>{d.node.title}</h2>
      <p>{d.node.publishedDate}</p>
    </Link>
  </li>
));


  return (
    <div>
       <Layout>
          <Head title='Blog'/>
          <h1>Blog</h1>
          <ol className={blogStyles.posts}>
            {blogs}
          </ol>
        </Layout>
    </div>
  )
}

export default BlogPage;