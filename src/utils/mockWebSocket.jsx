export const startPriceSimulation = (dispatch, getState, updateAction) => {
    setInterval(() => {
        const state = getState();
        const assets = state.crypto.assets;

        const updated = assets.map(asset => ({
            id: asset.id,
            price: +(asset.price * (0.99 + Math.random() * 0.02)).toFixed(2),
            change1h: +(Math.random() * 4 - 2).toFixed(2),
            change24h: +(Math.random() * 10 - 5).toFixed(2),
            volume24h:Math.floor(Math.random() * 10000000000).toLocaleString()
        }));

        updated.forEach(data => dispatch(updateAction(data)));
    }, 1500);
};
