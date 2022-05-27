import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divisas, searchCoin, SetDivisa } from "../reducer/action";
import Convert from "./convert";
import Graficos from "./graficos";
import SearchBar from "./searchBar";
import {
  ContenedorInfo,
  DivContainerInfo,
  MarketInfo,
  PorcenSpan,
  SimboloSpan,
  CardDataPrice,
  Supply,
  ContenedorGrafico,
  Contenedor,
} from "./styled";

const Info = () => {
  const dispatch = useDispatch();
  const url = window.location.href;
  const id = url
    .split("/")
    .filter((x) => x)
    .pop();
  const coin = useSelector((e) => e.info);
  const divisas = useSelector((e) => e.divisas);

  useEffect(() => {
    dispatch(searchCoin(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(Divisas());
    dispatch(SetDivisa(divisas));
  }, [dispatch, divisas]);

  const FormatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 10,
      style: "currency",
      currency: divisas ? divisas : "usd",
    }).format(number);
  };
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <Contenedor>
        <ContenedorInfo>
          <div>
            <p className="rank">RANK #{coin.market_cap_rank}</p>
            <DivContainerInfo className="flex">
              <img src={coin.image?.small} />
              <h2>
                {coin.name} <SimboloSpan>{coin.symbol}</SimboloSpan>
              </h2>
            </DivContainerInfo>
          </div>
          <DivContainerInfo>
            <div className="end">
              <div>
                <h2>
                  {FormatNumber(coin.market_data?.current_price[divisas])}{" "}
                  <PorcenSpan
                    porsen={
                      coin.market_data?.price_change_percentage_24h_in_currency[
                        divisas
                      ]
                    }
                  >
                    {coin.market_data?.price_change_percentage_24h_in_currency[
                      divisas
                    ].toFixed(2)}
                  </PorcenSpan>
                </h2>
              </div>
              <div className="priceCrypto">
                <p>
                  {coin.market_data?.current_price.btc} BTC{" "}
                  <span
                    porsen={
                      coin.market_data?.price_change_percentage_24h_in_currency
                        .btc
                    }
                  >
                    {coin.market_data?.price_change_percentage_24h_in_currency.btc.toFixed(
                      2
                    )}
                  </span>
                </p>
                <p>
                  {coin.market_data?.current_price.eth} ETH{" "}
                  <span
                    porsen={
                      coin.market_data?.price_change_percentage_24h_in_currency
                        .eth
                    }
                  >
                    {coin.market_data?.price_change_percentage_24h_in_currency.eth.toFixed(
                      2
                    )}
                  </span>
                </p>
              </div>
            </div>
          </DivContainerInfo>
          <Supply>
            <div className="infoSupp">
              <p>Circulating Supply</p>{" "}
              <span>{FormatNumber(coin.market_data?.circulating_supply)}</span>
            </div>
            <div className="infoSupp">
              <p>Total Supply</p>{" "}
              <span>{FormatNumber(coin.market_data?.total_supply)}</span>
            </div>
            <div className="infoSupp">
              <p>Max Supply</p>{" "}
              <span>{FormatNumber(coin.market_data?.max_supply)}</span>
            </div>
          </Supply>
          <MarketInfo>
            <CardDataPrice>
              <h3>Market Cap</h3>{" "}
              <p>{FormatNumber(coin.market_data?.market_cap[divisas])}</p>
            </CardDataPrice>
            <CardDataPrice>
              <h3>Diluted Market Cap</h3>{" "}
              <p>
                {coin.market_data?.fully_diluted_valuation[divisas]
                  ? FormatNumber(
                      coin.market_data?.fully_diluted_valuation[divisas]
                    )
                  : "None"}
              </p>
            </CardDataPrice>
            <CardDataPrice>
              <h3>Volume Market Cap</h3>{" "}
              <p>{FormatNumber(coin.market_data?.total_volume[divisas])}</p>
            </CardDataPrice>
          </MarketInfo>
        </ContenedorInfo>
        <ContenedorGrafico>
          <div>
            <div>
              <Graficos
                chartID="pie-two"
                coin={id}
                currency={divisas}
                day={1}
              />
            </div>
            <Convert coin={coin.symbol}/>
          </div>
          <div
            style={{
              backgroundColor: "#d9d9d9",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "100px",
            }}
          >
            <h2>{coin.name} general information</h2>
            <Supply style={{ margin: "auto" }}>
              {/* Today */}
              <div className="infoSupp">
                <p>Price</p>{" "}
                <span>
                  {FormatNumber(coin.market_data?.current_price[divisas])}
                </span>
              </div>
              <div className="infoSupp">
                <p>Price change 24h</p>{" "}
                <span>
                  {FormatNumber(
                    coin.market_data?.price_change_24h_in_currency[divisas]
                  )}
                </span>
              </div>
              <div className="infoSupp">
                <p>24h low</p>{" "}
                <span>{FormatNumber(coin.market_data?.low_24h[divisas])}</span>
              </div>
              <div className="infoSupp">
                <p>24h high</p>{" "}
                <span>{FormatNumber(coin.market_data?.high_24h[divisas])}</span>
              </div>
              <div className="infoSupp">
                <p>Market Rank</p> <span>#{coin.market_cap_rank}</span>
              </div>
              {/* History */}
              <div className="infoSupp">
                <p>All-Time High</p>{" "}
                <span>{FormatNumber(coin.market_data?.ath[divisas])}</span>
              </div>
              <div className="infoSupp">
                <p>All-Time low</p>{" "}
                <span>{FormatNumber(coin.market_data?.atl[divisas])}</span>
              </div>
              {/* Market Cap */}
              <div className="infoSupp">
                <p>Market Cap</p>{" "}
                <span>
                  {FormatNumber(coin.market_data?.market_cap[divisas])}
                </span>
              </div>
              <div className="infoSupp">
                <p>Diluted Market Cap</p>{" "}
                <span>
                  {FormatNumber(
                    coin.market_data?.fully_diluted_valuation[divisas]
                  )}
                </span>
              </div>
              {/* Supply */}
              <div className="infoSupp">
                <p>Circulating Supply</p>{" "}
                <span>
                  {FormatNumber(coin.market_data?.circulating_supply)}
                </span>
              </div>
              <div className="infoSupp">
                <p>Total Supply</p>{" "}
                <span>{FormatNumber(coin.market_data?.total_supply)}</span>
              </div>
              <div className="infoSupp">
                <p>Max Supply</p>{" "}
                <span>{FormatNumber(coin.market_data?.max_supply)}</span>
              </div>
            </Supply>
          </div>
        </ContenedorGrafico>
      </Contenedor>
    </div>
  );
};
export default Info;

//#121212 bg body
