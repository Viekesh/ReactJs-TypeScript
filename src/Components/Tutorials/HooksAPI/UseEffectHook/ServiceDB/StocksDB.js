const dataSet = [
    {
        id: "1",
        sym: "H",
        name: "Hyatt Hotels Corporation",
        current: 85.74,
        open: 85.44,
        marketCap: "8.81B",
        high: 85.89,
        low: 85.11,
        prevClose: 85.35
    },
    {
        id: "2",
        sym: "TSLA",
        name: "Tesla Inc.",
        current: 393.15,
        open: 380.63,
        marketCap: "70.86B",
        high: 395.22,
        low: 380.58,
        prevClose: 378.99
    },
    {
        id: "3",
        sym: "GOOG",
        name: "Alphabet Inc.",
        current: 1352.62,
        open: 1356.6,
        marketCap: "932.47B",
        high: 1360.47,
        low: 1351.0,
        prevClose: 1355.12
    },
    {
        id: "4",
        sym: "FB",
        name: "Facebook, Inc.",
        current: 202.5,
        open: 200.09,
        marketCap: "577.48B",
        high: 204.3,
        low: 200.09,
        prevClose: 198.39
    }
];

export const getRates = () => Promise.resolve(
    dataSet.map(d => {
        return {
            id: d.id,
            sym: d.sym,
            name: d.name,
            current: d.current
        };
    })
);

export const getDetails = sym => Promise.resolve(
    dataSet.filter(d => d.sym === sym)
);
