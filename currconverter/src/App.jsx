import { useState } from "react";
import InputBox from "./componant/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
    const [amount, setAmount] = useState(1);
    const [From, setFrom] = useState("usd");
    const [To, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const countrydata = useCurrencyInfo(From) || {};
    const options = Object.keys(countrydata);

    function swap() {
        setFrom((prevFrom) => {
            setTo(prevFrom);
            return To;
        });
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    function convert() {
        if (!countrydata[To]) return;
        setConvertedAmount(amount * countrydata[To]);
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full h-auto">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm h-auto bg-white/30 ">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={setAmount}
                            selectCurrency={From}
                            onCurrencyChange={setFrom}
                            curroptions={options}
                        />
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={swap}
                                className="bg-blue-700 h-9 z-5 rounded-2xl text-white text-xl w-18 text-center"
                            >
                                Swap
                            </button>
                        </div>
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            curroptions={options}
                            selectCurrency={To}
                            onCurrencyChange={setTo}
                        />
                        <div className="flex justify-center text-xl">
                            <button
                                type="submit"
                                className="bg-blue-700 mt-5 w-auto px-5 h-8 rounded-2xl"
                            >
                                Convert <span className="text-white" >{From.toUpperCase()} </span>to <span className="text-white" > {To.toUpperCase()} </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
