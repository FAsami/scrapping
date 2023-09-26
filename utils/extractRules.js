export const extractRules = {
  "1ST_amount":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(1) > p > small",
  "1ST_result":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(1) > strong",
  "3D_FRONT_amount":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(2) > p > small",
  "3D_FRONT_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(2) > strong",
    type: "list",
  },

  "3D_BACK_amount":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(3) > p > small",
  "3D_BACK_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(3) > strong",
    type: "list",
  },

  "2D_amount":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(4) > p > small",
  "2D_result":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(4) > strong",

  "1ST_SIDE_amount":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__sec--nearby > p",
  "1ST_SIDE_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__sec--nearby > strong",
    type: "list",
  },

  "2ND_amount":
    "#contentPrint > div.lottocheck__resize > div:nth-child(2) > p > span",
  "2ND_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div:nth-child(2) > div > span",
    type: "list",
  },

  "3RD_amount":
    "#contentPrint > div.lottocheck__resize > div:nth-child(3) > p > span",
  "3RD_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div:nth-child(3) > div > span",
    type: "list",
  },

  "4TH_amount":
    "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--font-mini.lottocheck__sec--bdnoneads > p > span",
  "4TH_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--font-mini.lottocheck__sec--bdnoneads > div > span",
    type: "list",
  },

  "5TH_amount":
    "#contentPrint > div.lottocheck__resize > div:nth-child(7) > p > span",
  "5TH_result": {
    selector:
      "#contentPrint > div.lottocheck__resize > div:nth-child(7) > .lottocheck__box-item > span",
    type: "list",
  },
};
