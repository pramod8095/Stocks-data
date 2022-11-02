import React, {useState} from "react";
import "./index.css";

export default function StockData() {
  const [dateValue, setDateValue] = useState('');
  const [data, setData] = useState([]);

  const getData =async() => {
    const data = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${dateValue}`);
    const resp = await data.json();
    console.log(resp, 'resp');
    setData(resp);
  }

  console.log(data, 'data')
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" onChange={(e) => setDateValue(e.target.value)}/>
        <button className="" id="submit-button" data-testid="submit-button" onClick={() => getData()}>Search</button>
      </section>
     
        {/* <li className="py-10"></li> */}
        {
          (data && data.data) && data.data.length > 0 ? (data.data.map((item, index) => {
            return (
              <ul className="mt-50 slide-up-fade-in styled" key={index} id="stockData" data-testid="stock-data">
                <li className="py-10">Open: {item.open}</li>
                <li className="py-10">Close: {item.close}</li>
                <li className="py-10">High: {item.high}</li>
                <li className="py-10">Low: {item.low}</li>
              </ul>
            )
          })) : null
        }
      
      {/* <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div> */}
      { (data && data.data && data.data.length === 0) ? <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No Results Found</div> : null}
    </div>
  );
}
