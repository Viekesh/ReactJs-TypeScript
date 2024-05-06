import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";
import CoinGecko from "../Components/Projects/APIPro/CoinGecko/CoinGecko";
import Crypto from "../Components/Projects/APIPro/CoinGecko/Crypto";
import TrendingCrypto from "../Components/Projects/APIPro/CoinGecko/TrendingCrypto";
import Saved from "../Components/Projects/APIPro/CoinGecko/Saved";
import CryptoDetails from "../Components/Projects/APIPro/CoinGecko/CryptoDetails";
import CC from "../Components/Projects/APIPro/CurrencyConverter/CC";

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
                element: <Crypto />,
                children: [
                    {
                        path: ":CoinId",
                        element: <CryptoDetails />
                    }
                ]
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
    },
    {
        path: "CurrencyConverter",
        element: <CC />,
    }
]);

export const ReactRtr = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
};
