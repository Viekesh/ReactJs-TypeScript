import ReactTagInput from '@pathofdev/react-tag-input';
import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import "./Stylesheets/AddEditBlog.css";



const initialState = {
  title: "",
  tags: [],
  trending: "no",
  category: "",
  description: ""
}

// This is our dropdown list
const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sport",
  "Business"
];

const AddEditBlog = ({ active, setActive, user, setUser }) => {

  const [form, setForm] = useState(initialState);

  const [file, setFile] = useState(null);

  // Destructuring our input fields
  const { title, tags, trending, category, description } = form;

  const handleChange = () => { }

  const handleTags = () => { }

  const handleTrending = () => { }

  const onCategoryChange = () => { }

  return (
    <>
      <Navigation active={active} setActive={setActive} user={user} setUser={setUser} />
      <div className='add_edit_blogs'>
        <div className="blog_container">
          <div className="create_blog">

            <div className="create">
              Create
            </div>

            <form className="form_input_fields">
              <input
                className='input_field'
                type="text"
                name='title'
                placeholder='Enter Title'
                value={title}
                onChange={handleChange}
              />

              <ReactTagInput
                tags={tags}
                placeholder="Tags"
                onChange={handleTags}
              ></ReactTagInput>

              <div className="radio_selection">
                <p className="trending">It is trending blogs</p>
              </div>

              <input
                className='input_field form_check_input'
                type="radio"
                checked={trending === "yes"}
                name='radioOption'
                value="yes"
                onChange={handleTrending}
              />

              <label htmlFor="radioOption" className='form_check_label'>
                Yes &nbsp;
              </label>

              <input
                className='input_field form_check_input'
                type="radio"
                checked={trending === "no"}
                name='radioOption'
                value="no"
                onChange={handleTrending}
              />

              <label htmlFor="radioOption" className='form_check_label'>
                No &nbsp;
              </label>

              <div className="dropdown_menu">
                <select
                  className="category_dropdown"
                  value={category}
                  onChange={onCategoryChange}
                >

                  <option>Please Select Category</option>

                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}

                </select>
              </div>

              <textarea
                cols="30"
                rows="10"
                className="input_field form_control description_box"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>

              {/* You can get this file whenever you can upload any image file at zeroth index */}
              {/* So it will contain a single array of object */}
              <input
                className='input_field form_control'
                type="file"
                onChange={(evnt) => evnt.target.files}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEditBlog;