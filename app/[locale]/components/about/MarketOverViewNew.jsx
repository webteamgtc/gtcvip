import { useTranslations } from 'next-intl';
import React from 'react';

const MarketOverViewNew = () => {

  const t= useTranslations("market_overview")
    // ✅ Extract header values as an array
  const headers = Object.values(t.raw("headers"));


  const rows = [
    {
      instrument: "FX",
      data: [
        "Normal Trading Hours",
         "Normal Trading Hours",
         "Normal Trading Hours",
         "Normal Trading Hours",
               
      ],
    },
    {
      instrument: "Metals",
      data: [
         "Normal Trading Hours",
         "Normal Trading Hours",
         "Early Close 21:30",
         "Normal Trading Hours",
         
       
        
      ],
    },
    {
      instrument: "OIL/Energies (BRNUSD)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 20:30",
        "Normal Trading Hours",
       
        
        
      ],
    },
    {
      instrument: "OIL/Energies (WTIUSD)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 21:30",
        "Normal Trading Hours",
       
        
       
      ],
    },
    {
      instrument: "OIL/Energies (NGCUSD)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 21:30",
        "Normal Trading Hours",
       

       
      ],
    },
    {
      instrument: "Indices - AUS200c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
       
       
      ],
    },
    {
      instrument: "Indices - CN50c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      
       
      ],
    },
    {
      instrument: "Indices - EU50c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 23:00",
        "Normal Trading Hours",
       
        
      ],
    },
    {
      instrument: "Indices - FRA40c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        
        
      ],
    },
    {
      instrument: "Indices - GER40c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 23:00",
        "Late Open 02:15",
       
      ],
    },
    {
      instrument: "Indices - HK50c",
      data: [
        "Closed",
        "Normal Trading Hours",
        "Early Close 11:30",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "Indices - JPN225c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 20:00",
        "Normal Trading Hours",
        
      ],
    },
    {
      instrument: "Indices - SPA35c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "Indices - UK100c",
      data: [
        "Closed",
        "Late Open 03:00",
        "Closed",
        "Late Open 03:00",
       
      ],
    },
    {
      instrument: "Indices - US30c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 20:00",
        "Normal Trading Hours",
         
      ],
    },
    {
      instrument: "Indices - US500c",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 20:00",
        "Normal Trading Hours",
        
      ],
    },
    {
      instrument: "Indices - USTECHc",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 20:00",
        "Normal Trading Hours",
       
      ],
    },
    
    {
      instrument: "EU Shares:Exchanges - SIX",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
       
         ],
    },
    {
      instrument: "EU Shares:Exchanges - BM",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours"
      
      ],
    },
    {
      instrument: "EU Shares:Exchanges - EURONEXT",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "EU Shares:Exchanges - LSE",
      data: [
        "Closed",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "EU Shares:Exchanges - XETRA",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      ],
    },
 
    {
      instrument: "NYSE (US Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "NDAQ (US Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
      
   
      ],
    },
    {
      instrument: "HKEX (Asia Shares:Exchanges)",
      data: [
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "TSE (Asia Shares:Exchanges)",
      data: [
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "Crypto",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
       
      ],
    },
    {
      instrument: "Futures GOLDM25",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close 21:30",
        "Normal Trading Hours",
       
      ],
    },
    
  ]; 

  const renderCellContent = (item) => {
    if (!item) return "";

    return item.split('\n').map((line, i) => (
      <span key={i} style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{line}</span>
    ));
  };

  const getCellClass = (item) => {
    if (!item) return "";
    const normalizedItem = item.trim().toLowerCase();
  
    if (normalizedItem.includes("early closed")) return "bg-secondary text-white";
    if (normalizedItem.includes("closed")) return "bg-primary text-white";
    if (normalizedItem.includes("early close")) return "bg-secondary text-white";
  
    return "";
  };

  return (
    <table className="trading_hours_table container">
      <thead className="bg-gray-100">
    <tr>
      {headers.map((header, index) => (
        <th key={index} className="border px-4 py-2 text-left font-medium text-gray-700  dark:text-primary">
          {header}
        </th>
      ))}
    </tr>
  </thead>
      <tbody>
    {rows.map((row, index) => (
      <tr key={index} className="even:bg-white odd:bg-gray-50">
        <td className="border px-4 py-2 font-semibold dark:text-primary">{row.instrument}</td>
        {row.data.map((cell, i) => (
          <td
            key={i}
            className={`border px-4 py-2 dark:text-primary ${
              cell.toLowerCase().includes('early close') ? 'bg-yellow-100 text-yellow-800' :
              cell.toLowerCase().includes('closed') ? 'bg-red-100 text-red-800' :
              ''
            }`}
          >
            {cell}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
    </table>
  );
};

export default MarketOverViewNew;
