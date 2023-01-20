import { useEffect, useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./FormStyleSheet.scss";
import TopNav from "../../Navigation/TopNav";
import BottomNav from "../../Navigation/BottomNav";
import PageHeading from "../../LandingPage/PageHeading";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { database, storage } from "../../../../FirebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";



const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sports",
  "Buisness",
];



const AddUpdateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    trending: "no",
    category: "",
    description: "",
  });

  // destructure the initial values (formData information) which we have defined in the above "useState" hook otherwise
  // we will get error
  const { title, tags, trending, category, description } = formData;

  // We have to persist loggedIn user in our application and we need some user information as well
  // like display name, So here we can define useState (const [user, setUser] = useState(null);)
  // Initially it will be null
  const [user, setUser] = useState(null);

  const [file, setFile] = useState(null);

  const [progress, setProgress] = useState(null);

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
          setFormData((prev) => ({ ...prev, imageUrl: downloadUrl }));
        });
      });
    }

    file && uploadFile();
  }, [file]);

  // "e" means event
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleTags = (tags) => {
    setFormData({ ...formData, tags });
  };

  const handleTrending = (e) => {
    setFormData({ ...formData, trending: e.target.value })
  };

  const onCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value })
  }

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here we check whether each value is provided by our user or not
    // If user have the value in different different input field then only this code can
    // allowed to create a blog
    if (category && tags && title && file && description && trending) {

      try {
        await addDoc(collection(database, "BlogApp1Data"), {
          ...formData,
          timestamp: serverTimestamp(),
          author: user.displayName,
          id: user.uid
        })
      } catch (error) {
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
      <TopNav />
      <PageHeading heading="AddUpdateBlog" />
      <BottomNav />
      <section className="blog_create">
        <form className="user_blog_info">
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Title"
            className="form_control"
          />

          <div className="for tag form_control">
            <ReactTagInput
              id="tags"
              tags={tags}
              placeholder="Tags"
            />
          </div>

          <div className="for_trending">
            <p>is it trending blog?</p>
            <label htmlFor="radioOption">Yes &nbsp;</label>
            <input
              type="radio"
              placeholder="Title"
              value="yes"
              name="radioOption"
              checked={trending === "yes"}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="radioOption">No &nbsp;</label>
            <input
              type="radio"
              value="no"
              name="radioOption"
              checked={trending === "no"}
            />
          </div>

          <div className="for_category form_control">
            <select
              name=""
              id=""
              className="f_control_child"
              value={category}
            >
              <option value="">Please Select Category</option>
              {categoryOption.map((option, index) => (
                <option value={option || ""} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={description}
            className="form_control"
          ></textarea>

          <div className="for_img">
            <input
              type="file"
              className="f_control_child"
            />
          </div>

          <div className="submit_button">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="three_vh"></div>
      </section>
    </>
  );
};

export default AddUpdateBlog;

// import ReactTagInput from "@pathofdev/react-tag-input";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, storage } from "../../../../FirebaseConfig";
// import PageHeading from "../../LandingPage/PageHeading";
// import BottomNav from "../../Navigation/BottomNav";
// import TopNav from "../../Navigation/TopNav";
// import { v4 as uuidv4 } from "uuid";
// import "./FormStyleSheet.scss";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// const categoryOption = [
//   "Fashion",
//   "Technology",
//   "Food",
//   "Politics",
//   "Sports",
//   "Buisness",
// ];

// const AddUpdateBlog = ({ crudActive, setCrudActive }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     tags: [],
//     trending: "no",
//     category: "",
//     description: "",
//   });

//   const { title, tags, trending, category, description } = formData;

//   const [file, setFile] = useState(null);

//   const [progress, setProgress] = useState(null);

//   useEffect(() => {
//     const uploadFile = () => {

//       const storageRef = ref(storage, file.name);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on("state_changed", (snapshot) => {

//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//         console.log("Upload is progress" + progress + ", % is done");

//         setProgress(progress);

//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }

//       }, (error) => {
//         console.log(error);
//       }, () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
//           alert("Image Uploaded In Firebase Successfully");
//           setFormData((prev) => ({ ...prev, imageUrl: downloadUrl }));
//         });
//       });
//     }

//     file && uploadFile();
//   }, [file]);

//   const handleSubmit = () => {};

//   const handleTags = () => {};

//   const handleTrending = () => {};

//   const onCategoryChange = () => {};

//   return (
//     <>
//       <TopNav />
//       <PageHeading heading="Add Update Blog" />
//       <BottomNav />

//       <section className="form">
//         <form>
//           <div className="for_title ">
//             <input
//               type="text"
//               placeholder="Title"
//               className="f_control_child"
//               id="title"
//               value={title}
//               onChange={handleSubmit}
//             />
//           </div>

// <div className="for_tag .f_control_child">
//   <ReactTagInput
//     tags={tags}
//     placeholder="Tags"
//     onChange={handleTags}
//   />
// </div>

//           <div className="for_trending .f_control_child x_axis_center">
//             <p>is it trending blog?</p>
//             <label htmlFor="radioOption">Yes &nbsp;</label>
//             <input
//               type="radio"
//               placeholder="Title"
//               value="yes"
//               name="radioOption"
//               checked={trending === "yes"}
//               onChange={handleTrending}
//             />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <label htmlFor="radioOption">No &nbsp;</label>
//             <input
//               type="radio"
//               value="no"
//               name="radioOption"
//               checked={trending === "no"}
//               onChange={handleTrending}
//             />
//           </div>

          // <div className="for_category ">
          //   <select
          //     name=""
          //     id=""
          //     className="f_control_child"
          //     value={category}
          //     onChange={onCategoryChange}
          //   >
          //     <option value="">Please Select Category</option>
          //     {categoryOption.map((option, index) => (
          //       <option value={option || ""} key={index}>
          //         {option}
          //       </option>
          //     ))}
          //   </select>
          // </div>

//           <div className="for_description ">
//             <textarea
//               name=""
//               id=""
//               className="f_control_child"
//               cols="30"
//               rows="9"
//               placeholder="Start From Here"
//               value={description}
//               onChange={handleSubmit}
//             ></textarea>
//           </div>

          // <div className="for_img ">
          //   <input
          //     type="file"
          //     className="f_control_child"
          //     onChange={(e) => setFile(e.target.files[0])}
          //   />
          // </div>

          // <div className="blog_form_button ">
          //   <button type="submit">Submit</button>
          // </div>
//         </form>
//       </section>
//       <div className="empty"></div>
//     </>
//   );
// };

// export default AddUpdateBlog;
