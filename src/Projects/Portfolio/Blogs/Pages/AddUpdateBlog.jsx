import ReactTagInput from "@pathofdev/react-tag-input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../../../../FirebaseConfig";
import PageHeading from "../../LandingPage/PageHeading";
import BottomNav from "../../Navigation/BottomNav";
import TopNav from "../../Navigation/TopNav";
import { v4 as uuidv4 } from "uuid";
import "./FormStyleSheet.scss";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
          setFormData((prev) => ({ ...prev, imageUrl: downloadUrl }));
        });
      });
    }

    file && uploadFile();
  }, [file]);

  const handleSubmit = () => {};

  const handleTags = () => {};

  const handleTrending = () => {};

  const onCategoryChange = () => {};

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
              onChange={handleSubmit}
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
                <option value={option || ""} key={index}>
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
              onChange={handleSubmit}
            ></textarea>
          </div>

          <div className="for_img ">
            <input
              type="file"
              className="f_control_child"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="blog_form_button ">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <div className="empty"></div>
    </>
  );
};

export default AddUpdateBlog;


