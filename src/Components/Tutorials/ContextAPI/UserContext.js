import { createContext } from "react";



const UserContext = createContext();

// context give us a provider, every context is a provider
// check below

// <UserContext>
// <Landing />
// <About />
// <SignUp />
// <Login />
// </UserContext>

// Above we have wrap 4 components in between <UserContext></ Usercontext>, now "UserContext" is a provider.

// With this context we need to make a provider, why we need to make provider? because provider provide us
// data, This data we able to provide those component which we have wrap in between <UserContext></ UserContext>



export default UserContext;