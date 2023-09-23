import React from "react";
import { Table } from "antd";
import FirstPrize from "@/components/FirstPrize";
import { ReCAPTCHA } from "react-google-recaptcha";

const dataSource = {
  THAI_GOV_LOTTO: {
    round_date: "16062562",
    results: [
      {
        prize_type: "1ST",
        prize_amount: "6000000",
        result: "264872",
      },
      {
        prize_type: "3D_FRONT",
        prize_amount: "4000",
        result: ["519", "628"],
      },
      {
        prize_type: "3D_BACK",
        prize_amount: "4000",
        result: ["202", "874"],
      },
      {
        prize_type: "2D",
        prize_amount: "2000",
        result: "30",
      },
      {
        prize_type: "1ST_SIDE",
        prize_amount: "100000",
        result: ["264871", " 264873"],
      },
      {
        prize_type: "2ND",
        prize_amount: "200000",
        result: ["011040", "105603", "297899", "374808", "786981"],
      },
      {
        prize_type: "3RD",
        prize_amount: "80000",
        result: [
          "106523",
          "366764",
          "473403",
          "644456",
          "794962",
          "172552",
          "440923",
          "530337",
          "649698",
          "961333",
        ],
      },
      {
        prize_type: "4TH",
        prize_amount: "40000",
        result: [
          "002003",
          "224783",
          "452245",
          "680258",
          "881526",
          "003225",
          "266734",
          "476194",
          "722727",
          "886149",
          "024897",
          "325482",
          "520504",
          "729539",
          "886665",
          "026477",
          "329523",
          "547952",
          "762736",
          "899824",
          "026519",
          "331073",
          "587657",
          "787619",
          "903814",
          "052694",
          "376617",
          "613991",
          "789704",
          "920322",
          "115643",
          "387940",
          "615394",
          "789945",
          "922553",
          "153983",
          "411119",
          "640342",
          "817837",
          "938134",
          "160523",
          "444201",
          "644923",
          "819445",
          "939525",
          "169407",
          "446774",
          "665313",
          "870229",
          "965027",
        ],
      },
      {
        prize_type: "5TH",
        prize_amount: "20000",
        result: [
          "008599",
          "257059",
          "449015",
          "642460",
          "843753",
          "016127",
          "257498",
          "449452",
          "668083",
          "847065",
          "034476",
          "294995",
          "467303",
          "671265",
          "852137",
          "058579",
          "305652",
          "490147",
          "703922",
          "856923",
          "077615",
          "316061",
          "504195",
          "720895",
          "867480",
          "087299",
          "335088",
          "539435",
          "737729",
          "875422",
          "103681",
          "339394",
          "545678",
          "740148",
          "879026",
          "105188",
          "360430",
          "552540",
          "750728",
          "893633",
          "116399",
          "371696",
          "563155",
          "750980",
          "911888",
          "124263",
          "376700",
          "564823",
          "755597",
          "915182",
          "132493",
          "382269",
          "580660",
          "758526",
          "921683",
          "163973",
          "390518",
          "608004",
          "762583",
          "925858",
          "173639",
          "393824",
          "611510",
          "766541",
          "938971",
          "204389",
          "401238",
          "616885",
          "770034",
          "953616",
          "217990",
          "410668",
          "619223",
          "776386",
          "971160",
          "218727",
          "425232",
          "623002",
          "788344",
          "971709",
          "225932",
          "434754",
          "623726",
          "799819",
          "977346",
          "244451",
          "441479",
          "624293",
          "813434",
          "978932",
          "245708",
          "445327",
          "628040",
          "831561",
          "985622",
          "253052",
          "447859",
          "635468",
          "843328",
          "988284",
        ],
      },
    ],
    round_status: ["FINISH"],
  },
};

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

const Home = () => {
  const recaptchaRef = React.createRef();

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    alert(`Hey`);
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current.reset();
  };
  async function handleSubmit(e) {
    console.log(
      "HELLO"
    )
    e.preventDefault();
    const recaptchaResponse = await recaptchaRef.current.executeAsync();

    const response = await fetch("/api/validateRecaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptchaResponse }),
    });
    console.log(
      "RESPONSEI : ", response
    )


  }

  return (
    <div className="bg-slate-900 text-white h-full min-h-screen">
      <header className="text-center sticky shadow-sm shadow-slate-900 top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent h-20">
        Header
      </header>
      <button onClick={handleSubmit}>Captcha</button>
      <ReCAPTCHA
        size="normal"
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="max-w-[800px] mx-auto py-3">
        <FirstPrize firstPriceCards={firstPriceCards} />
        {/* First side */}
        <div className="flex justify-around py-4">
          <p>
            <span className="text-sky-400">รางวัลข้างเคียงรางวัลที่ 1</span>
            <br /> 2 รางวัลๆละ {firstSide.prize_amount} บาท
          </p>
          {firstSide.result.map((res) => {
            return <strong key={res} className="text-xl py-3">{res}</strong>;
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
              return <strong key={res} className="text-xl pt-3 w-1/4">{res}</strong>;
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
              return <strong key={res} className="text-xl pt-3 w-1/4">{res}</strong>;
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
      </div>
    </div>
  );
};

export default Home;
