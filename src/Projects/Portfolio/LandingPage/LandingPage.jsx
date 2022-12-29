import { useEffect, useState } from "react";
import { auth } from "../../../FirebaseConfig";
import BottomNav from "../Navigation/BottomNav";
import TopNav from "../Navigation/TopNav";
import Greet from "./Greet";
import HeadContent from "./HeadContent";
import "./LandingPage.scss";

const LandingPage = () => {

  // if user logged in then we will greet him and if there is no user then we show the "<HeadContent />"
  // component
  // for this we use useState() and useEffect hook
  const [usersname, setUsersName] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        setUsersName(authUser);
      } else {
        setUsersName(null);
      }
    });
  }, []);

  const userId = usersname?.uid;
  const name = usersname?.displayName;

  // console.log("userId", userId);
  console.log("name", name);
  // console.log(auth.currentUser);

  return (
    <>
      <header>
        <TopNav />
        <main>
          {userId ?  <Greet /> : <HeadContent />}
        </main>
        <BottomNav />
      </header>
    </>
  )
}

export default LandingPage;


