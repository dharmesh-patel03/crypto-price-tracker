import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa"; // filled and outlined stars
import { toggleFavorite } from '../features/crypto/cryptoSlice'; // Correct import of toggleFavorite action

const CryptoTable = () => {
    const dispatch = useDispatch();
    const assets = useSelector((state) => state.crypto.assets);
    // const toggleFavorite=useSelector((state) => state.crypto.toggleFavorite);

    return (
        <div className="overflow-x-auto p-4 bg-gray-50 min-h-screen">
            <table className="min-w-[1000px] w-full text-sm text-left bg-white border border-gray-200 shadow-lg rounded-lg">
                <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
                    <tr>
                        <th className="p-3 text-center"></th>
                        <th className="p-4 font-bold">#</th>
                        <th className="p-4 text-center font-bold">Name</th>
                        <th className="p-4 text-center font-bold">Symbol</th>
                        <th className="p-4 text-center font-bold">Price ($)</th>
                        <th className="p-4 text-center font-bold">1h %</th>
                        <th className="p-4 text-center font-bold">24h %</th>
                        <th className="p-4 text-center font-bold">7d %</th>
                        <th className="p-4 text-center font-bold">Market Cap</th>
                        <th className="p-4 text-center font-bold">24h Volume</th>
                        <th className="p-4 text-center font-bold">Circulating Supply</th>
                        <th className="p-4 text-center font-bold">Max Supply</th>
                        <th className="p-4 text-center font-bold">7D Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset, index) => (
                        <tr
                            key={asset.id}
                            className="border-t border-gray-200 hover:bg-gray-200 cursor-pointer  transition"
                        >
                            <td className="p-3 text-center">
                                {asset.favorite ? (
                                    <FaStar
                                        className="text-yellow-500 cursor-pointer"
                                        onClick={() => dispatch(toggleFavorite(asset.id))}
                                    />
                                ) : (
                                    <FaRegStar
                                        className="text-gray-400 cursor-pointer"
                                        onClick={() => dispatch(toggleFavorite(asset.id))}
                                    />
                                )}
                            </td>
                            <td className="p-4 text-center font-medium text-gray-700">{index + 1}</td>
                            <td className="p-4 flex items-center gap-3 justify-center font-medium text-gray-800">
                                <img src={asset.logo} alt={asset.symbol} className="w-6 h-6" />
                                <span>{asset.name}</span>
                            </td>
                            <td className="p-4 text-center text-gray-600">{asset.symbol}</td>
                            <td className="p-4 text-center font-semibold text-gray-800">${asset.price.toLocaleString()}</td>

                            <td className={`p-4 font-semibold text-center ${asset.change1h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                <div className="flex items-center justify-center gap-1">
                                    {asset.change1h >= 0 ? <IoMdArrowDropup className="text-xl" /> : <IoMdArrowDropdown className="text-xl" />}
                                    {asset.change1h}%
                                </div>
                            </td>

                            <td className={`p-4 font-semibold text-center ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                <div className="flex items-center justify-center gap-1">
                                    {asset.change24h >= 0 ? <IoMdArrowDropup className="text-xl" /> : <IoMdArrowDropdown className="text-xl" />}
                                    {asset.change24h}%
                                </div>
                            </td>

                            <td className={`p-4 font-semibold text-center ${asset.change7d >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                <div className="flex items-center justify-center gap-1">
                                    {asset.change7d >= 0 ? <IoMdArrowDropup className="text-xl" /> : <IoMdArrowDropdown className="text-xl" />}
                                    {asset.change7d}%
                                </div>
                            </td>

                            <td className="p-4 text-center  text-gray-600">{asset.marketCap}</td>
                            <td className="p-4 text-center text-gray-600">${asset.volume24h}</td>
                            <td className="p-4 text-center text-gray-600">{asset.supply}</td>
                            <td className="p-4 text-center text-gray-600">{asset.maxSupply}</td>
                            <td className="p-4 text-center">
                                <img src={asset.chart} alt="chart" className="h-8 mx-auto" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
