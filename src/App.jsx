import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { updateAsset,toggleFavorite  } from './features/crypto/cryptoSlice';
import { startPriceSimulation } from './utils/mockWebSocket';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    startPriceSimulation(dispatch, store.getState, updateAsset,toggleFavorite);
  }, [dispatch, store]);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}
export default App;
