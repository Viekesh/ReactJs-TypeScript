import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../Navigation/BottomNav';
import TopNav from '../../Navigation/TopNav';
import BlogHeader from '../Components/BlogHeader';



const AddUpdateBlog = ({crudActive, setCrudActive}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title:"",
    tags: [],
    trending: "no",
    category: "",
    description: "",
  })

  return (
    <div>
      <TopNav />
      <BlogHeader crudActive={crudActive} setCrudActive={setCrudActive} />
      <BottomNav />
    </div>
  )
}

export default AddUpdateBlog;


