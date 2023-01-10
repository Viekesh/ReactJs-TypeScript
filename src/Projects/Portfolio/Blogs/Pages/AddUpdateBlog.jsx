import ReactTagInput from "@pathofdev/react-tag-input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../../../../FirebaseConfig";
import PageHeading from "../../LandingPage/PageHeading";
import BottomNav from "../../Navigation/BottomNav";
import TopNav from "../../Navigation/TopNav";
import { v4 as uuidv4 } from "uuid";
import "./FormStyleSheet.scss";
import { ref, uploadBytesResumable } from "firebase/storage";

const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sports",
  "Buisness",
];

const AddUpdateBlog = ({ crudActive, setCrudActive }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    trending: "no",
    category: "",
    description: "",
  });

  const { title, tags, trending, category, description } = formData;

  const [file, setFile] = useState(null);

  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const uploadFile = async (image) => {
      return new Promise((resolve, reject) => {

        // in order to keep image completly unique, for ex the person upload the same image two times then we
        // add some random numbers and letters, in order to do that we use a package called "uuid".
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on("state_changed", (snapshot) => {

          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          
        })
      })
    }
  })

  const afterClickOnCreateBlogInput = () => { }

  const handleTags = () => { }

  const handleTrending = () => { }

  const onCategoryChange = () => { }

  return (
    <>
      <TopNav />
      <PageHeading heading="Add Update Blog" />
      <BottomNav />

      <section className="form">

        <form>
          <div className="for_title ">
            <input
              type="text"
              placeholder="Title"
              className="f_control_child"
              id="title"
              value={title}
              onChange={afterClickOnCreateBlogInput}
            />
          </div>

          <div className="for_tag .f_control_child">
            <ReactTagInput
              tags={tags}
              placeholder="Tags"
              onChange={handleTags}
            />
          </div>

          <div className="for_trending .f_control_child x_axis_center">
            <p>is it trending blog?</p>
            <label htmlFor="radioOption">Yes &nbsp;</label>
            <input
              type="radio"
              placeholder="Title"
              value="yes"
              name="radioOption"
              checked={trending === "yes"}
              onChange={handleTrending}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <label htmlFor="radioOption">No &nbsp;</label>
            <input
              type="radio"
              value="no"
              name="radioOption"
              checked={trending === "no"}
              onChange={handleTrending}
            />
          </div>

          <div className="for_category ">
            <select
              name=""
              id=""
              className="f_control_child"
              value={category}
              onChange={onCategoryChange}
            >
              <option value="">Please Select Category</option>
              {categoryOption.map((option, index) => (
                <option
                  value={option || ""}
                  key={index}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="for_description ">
            <textarea
              name=""
              id=""
              className="f_control_child"
              cols="30"
              rows="9"
              placeholder="Start From Here"
              value={description}
              onChange={afterClickOnCreateBlogInput}
            >
            </textarea>
          </div>

          <div className="for_img ">
            <input
              type="file"
              className="f_control_child"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="blog_form_button ">
            <button type="submit">
              Submit
            </button>
          </div>

        </form>
      </section>
      <div className="empty"></div>
    </>
  );
};

export default AddUpdateBlog;


