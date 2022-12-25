import React from 'react'
import BottomNav from '../../Navigation/BottomNav';
import TopNav from '../../Navigation/TopNav';
import BlogHeader from '../Components/BlogHeader';

const AddUpdateBlog = ({crudActive, setCrudActive}) => {
  return (
    <div>
      <TopNav />
      <BlogHeader crudActive={crudActive} setCrudActive={setCrudActive} />
      <BottomNav />
    </div>
  )
}

export default AddUpdateBlog;