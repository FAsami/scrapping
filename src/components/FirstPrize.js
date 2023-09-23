import React from "react";

const priceTypeMapping = {
    "1ST": "รางวัลที่ 1",
    "3D_FRONT": "เลขหน้า 3 ตัว",
    "3D_BACK": "เลขท้าย 3 ตัว",
    "2D": "เลขท้าย 2 ตัว",
};

const FirstPrize = ({ firstPriceCards }) => {
    return (
        <div className="flex w-full mx-auto py-3 text-center gap-2 mt-8">
            {firstPriceCards.map((card) =>
                <div
                    key={card.prize_type}
                    className="w-full py-3 rounded-md shadow-sm shadow-slate-700"
                >
                    <div className="pb-4">
                        <div className="text-sky-400 font-bold">
                            {priceTypeMapping[card.prize_type]}
                        </div>
                        <div>รางวัลละ {card.prize_amount} บาท</div>
                    </div>
                    {Array.isArray(card.result) ? (
                        <div>
                            {card.result.map((res) => {
                                return (
                                    <strong key={res} className="text-2xl py-3">
                                        {res}&nbsp; &nbsp;
                                    </strong>
                                );
                            })}
                        </div>
                    ) : (
                        <strong className="text-2xl py-3">{card.result}</strong>
                    )}
                </div>
            )}
        </div>
    )
};

export default FirstPrize;
