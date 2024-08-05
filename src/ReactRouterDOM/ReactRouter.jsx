import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";
import CoinGecko from "../Components/Projects/MiniPro/CoinGecko/CoinGecko";
import Crypto from "../Components/Projects/MiniPro/CoinGecko/Crypto";
import CryptoDetails from "../Components/Projects/MiniPro/CoinGecko/CryptoDetails";
import TrendingCrypto from "../Components/Projects/MiniPro/CoinGecko/TrendingCrypto";
import Saved from "../Components/Projects/MiniPro/CoinGecko/Saved";
import CC from "../Components/Projects/MiniPro/CurrencyConverter/CC";



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

export const ReactRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
};
