import "./App.scss";
import { ReactRouter } from "./ReactRouterDOM/ReactRouter";
import { Provider } from "react-redux";
// import Store from "./Redux/Redux";
import ConfigStore from "./Redux/Ex/ConfigStore";



const App = () => {
    return (
        <>
            <Provider store={ConfigStore}>
                <ReactRouter />
            </Provider>
        </>
    )
};

export default App;