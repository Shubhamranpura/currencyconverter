import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  selectCurrency = "USD",
  onCurrencyChange,
  curroptions = [],
  amountDisabled = false,
}) {
  return (
    <div className="bg-white w-full p-4 rounded-2xl text-gray-500 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Input Field */}
        <div className="w-full md:w-1/2">
          <label htmlFor="amountInput" className="block mb-1">{label}</label>
          <input
            id="amountInput"
            type="number"
            className="w-full outline-none bg-transparent border-2 h-10 p-2 text-black rounded-xl"
            placeholder="Amount"
            value={amount}
            disabled={amountDisabled}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>

        {/* Currency Selector */}
        <div className="w-full md:w-1/2">
          <label className="block mb-1">Currency</label>
          <select
            name="currencyOption"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            className="w-full bg-white border rounded-lg p-2 text-black"
          >
            {curroptions.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;


