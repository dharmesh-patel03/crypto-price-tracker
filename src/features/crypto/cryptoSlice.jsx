import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    assets: [
        {
            id: 1,
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 65000,
            change1h: 0.5,
            change24h: 2.1,
            change7d: -1.3,
            marketCap: '1.2T',
            volume24h: '37,200,351,747',
            supply: '19M',
            maxSupply: '21M',
            logo: '/assets/btc.png',
            chart: '/assets/chart-btc.svg',
        },
        {
            id: 2,
            name: 'Ethereum',
            symbol: 'ETH',
            price: 3200,
            change1h: -0.3,
            change24h: 1.5,
            change7d: 3.2,
            marketCap: '500B',
            volume24h: '18,500,300,559',
            supply: '120M',
            maxSupply: '145B',
            logo: '/assets/eth.png',
            chart: '/assets/chart-eth.svg',
        },
        {
            id: 3,
            name: 'Tether',
            symbol: 'USDT',
            price: 1.00,
            change1h: 0.0,
            change24h: 0.1,
            change7d: 0.0,
            marketCap: '100B',
            volume24h: '80,430,500,220',
            supply: '100B',
            maxSupply: '120M',
            logo: '/assets/usdt.png',
            chart: '/assets/chart-usdt.svg',
        },
        {
            id: 4,
            name: 'BNB',
            symbol: 'BNB',
            price: 550,
            change1h: -0.2,
            change24h: 0.9,
            change7d: 1.5,
            marketCap: '85B',
            volume24h: '4,480,973,350',
            supply: '170M',
            maxSupply: '200M',
            logo: '/assets/bnb.png',
            chart: '/assets/chart-bnb.svg',
        },
        {
            id: 5,
            name: 'XRP',
            symbol: 'XRP',
            price: 0.6,
            change1h: 0.1,
            change24h: -1.2,
            change7d: 4.0,
            marketCap: '35B',
            volume24h: '1,520,309,450',
            supply: '52B',
            maxSupply: '100B',
            logo: '/assets/xrp.png',
            chart: '/assets/chart-xrp.svg',
        }
    ]
};


const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updateAsset: (state, action) => {
            const index = state.assets.findIndex(a => a.id === action.payload.id);
            if (index !== -1) {
                state.assets[index] = {
                    ...state.assets[index],
                    ...action.payload,
                };
            }
        },
        toggleFavorite: (state, action) => {
            const id = action.payload;
            const asset = state.assets.find((a) => a.id === id);
            if (asset) {
                asset.favorite = !asset.favorite;
            }
        },
    },
});

export const { updateAsset, toggleFavorite } = cryptoSlice.actions;
export default cryptoSlice.reducer;
