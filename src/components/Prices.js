const { default: FirstPrize } = require("./FirstPrize");

const Prices = ({ dataSource }) => {
  const firstPriceCards = dataSource.THAI_GOV_LOTTO.results.filter((node) =>
    ["1ST", "3D_FRONT", "3D_BACK", "2D"].includes(node.prize_type)
  );
  const firstSide = dataSource.THAI_GOV_LOTTO.results.find(
    (node) => node.prize_type === "1ST_SIDE"
  );
  const secondPrices = dataSource.THAI_GOV_LOTTO.results.find(
    (node) => node.prize_type === "2ND"
  );
  const thirdPrices = dataSource.THAI_GOV_LOTTO.results.find(
    (node) => node.prize_type === "3RD"
  );
  const fourthPrices = dataSource.THAI_GOV_LOTTO.results.find(
    (node) => node.prize_type === "4TH"
  );
  const fifthPrices = dataSource.THAI_GOV_LOTTO.results.find(
    (node) => node.prize_type === "5TH"
  );
  return (
    <>
      <FirstPrize firstPriceCards={firstPriceCards} />
      {/* First side */}
      <div className="flex justify-around py-4">
        <p>
          <span className="text-sky-400">รางวัลข้างเคียงรางวัลที่ 1</span>
          <br /> 2 รางวัลๆละ {firstSide.prize_amount} บาท
        </p>
        {firstSide.result.map((res) => {
          return (
            <strong key={res} className="text-xl py-3">
              {res}
            </strong>
          );
        })}
      </div>
      {/* second price  */}
      <div className="shadow shadow-slate-800 p-6 rounded-sm mt-12 mb-12">
        <div className="text-center text-sky-400 pb-3">
          ผลสลากกินแบ่งรัฐบาล รางวัลที่ 2 มี 5 รางวัลๆละ{" "}
          {secondPrices.prize_amount} บาท
        </div>
        <div className="flex justify-center">
          {secondPrices.result.map((res) => {
            return (
              <strong key={res} className="text-xl pt-3 w-1/4">
                {res}
              </strong>
            );
          })}
        </div>
      </div>
      {/* Third price  */}
      <div className="shadow shadow-slate-800 p-6 rounded-sm mb-16">
        <div className="text-center text-sky-400 pb-3">
          ผลสลากกินแบ่งรัฐบาล รางวัลที่ 3 มี 10 รางวัลๆละ{" "}
          {thirdPrices.prize_amount} บาท
        </div>
        <div className="flex justify-center flex-wrap">
          {thirdPrices.result.map((res) => {
            return (
              <strong key={res} className="text-xl pt-3 w-1/4">
                {res}
              </strong>
            );
          })}
        </div>
      </div>
      {/* Fourth price  */}
      <div className="shadow shadow-slate-800 p-6 rounded-sm mb-16">
        <div className="text-center text-sky-400 pb-3">
          ผลสลากกินแบ่งรัฐบาล รางวัลที่ 4 มี 50 รางวัลๆละ
          {fourthPrices.prize_amount} บาท
        </div>
        <div className="flex justify-center flex-wrap">
          {fourthPrices.result.map((res) => {
            return (
              <strong key={res} className="text-normal font-bold pt-3 w-1/5">
                {res}
              </strong>
            );
          })}
        </div>
      </div>
      {/* Fifth price  */}
      <div className="shadow shadow-slate-800 p-6 rounded-sm">
        <div className="text-center text-sky-400 pb-3">
          ผลสลากกินแบ่งรัฐบาล รางวัลที่ 5 มี 100 รางวัลๆละ{" "}
          {fifthPrices.prize_amount} บาท
        </div>
        <div className="flex justify-center flex-wrap">
          {fifthPrices.result.map((res) => {
            return (
              <strong key={res} className="text-normal font-bold pt-3 w-1/5">
                {res}
              </strong>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Prices;
