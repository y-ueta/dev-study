import { NextPage } from 'next';
import Link from 'next/link'
import React from 'react';

import { getBlogs } from '../../service/blogs';
import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigations'

interface ItemType {
  id: String,
  createdAt: String,
  updatedAt: String,
  title: String,
  date: String,
  content: String
}
interface BlogItemType {
  items: {
    id: String,
    createdAt: String,
    updatedAt: String,
    title: String,
    date: String,
    content: String
  }
}

const BlogItemStyle = {
  padding: 10,
  background: '#fcfcfe',
  marginTop: 10,
  boxShadow: '2px, 2px, 2px #888'
}

const BlogItem: React.FC<BlogItemType> = props => {
  const { id, title , date } = props.items;

  return (
    <div style={ BlogItemStyle }>
      <Link href="/blogs/[id]" as={`/blogs/${id}`}>
        <div>
          <span>{ date }</span>
          <span>{ title }</span>
        </div>
      </Link>
    </div>
  )
}

const Blogs: NextPage = (props: any) => {
  const { contents } = props;

  return (
    <div className="blog-container">
      <Head title="Blogs page" description="" url="" ogImage="" />
      <Navigation />
      {
        contents.map( item => <BlogItem items={ item } key={ item.id } />)
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await getBlogs();
  return { props: { contents: data.contents } };
}

export default Blogs;