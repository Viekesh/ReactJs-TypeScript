// import "./App.scss";
// import { ReactRouter } from "./ReactRouterDOM/ReactRouter";
// import { Provider } from "react-redux";
// import ConfigStore from "./Redux/Ex/ConfigStore";



// const App = () => {
//     return (
//         <>
//             <Provider store={ConfigStore}>
//                 <ReactRouter />
//             </Provider>
//         </>
//     )
// };


// export default App;






import { Provider } from "react-redux";
import BrowseRoutes from "./Redux/Ex/Ex1/BrowseRoutes";
import Store from "./Redux/Ex/Ex1/Store";

const App = () => {
    return (
        <>
            <Provider store={Store}>
                <BrowseRoutes />
            </Provider>
        </>
    )
}

export default App;