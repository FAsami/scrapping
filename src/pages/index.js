import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Prices from "@/components/Prices";
import HCaptcha from "@hcaptcha/react-hcaptcha";
const Home = () => {
  const [url, setUrl] = useState(
    "https://news.sanook.com/lotto/check/16092566"
  );
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetch-data");
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Re-fetch
  const handleRefetch = async (e) => {
    // if (!token) {
    //   typeof window !== "undefined" &&
    //     window.alert(
    //       "Please verify you're not a robot by solving the captcha !"
    //     );
    //   return;
    // }
    // e.preventDefault();
    setLoading(true);
    // const { data } = await axios.post("/api/verify", { token: token });
    // console.log("token", token);

    // if (data.success) {
    try {
      const { data } = await axios.post("/api/refetch", {
        url: url,
      });
      setData(data.results);
      setLoading(false);
    } catch (error) {
      typeof window !== "undefined" && window.alert("Something went wrong !");
      console.error(error);
      setLoading(false);
    }
    // } else {
    //   console.log("Something went wrong !");
    // }
  };

  //Downloading JSON file
  const handleDownload = async () => {
    const response = await fetch("/api/download");
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "scrapped.json";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="bg-slate-900 text-white h-full min-h-screen">
      <header className="text-center sticky shadow-sm shadow-slate-900 top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent h-20">
        <h1 className="pt-3 text-2xl tracking-wider text-center font-bold uppercase">
          Lottery results
        </h1>
      </header>
      <div className="max-w-[800px] mx-auto py-3">
        <div className="flex items-center justify-center mb-2 gap-0.5">
          <input
            placeholder="Website url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={!isEditing}
            className="bg-slate-800 text-normal pl-4 font-bold py-1.5 text-white rounded-sm w-[400px]"
          />
          {/* <button
            onClick={() => setIsEditing(!isEditing)}
            className="ml-1 bg-sky-700 uppercase font-bold rounded tracking-widest py-2 px-3 text-sm flex items-center"
          >
            {isEditing ? "Save" : "Edit"}
          </button> */}
        </div>
        {/* <div className="flex justify-center mb-2">
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
            onVerify={setToken}
            ref={captchaRef}
          />
        </div> */}

        <div className="flex justify-center gap-2">
          <button
            className="bg-sky-700 uppercase font-bold rounded tracking-widest px-4 py-2 flex items-center"
            onClick={handleRefetch}
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Refetching...
              </>
            ) : (
              "Re fetch"
            )}
          </button>
          <button
            className="text-sky-600 border border-sky-400 uppercase font-bold rounded tracking-widest px-4 py-2"
            onClick={handleDownload}
          >
            EXPORT TO JSON
          </button>
        </div>

        {data && <Prices dataSource={data} />}
      </div>
    </div>
  );
};

export default Home;
