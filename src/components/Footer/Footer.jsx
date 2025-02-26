import img from '../../assets/img/image 26.svg';
import { BiDownArrow } from "react-icons/bi";

export const Footer = () => {
    const paymentIcons = [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXg7x7xU9nLukFESzZ6c2b8u_XfrkcBEvshXgfRUHFQRC2_6CQNzmsxAcL9pVrSl22DOA&usqp=CAU",
            alt: "BitPay"
        },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsRdYITu90oWB-ux0WSNTPECLm6rqbWKOr9u-9dyUgM3CvWEU80ItTYkqLWsWKT4IP6o&usqp=CAU", alt: "Mastercard" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Visa" },
        { src: "https://play-lh.googleusercontent.com/2EDe_49mlzmJG4rQxaNE1mL3ahls_rwOlFjN5duGWN16YdnvPHO2bk5Z-8ThzloDeQwR=w416-h235-rw", alt: "American Express" },
        { src: "https://pbs.twimg.com/profile_images/900777042127585283/XUqbsqIE_400x400.jpg", alt: "Discover" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiCPeEahH0xsXZ04hUgUtl-cY2aTwSU3C5A&s", alt: "Sofort" },
        { src: "https://lh3.googleusercontent.com/-HMMzVNh69gL0SsLMReGytn-Wf10oFHBOO05oixe5pKe5762nCu8YGadIHQ2xj5wGW4irBS_eUZ3riQhsl63THzhkMjJYx43mzBa2Z7Wf8NNGT4HicbO=w1200-l80-sg-rj", alt: "Google Pay" },
        { src: "https://i.pcmag.com/imagery/reviews/02RJy7OTtPnQQjh37yQDNqx-15.fit_lim.size_1200x630.v1598973550.png", alt: "Apple Pay" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "PayPal" },
        { src: "data:image/png;base64,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", alt: "Maestro" }
    ];
    return (
        <div className="relative  bg-gradient-to-br from-[#13253F] to-purple-950">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#13253F]"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid lg:gap-3 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                    <div className="md:max-w-sm ">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <svg
                                className="md:w-8 w-4 text-white"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 md:text-lg text-base font-bold tracking-wide text-white  font-nico">
                                tour buddy
                            </span>
                        </a>
                        <div className="mt-4">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1 flex gap-1"> <img src={img}
                                    alt="" className='w-5 h-5' />
                                    English (UK) <BiDownArrow className='text-yellow-400 ' /> </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>English (USA)</a></li>
                                    <li><a>Bangla</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1 "> 
                                    
                                U.S. Dollar ($)  <BiDownArrow className='text-yellow-400' /> </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>English (USA)</a></li>
                                    <li><a>Bangla</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-white">
                        Payment
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    News
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    World
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    Games
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    References
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-white">
                        Help
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    Web
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    eCommerce
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    Business
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    Entertainment
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="transition-colors duration-300 text-white hover:text-white"
                                >
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-white p-2 rounded-lg w-full max-w-md mx-auto text-center">
                        <h2 className="text-xs font-semibold mb-4">Payment methods possible</h2>
                        <div className="grid grid-cols-4 items-center gap-1">
                            {paymentIcons.map((icon, index) => (
                                <img key={index} src={icon.src} alt={icon.alt} className="h-7 w-12 mx-auto" />
                            ))}
                        </div>
                        <p className="mt-4 text-sm">Become a Tour guide for Us</p>
                    </div>
                </div>
                <div className="flex flex-col  justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p className="text-sm text-white">
                        © Copyright 2020 Lorem Inc. All rights reserved.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-purple-400 hover:text-white"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-purple-400 hover:text-white"
                        >
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-purple-400 hover:text-white"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};