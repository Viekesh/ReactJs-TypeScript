import ReactTagInput from '@pathofdev/react-tag-input';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { database, storage } from '../../../firebaseCon';
import Navigation from '../Components/Navigation';
import "./Stylesheets/AddEditBlog.scss";



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

  const [progress, setProgress] = useState(null);

  // Destructuring our input fields
  const { title, tags, trending, category, description } = form;

  // console.log(form);

  const id = useParams();

  // This is for uploading the file, the useEffect only run when we have the file
  // "ref" coming from firebase storage, "storage" coming from firebaseConfig file
  useEffect(() => {
    const uploadFile = () => {

      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log("Upload is progress" + progress + ", % is done");

        setProgress(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
        
      }, (error) => {
        console.log(error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          alert("Image Uploaded In Firebase Successfully");
          setForm((prev) => ({ ...prev, imageUrl: downloadUrl }));
        });
      });
    }

    file && uploadFile();
  }, [file]);

  // "e" means event
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleTrending = (e) => {
    setForm({...form, trending : e.target.value})
  };

  const onCategoryChange = (e) => {
    setForm({...form, category : e.target.value})
  }

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here we check whether each value is provided by our user or not
    // If user have the value in different different input field then only this code can
    // allowed to create a blog
    if(category && tags && title && file && description && trending) {

      try {
        await addDoc(collection(database, "BlogApp1Data"), {
          ...form,
          timestamp : serverTimestamp(),
          author : user.displayName,
          id : user.uid
        })
      } catch(error) {
        console.log(error.message);
      }

    }

    navigate("/BlogLandingPage")
  }

  // We have to also protect our create link, suppose user logout from this application
  // and whenever user can click on "Create" link he should navigate back to home page
  // So we can protect our link when user is not authorised in our application

  return (
    <>
      <Navigation active={active} setActive={setActive} user={user} setUser={setUser} />
      <div className='add_edit_blogs'>
        <div className="blog_container">
          <div className="create_blog">

            <h2>Create</h2>

            <form className="form_input_fields" onSubmit={handleSubmit}>
              <input
                className='input_field'
                type="text"
                name='title'
                placeholder='Enter Title'
                value={title}
                onChange={handleChange}
              />

              <div className="input_field react_tag">
                <ReactTagInput
                  tags={tags}
                  placeholder="Tags"
                  onChange={handleTags}
                ></ReactTagInput>
              </div>

              <div className="radio_selection">
                <p className="trending">It is trending blogs</p>
              </div>

              <input
                className='form_check_input'
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
                className='form_check_input'
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
                  className="input_field category_dropdown"
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
                rows="6"
                className="input_field form_control description_box"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>

              {/* You can get this file whenever you can upload any image file at 0th index */}
              {/* So it will contain a single array of objects so you can access that object at 0th index because it contain only one single array of object */}
              <input
                className='input_field file_control'
                type="file"
                onChange={(evnt) => setFile(evnt.target.files[0])}
              />

              <button
                type='submit'
                className="input_field btn btn_add"
                disabled={progress !== null && progress < 100}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEditBlog;