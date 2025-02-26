import { useState } from "react";
import pay from '../../assets/img/payment 1.png'
const PaymentForm = () => {

    const [paymentMethod, setPaymentMethod] = useState("");
    const methods = ["Bkash", "Nagad", "UPAY", "VISA", "MasterCard", "Others"];

    return (
        <div className="2xl:max-w-[1500px] max-w-full px-3 md:px-8 xl:max-w-[1244px] container mx-auto ">



            <div className="flex   gap-10   py-8 lg:flex-row flex-col items-center justify-between sm:py-20">
                <div className="flex-1/3 relative py-5 sm:mx-auto xl:ml-2 lg:ml-10 p-1">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-black to-yellow-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="lg:w-4xl max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold font-mono">Choose Payment Method</h1>
                            </div>
                            <div className="divide-y divide-yellow-500 ">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input id="name" name="email" type="text" placeholder=" Ahnaf Amer " className="peer  placeholder-transparent p-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Name:</label>
                                    </div>
                                    <div className="relative">
                                        <input id="name" name="email" type="text" placeholder="............" className="peer  placeholder-transparent p-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Transaction Id:</label>
                                    </div>
                                    <div className="relative">
                                        <input id="name" name="email" type="text" placeholder="............" className="peer  placeholder-transparent p-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">   Email:</label>
                                    </div>
                                    <div className="relative">
                                        <input id="name" name="email" type="text" placeholder="896875684............" className="peer  placeholder-transparent p-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">   Phone Number:</label>
                                    </div>
                                    <div className="relative">
                                        <input id="name" name="password" type="password" placeholder="............" className="peer  placeholder-transparent p-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">   Pin Code::</label>
                                    </div>



                                    <div className="space-y-4">


                                        <div className="mt-5">
                                            <label className="block font-medium">Select Method:</label>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {methods.map((method) => (
                                                    <label key={method} className="flex items-center px-4 gap-2 bg-yellow-400 p-2 rounded-lg cursor-pointer transition-all hover:bg-gray-300">
                                                        <input
                                                            type="radio"
                                                            name="paymentMethod"
                                                            value={method}
                                                            checked={paymentMethod === method}
                                                            onChange={() => setPaymentMethod(method)}
                                                            className="accent-blue-500"
                                                        />
                                                        <span className="text-sm font-medium">{method}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <button className=" mt-4 text-white  rounded-full ">
                                           
                                       
                                        <a href="#_" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white hover:animate-bounce  bg-black rounded-lg group">
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-400   rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                            <span className="relative">   Confirm Payment  </span>
                                        </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 mx-auto">
                    <img src={pay} alt="" />
                </div>
            </div>





        </div>
    );
};

export default PaymentForm;
