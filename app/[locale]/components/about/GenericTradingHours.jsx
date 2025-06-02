'use client'
import React from 'react';
import SwapTab from './SwapTab';
import { useTranslations } from 'next-intl';

const GenericTradingHours = () => {
     const t = useTranslations("tradingTools.marketOverView.holiday");
    const data = {
        "Forex": [
            {
                "symbol": "All",
                "Type": "",
                "Monday": "00:00 --23:59",
                "Tuesday": "00:00 --23:59",
                "Wednesday": "00:00 --23:59",
                "Thursday": "00:00 --23:59",
                "Friday": "00:00 --23:55",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "All",
                "Type": "",
                "Monday": "00:01 --23:59",
                "Tuesday": "00:01 --23:59",
                "Wednesday": "00:01 --23:59",
                "Thursday": "00:01 --23:59",
                "Friday": "00:01 --23:55",
                "Saturday": "-",
                "Sunday": "-"
            }
        ],
        "Metals": [
            {
                "symbol": "All",
                "Type": "",
                "Monday": "01:00 --24:00",
                "Tuesday": "01:00 --24:00",
                "Wednesday": "01:00 --24:00",
                "Thursday": "01:00 --24:00",
                "Friday": "01:00 --24:00",
                "Saturday": "",
                "Sunday": ""
            },
            {
                "symbol": "All",
                "Type": "",
                "Monday": "01:01--23:59",
                "Tuesday": "01:01--23:59",
                "Wednesday": "01:01--23:59",
                "Thursday": "01:01--23:59",
                "Friday": "01:01--23:59",
                "Saturday": "",
                "Sunday": ""
            }
        ],
        "Commodities": [
            {
                "symbol": "US OIL/WTI",
                "Type": "",
                "Monday": "01:00 --24:00",
                "Tuesday": "01:00 --24:00",
                "Wednesday": "01:00 --24:00",
                "Thursday": "01:00 --24:00",
                "Friday": "01:00 --23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "US OIL/WTI",
                "Type": "",
                "Monday": "01:01--23:55",
                "Tuesday": "01:01--23:55",
                "Wednesday": "01:01--23:55",
                "Thursday": "01:01--23:55",
                "Friday": "01:00--23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "BRNUSD Brent Oil",
                "Type": "",
                "Monday": "01:01--23:59",
                "Tuesday": "03:00 --23:59",
                "Wednesday": "03:00 --23:59",
                "Thursday": "03:00 --23:59",
                "Friday": "03:00 --23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "BRNUSD Brent Oil",
                "Type": "",
                "Monday": "01:01--23:59",
                "Tuesday": "03:01 --23:59",
                "Wednesday": "03:01 --23:59",
                "Thursday": "03:01 --23:59",
                "Friday": "03:01 --23:59",
                "Saturday": "-",
                "Sunday": "-"
            }
        ],
        "Cryptocurrency": [
            {
                "symbol": "All",
                "Type": "",
                "Monday": "00:00--00:00",
                "Tuesday": "00:00--00:00",
                "Wednesday": "00:00--00:00",
                "Thursday": "00:00--00:00",
                "Friday": "00:00--00:00",
                "Saturday": "00:00--00:01",
                "Sunday": "00:00--00:02"
            },
            {
                "symbol": "All",
                "Type": "",
                "Monday": "00:01--00:00",
                "Tuesday": "00:01--00:00",
                "Wednesday": "00:01--00:00",
                "Thursday": "00:01--00:00",
                "Friday": "00:01--00:00",
                "Saturday": "00:01--00:01",
                "Sunday": "00:01--00:02"
            }
        ],
        "Cash Indices": [
            {
                "symbol": "SPA35c",
                "Type": "EU",
                "Monday": "10:00--21:59",
                "Tuesday": "10:00--21:59",
                "Wednesday": "10:00--21:59",
                "Thursday": "10:00--21:59",
                "Friday": "10:00--21:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "SPA35c",
                "Type": "",
                "Monday": "10:00--21:59",
                "Tuesday": "10:00--21:59",
                "Wednesday": "10:00--21:59",
                "Thursday": "10:00--21:59",
                "Friday": "10:00--21:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "GER40c",
                "Type": "EU",
                "Monday": "01:00--23:59",
                "Tuesday": "01:00--23:59",
                "Wednesday": "01:00--23:59",
                "Thursday": "01:00--23:59",
                "Friday": "01:00--23:57",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "GER40c",
                "Type": "",
                "Monday": "01:01--23:58",
                "Tuesday": "01:01--23:58",
                "Wednesday": "01:01--23:58",
                "Thursday": "01:01--23:58",
                "Friday": "01:01--23:56",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "US30c",
                "Type": "US",
                "Monday": "01:00--23:59",
                "Tuesday": "01:00--23:59",
                "Wednesday": "01:00--23:59",
                "Thursday": "01:00--23:59",
                "Friday": "01:00--23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "US30c",
                "Type": "",
                "Monday": "01:01--23:59",
                "Tuesday": "01:01--23:59",
                "Wednesday": "01:01--23:59",
                "Thursday": "01:01--23:59",
                "Friday": "01:01--23:56",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "US500c",
                "Type": "",
                "Monday": "01:00--23:59",
                "Tuesday": "01:00--23:59",
                "Wednesday": "01:00--23:59",
                "Thursday": "01:00--23:59",
                "Friday": "01:00--23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "US500c",
                "Type": "",
                "Monday": "01:01--23:59",
                "Tuesday": "01:01--23:59",
                "Wednesday": "01:01--23:59",
                "Thursday": "01:01--23:59",
                "Friday": "01:01--23:56",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "USTECHc",
                "Type": "",
                "Monday": "01:00--23:59",
                "Tuesday": "01:00--23:59",
                "Wednesday": "01:00--23:59",
                "Thursday": "01:00--23:59",
                "Friday": "01:00--23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "USTECHc",
                "Type": "",
                "Monday": "01:01--23:59",
                "Tuesday": "01:01--23:59",
                "Wednesday": "01:01--23:59",
                "Thursday": "01:01--23:59",
                "Friday": "01:01--23:56",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "JPN225c",
                "Type": "ASIA",
                "Monday": "01:00--23:59",
                "Tuesday": "01:00--23:59",
                "Wednesday": "01:00--23:59",
                "Thursday": "01:00--23:59",
                "Friday": "01:00--23:57",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "JPN225c",
                "Type": "",
                "Monday": "01:01--23:58",
                "Tuesday": "01:01--23:58",
                "Wednesday": "01:01--23:58",
                "Thursday": "01:01--23:58",
                "Friday": "01:01--23:56",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "UK100c",
                "Type": "UK",
                "Monday": "01:00--23:59",
                "Tuesday": "01:00--23:59",
                "Wednesday": "01:00--23:59",
                "Thursday": "01:00--23:59",
                "Friday": "01:00--23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "UK100c",
                "Type": "",
                "Monday": "01:01--23:58",
                "Tuesday": "01:01--23:58",
                "Wednesday": "01:01--23:58",
                "Thursday": "01:01--23:58",
                "Friday": "01:01--23:57",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "EU50c",
                "Type": "",
                "Monday": "03:15--23:59",
                "Tuesday": "03:15--23:59",
                "Wednesday": "03:15--23:59",
                "Thursday": "03:15--23:59",
                "Friday": "03:15--23:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "EU50c",
                "Type": "",
                "Monday": "03:16--23:56",
                "Tuesday": "03:16--23:56",
                "Wednesday": "03:16--23:56",
                "Thursday": "03:16--23:56",
                "Friday": "03:16--23:56",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "CN50c",
                "Type": "",
                "Monday": "04:00--11:30,12:00 --23:45",
                "Tuesday": "04:00--11:30,12:00 --23:45",
                "Wednesday": "04:00--11:30,12:00 --23:45",
                "Thursday": "04:00--11:30,12:00 --23:45",
                "Friday": "04:00--11:30,12:00 --23:45",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "CN50c",
                "Type": "",
                "Monday": "04:02--11:30,12:00--23:43",
                "Tuesday": "04:02--11:30,12:00--23:43",
                "Wednesday": "04:02--11:30,12:00--23:43",
                "Thursday": "04:02--11:30,12:00--23:43",
                "Friday": "04:02--11:30,12:00--23:43",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "AUS200c",
                "Type": "AU",
                "Monday": "00:50 --08:30  ,09:10 --22:59",
                "Tuesday": "00:50 --08:30  ,09:10 --22:59",
                "Wednesday": "00:50 --08:30  ,09:10 --22:59",
                "Thursday": "00:50 --08:30  ,09:10 --22:59",
                "Friday": "00:50 --08:30  ,09:10 --22:59",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "AUS200c",
                "Type": "",
                "Monday": "00:51 --08:30 , 09:11 --22:57",
                "Tuesday": "00:51 --08:30 , 09:11 --22:57",
                "Wednesday": "00:51 --08:30 , 09:11 --22:57",
                "Thursday": "00:51 --08:30 , 09:11 --22:57",
                "Friday": "00:51 --08:30 , 09:11 --22:57",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "HK50c",
                "Type": "ASIA",
                "Monday": "04;15-07;00, 08:00-11:30, 12:15--22:00",
                "Tuesday": "04;15-07;00, 08:00-11:30, 12:15--22:00",
                "Wednesday": "04;15-07;00, 08:00-11:30, 12:15--22:00",
                "Thursday": "04;15-07;00, 08:00-11:30, 12:15--22:00",
                "Friday": "04;15-07;00, 08:00-11:30, 12:15--22:00",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "HK50c",
                "Type": "",
                "Monday": "04;18-07;00, 08:00-11:30, 12:15--21:59",
                "Tuesday": "04;18-07;00, 08:00-11:30, 12:15--21:59",
                "Wednesday": "04;18-07;00, 08:00-11:30, 12:15--21:59",
                "Thursday": "04;18-07;00, 08:00-11:30, 12:15--21:59",
                "Friday": "04;18-07;00, 08:00-11:30, 12:15--21:59",
                "Saturday": "-",
                "Sunday": "-"
            }
        ],
        "Stocks": [
            {
                "symbol": "US Stocks",
                "Type": "",
                "Monday": "16:30--23:00",
                "Tuesday": "16:30--23:00",
                "Wednesday": "16:30--23:00",
                "Thursday": "16:30--23:00",
                "Friday": "16:30--23:00",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "US Stocks",
                "Type": "",
                "Monday": "16:31--23:00",
                "Tuesday": "16:31--23:00",
                "Wednesday": "16:31--23:00",
                "Thursday": "16:31--23:00",
                "Friday": "16:31--23:00",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "EU Stocks",
                "Type": "",
                "Monday": "10:00-19:29",
                "Tuesday": "10:00-19:29",
                "Wednesday": "10:00-19:29",
                "Thursday": "10:00-19:29",
                "Friday": "10:00-19:29",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "EU Stocks",
                "Type": "",
                "Monday": "10:01-19:29",
                "Tuesday": "10:01-19:29",
                "Wednesday": "10:01-19:29",
                "Thursday": "10:01-19:29",
                "Friday": "10:01-19:29",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "Asia Shares",
                "Type": "",
                "Monday": "03:30-07:00, 08:00-11:00",
                "Tuesday": "03:30-07:00, 08:00-11:00",
                "Wednesday": "03:30-07:00, 08:00-11:00",
                "Thursday": "03:30-07:00, 08:00-11:00",
                "Friday": "03:30-07:00, 08:00-11:00",
                "Saturday": "-",
                "Sunday": "-"
            },
            {
                "symbol": "Asia Shares",
                "Type": "",
                "Monday": "03:30-07:00, 08:00-11:00",
                "Tuesday": "03:30-07:00, 08:00-11:00",
                "Wednesday": "03:30-07:00, 08:00-11:00",
                "Thursday": "03:30-07:00, 08:00-11:00",
                "Friday": "03:30-07:00, 08:00-11:00",
                "Saturday": "-",
                "Sunday": "-"
            }
        ]
    }

    return (
        <>
            <section className='pt-10 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-28'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mt-10'>
                        <h2 className="HeadingH2 text-primary dark:text-white text-center">Forex & CFD Trading Hours</h2>
                        <p>Check the latest trading hours for Forex, Metals, Commodities, and other financial instruments. Plan your trades with GTCFX's up-to-date market session times.

</p>
                     
                    </div>
                    <div className='inner-information'>
                        <SwapTab data={data} />
                    </div>
                </div>

            </section>
        </>
    );
};

export default GenericTradingHours;
