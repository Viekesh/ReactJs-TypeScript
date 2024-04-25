import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";
import CoinGecko from "../Components/Projects/APIPro/CoinGecko/CoinGecko";
import Crypto from "../Components/Projects/APIPro/CoinGecko/Crypto";
import TrendingCrypto from "../Components/Projects/APIPro/CoinGecko/TrendingCrypto";
import Saved from "../Components/Projects/APIPro/CoinGecko/Saved";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "CoinGecko",
        element: <CoinGecko />,
        children: [
            {
                path: "Crypto",
                element: <Crypto />
            },
            {
                path: "TrendingCrypto",
                element: <TrendingCrypto />
            },
            {
                path: "Saved",
                element: <Saved />
            },
        ]
    }
]);

export const ReactRtr = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
};
