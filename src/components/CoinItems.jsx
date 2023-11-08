import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const CoinItems = ({ coin }) => {
  //state
  const [savedCoin, setSavedCoin] = useState(false);

  // star iconStyle
  const star = "cursor-pointer hover:scale-125"

  const { user } = UserAuth();

  //add data from firebase firestore
  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoinHandler = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("Please sign in to save a coin to your watch list");
    }
  };

  return (
    <tr key={coin?.id} className="h-[80px] border-b overflow-hidden">
      <td onClick={saveCoinHandler}>
        {savedCoin ? <AiFillStar className={star}/> : <AiOutlineStar className={star}/>}
      </td>
      <td>{coin?.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin?.id}`}>
          <div className="flex items-center">
            <img
              src={coin?.image}
              alt="image"
              className="w-6 mr-2 rounded-full"
            />
            <p className="hidden sm:table-cell">{coin?.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin?.symbol.toUpperCase()}</td>
      <td>$ {coin?.current_price.toLocaleString()}</td>
      <td>
        {coin?.price_change_percentage_24h > 0 ? (
          <p className="text-green-500">
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-500">
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w[180px] hidden md:table-cell">
        $ {coin?.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        $ {coin?.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d?.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItems;
