import React from "react";
import {
  bch,
  bitcoin,
  bnb,
  crypto_img,
  cyn_sign,
  doge,
  etherium,
  euro_sign,
  ltc,
  missionchart,
  pounds_sign,
  tether,
  try_sign,
  usdc,
  usd_sign,
  visionchart,
} from "../../assets/images";
import { motion } from "framer-motion";

const Cryptos = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="pt-24 px-6 lg:px-16 flex justify-center">
      <div className="container text-neutral md:p-24 p-8 mx-auto bg-[#175754] bg-opacity-5 rounded-2xl">
        <div className="text-center mb-16 w-full flex justify-center">
          <h1 className="sm:text-4xl text-xl font-bold title-font text-gray-900 mb-4 md:w-10/12">
            The currency pairs we trade on Cryptocurrencies and other
            Cryptocurrencies.
          </h1>
        </div>

        <div className="flex flex-col">
          {/* Count */}
          {/* <div className="flex flex-wrap w-full"> */}
          <div className="stats bg-transparent">
            <div className="stat place-items-center border-none">
              <img src={bitcoin} alt={bitcoin} />
              <div className="stat-value text-sm text-neutral">Bitcoin</div>
            </div>
            <div className="stat place-items-center border-none">
              <img src={tether} alt={tether} />
              <div className="stat-value text-sm text-neutral">Tether</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={etherium} alt={etherium} />
              <div className="stat-value text-sm text-neutral">Ethereum</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={bnb} alt={bnb} />
              <div className="stat-value text-sm text-neutral">BNB</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={ltc} alt={ltc} />
              <div className="stat-value text-sm text-neutral">LTC</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={usdc} alt={usdc} />
              <div className="stat-value text-sm text-neutral">USDC</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={bch} alt={bch} />
              <div className="stat-value text-sm text-neutral">BCH</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={doge} alt={doge} />
              <div className="stat-value text-sm text-neutral">Doge coin</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 w-full flex flex-col justify-center items-center">
          <p className="sm:text-sm text-base font-medium title-font text-gray-900 my-10 md:w-6/12">
            If you would like to trade or swap any other crypto not on this
            list, please contact us here to do that.
          </p>

          <a
            href="https://wa.me/message/RFB4WFBPM6WTL1"
            target="_blank"
            className="py-3 px-8 rounded-2xl font-bold text-center text-white bg-orange-400"
            rel="noreferrer">
            CONTACT US
          </a>

          <h1 className="sm:text-4xl mt-16 text-xl font-bold title-font text-gray-900 mb-4 md:w-10/12">
            We swap the following fiat currencies for the Nigerian naira
          </h1>
        </div>

        <div className="flex flex-col">
          {/* Count */}
          {/* <div className="flex flex-wrap w-full"> */}
          <div className="stats bg-transparent">
            <div className="stat place-items-center border-none">
              <img src={usd_sign} alt={usd_sign} />
              <div className="stat-value text-sm text-neutral">USD</div>
            </div>
            <div className="stat place-items-center border-none">
              <img src={pounds_sign} alt={pounds_sign} />
              <div className="stat-value text-sm text-neutral">GBP</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={euro_sign} alt={euro_sign} />
              <div className="stat-value text-sm text-neutral">EUR</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={try_sign} alt={try_sign} />
              <div className="stat-value text-sm text-neutral">TRY</div>
            </div>

            <div className="stat place-items-center border-none">
              <img src={cyn_sign} alt={cyn_sign} />
              <div className="stat-value text-sm text-neutral">CNY</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cryptos;
