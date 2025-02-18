import { useState , useEffect } from "react";

function Usecurrencyinfo(currency){
  const [data, setData] = useState({})
  useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-02-18/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      // console.log(data);
  }, [currency])
  console.log(data);
  return data

}
export default Usecurrencyinfo