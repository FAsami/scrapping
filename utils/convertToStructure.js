let structure = {
  THAI_GOV_LOTTO: {
    round_date: "16062562",
    results: [
      {
        prize_type: "1ST",
        prize_amount: "",
        result: "",
      },
      {
        prize_type: "3D_FRONT",
        prize_amount: "",
        result: [],
      },
      {
        prize_type: "3D_BACK",
        prize_amount: "",
        result: [],
      },
      {
        prize_type: "2D",
        prize_amount: "",
        result: "",
      },
      {
        prize_type: "1ST_SIDE",
        prize_amount: "",
        result: [],
      },
      {
        prize_type: "2ND",
        prize_amount: "",
        result: [],
      },
      {
        prize_type: "3RD",
        prize_amount: "",
        result: [],
      },
      {
        prize_type: "4TH",
        prize_amount: "",
        result: [],
      },
      {
        prize_type: "5TH",
        prize_amount: "20000",
        result: [],
      },
    ],
    round_status: ["FINISH"],
  },
};

export const convertToStructure = (data) => {
  const updatedResults = structure.THAI_GOV_LOTTO.results.map((node) => {
    return {
      prize_type: node.prize_type,
      prize_amount: extractPriceAmount(data[`${node.prize_type}_amount`]),
      result: data[`${node.prize_type}_result`],
    };
  });
  structure.THAI_GOV_LOTTO.results = updatedResults;
  return structure;
};

const extractPriceAmount = (str) => {
  const regex = /\b\d{1,3}(?:,\d{3})*(?:\.\d+)?(?!\d)/g;
  const matches = str.match(regex);

  if (matches && matches.length > 0) {
    return matches[matches.length - 1];
  } else {
    return "";
  }
};
