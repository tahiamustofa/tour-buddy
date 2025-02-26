import img from '../../assets/img/image.png';
import second from '../../assets/img/Ellipse 60.png'
import girl from '../../assets/img/grl.png'
import { FaRegClock, FaCarSide } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import RatingTable from '../RatingTable/RatingTable';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../Swipper/Swipper.css'

const GuideProfile = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-[1500px] px-3 md:px-8 container mx-auto bg-white   p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12  ">
        <h2 className="sm:text-lg text-base font-bold text-center sm:text-left md:mb-8 mb-5">Your Selected Guide:</h2>

        {/* Guide Profile Section */}
        <div className="flex justify-between lg:flex-row flex-col items-center lg:gap-10 gap-5">
          <div className="bg-white w-full md:flex-4/6 flex md:flex-row flex-col justify-between items-center relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 md:p-10 transition-all duration-500 transform">
            <div className="flex md:flex-row flex-col items-center gap-3">
              <img
                src={img}
                className="group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                alt="Guide"
              />
              <div className="transition-all transform duration-500">
                <div className="flex md:flex-row flex-col md:gap-5 gap-1 items-center justify-center mb-2">
                  <div className="rounded-3xl bg-[#7BBCB0] text-xs text-white px-5 py-2">KUAKATA</div>
                  <div>
                    <div className="flex gap-1">
                      <p> | </p>
                      <div className="flex ml-2 text-yellow-500">★★★★ <span className="text-gray-600">☆</span></div>
                      <span className="ml-2 text-gray-600">(584 reviews)</span>
                    </div>
                  </div>
                </div>
                <h3 className="md:text-lg text-base font-semibold">Raihan Ahmad</h3>
                <div className="flex md:flex-row flex-col gap-3 text-gray-600">
                  <p className="mt-2 flex gap-1 items-center"> <span><FaRegClock /></span>2 hours | </p>
                  <p className="mt-2 flex gap-1 items-center"> <span><FaCarSide /></span> Transport | </p>
                  <p className="mt-2 flex gap-1 items-center"> <span><BsPeopleFill /></span> Family Plan </p>
                </div>
                <div className="flex md:flex-row flex-col gap-1 text-xs text-gray-600">
                  <p className="mt-2 flex  items-center">  English | </p>
                  <p className="mt-2 flex  items-center">  016754548799 | </p>
                  <p className="mt-2 flex  items-center">  1 year Experience | </p>
                  <p className="mt-2 flex  items-center">  Dhaka </p>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-[#7BBCB0] font-bold lg:text-xl text-base"> Tk 250.00</p>
              <p className="text-xs"> per person </p>
            </div>
            <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 right-1 rounded-lg">
              <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-gray-600">
                {/* Social Icons */}
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
                <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg viewBox="0 0 960 1000" fill="currentColor" height="1em" width="1em">
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full sm:w-auto">
            <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease group-hover:shadow-2xl">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white"> Hire Me</span>
            </a>
          </div>
        </div>



        <div className='flex lg:justify-between my-10 md:gap-10 gap-5 md:flex-row flex-col'>
          <h3 className="md:text-lg text-base font-semibold text-center sm:text-left xl:flex-1/4 lg:flex-1/12">Customer Review</h3>
          <RatingTable></RatingTable>
        </div>
        {/* Reviews Section */}
        <div className="my-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: false },
              768: { slidesPerView: 1, centeredSlides: true },
              1024: { slidesPerView: 1 },
            }}
            className="mySwiper"
          >

            <SwiperSlide >
              <div className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">

                <div className='flex md:flex-row flex-col justify-between md:gap-5 gap-2'>
                  <div className="p-2">
                    <div className="tracking-wide lg:text-sm text-xs text-yellow-500 font-semibold">Good Tour, Really Well Organised</div>
                    <p className=" xl:text-base lg:text-sm text-xs text-gray-500 ">
                      Great tour! Everything was well planned and organized.
                    </p>
                    <p className="mt-2 text-gray-500  lg:text-sm text-xs"> Amazing Guide!</p>
                    <p className="mt-2 text-gray-600 xl:text-base lg:text-sm text-xs">
                      Our Tour Guide in Kuckata Was Fantastic! They Showed Us The Best Spots For Sunrise And Sunset, Shared Fascinating Local Stories, And Made The Trip Smooth And Enjoyable. Their Friendly Attitude And Attention To Detail Truly Made Our Visit Unforgettable. Highly Recommend!
                    </p>

                  </div>

                  <div className='flex gap-1 text-[#778088] lg:text-sm text-xs'>
                    <p>Helpful?</p>
                    <p>Yes</p>
                  </div>
                </div>

                <div className=''>
                  <div className="flex items-center justify-center md:gap-5  gap-2 lg:mt-4 mt-2">
                    <img src={second} alt="avatar"
                      className="md:h-32 md:w-28 h-20 w-20  rounded-full " />
                    <div className="space-y-2">
                      <p className="md:text-sm  text-xs font-bold text-gray-900">Atlene McCoy</p>
                      <p className="md:text-sm  text-xs text-gray-500">2 October 2012</p>
                      <div className="flex items-center mb-1 gap-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="lg:w-5 lg:h-5 w-3 h-3" viewBox="0 0 18 17" fill="currentColor">
                            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide >
              <div className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">

                <div className='flex md:flex-row flex-col justify-between md:gap-5 gap-2'>
                  <div className="p-2">
                    <div className="tracking-wide lg:text-sm text-xs text-yellow-500 font-semibold">Good Tour, Really Well Organised</div>
                    <p className=" xl:text-base lg:text-sm text-xs text-gray-500 ">
                      Great tour! Everything was well planned and organized.
                    </p>
                    <p className="mt-2 text-gray-500  lg:text-sm text-xs"> Amazing Guide!</p>
                    <p className="mt-2 text-gray-600 xl:text-base lg:text-sm text-xs">
                      Our Tour Guide in Kuckata Was Fantastic! They Showed Us The Best Spots For Sunrise And Sunset, Shared Fascinating Local Stories, And Made The Trip Smooth And Enjoyable. Their Friendly Attitude And Attention To Detail Truly Made Our Visit Unforgettable. Highly Recommend!
                    </p>

                  </div>

                  <div className='flex gap-1 text-[#778088] lg:text-sm text-xs'>
                    <p>Helpful?</p>
                    <p>Yes</p>
                  </div>
                </div>

                <div className=''>
                  <div className="flex items-center justify-center md:gap-5  gap-2 lg:mt-4 mt-2">
                    <img src={girl} alt="avatar"
                      className="md:h-32 md:w-28 h-20 w-20  rounded-full " />
                    <div className="space-y-2">
                      <p className="md:text-sm  text-xs font-bold text-gray-900">Atlene McCoy</p>
                      <p className="md:text-sm  text-xs text-gray-500">2 October 2012</p>
                      <div className="flex items-center mb-1 gap-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="lg:w-5 lg:h-5 w-3 h-3" viewBox="0 0 18 17" fill="currentColor">
                            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide >
              <div className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">

                <div className='flex md:flex-row flex-col justify-between md:gap-5 gap-2'>
                  <div className="p-2">
                    <div className="tracking-wide lg:text-sm text-xs text-yellow-500 font-semibold">Good Tour, Really Well Organised</div>
                    <p className=" xl:text-base lg:text-sm text-xs text-gray-500 ">
                      Great tour! Everything was well planned and organized.
                    </p>
                    <p className="mt-2 text-gray-500  lg:text-sm text-xs"> Amazing Guide!</p>
                    <p className="mt-2 text-gray-600 xl:text-base lg:text-sm text-xs">
                      Our Tour Guide in Kuckata Was Fantastic! They Showed Us The Best Spots For Sunrise And Sunset, Shared Fascinating Local Stories, And Made The Trip Smooth And Enjoyable. Their Friendly Attitude And Attention To Detail Truly Made Our Visit Unforgettable. Highly Recommend!
                    </p>

                  </div>

                  <div className='flex gap-1 text-[#778088] lg:text-sm text-xs'>
                    <p>Helpful?</p>
                    <p>Yes</p>
                  </div>
                </div>

                <div className=''>
                  <div className="flex items-center justify-center md:gap-5  gap-2 lg:mt-4 mt-2">
                    <img src={second} alt="avatar"
                      className="md:h-32 md:w-28 h-20 w-20  rounded-full " />
                    <div className="space-y-2">
                      <p className="md:text-sm  text-xs font-bold text-gray-900">Atlene McCoy</p>
                      <p className="md:text-sm  text-xs text-gray-500">2 October 2012</p>
                      <div className="flex items-center mb-1 gap-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="lg:w-5 lg:h-5 w-3 h-3" viewBox="0 0 18 17" fill="currentColor">
                            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide >
              <div className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">

                <div className='flex md:flex-row flex-col justify-between md:gap-5 gap-2'>
                  <div className="p-2">
                    <div className="tracking-wide lg:text-sm text-xs text-yellow-500 font-semibold">Good Tour, Really Well Organised</div>
                    <p className=" xl:text-base lg:text-sm text-xs text-gray-500 ">
                      Great tour! Everything was well planned and organized.
                    </p>
                    <p className="mt-2 text-gray-500  lg:text-sm text-xs"> Amazing Guide!</p>
                    <p className="mt-2 text-gray-600 xl:text-base lg:text-sm text-xs">
                      Our Tour Guide in Kuckata Was Fantastic! They Showed Us The Best Spots For Sunrise And Sunset, Shared Fascinating Local Stories, And Made The Trip Smooth And Enjoyable. Their Friendly Attitude And Attention To Detail Truly Made Our Visit Unforgettable. Highly Recommend!
                    </p>

                  </div>

                  <div className='flex gap-1 text-[#778088] lg:text-sm text-xs'>
                    <p>Helpful?</p>
                    <p>Yes</p>
                  </div>
                </div>

                <div className=''>
                  <div className="flex items-center justify-center md:gap-5  gap-2 lg:mt-4 mt-2">
                    <img src={girl} alt="avatar"
                      className="md:h-32 md:w-28 h-20 w-20  rounded-full " />
                    <div className="space-y-2">
                      <p className="md:text-sm  text-xs font-bold text-gray-900">Atlene McCoy</p>
                      <p className="md:text-sm  text-xs text-gray-500">2 October 2012</p>
                      <div className="flex items-center mb-1 gap-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="lg:w-5 lg:h-5 w-3 h-3" viewBox="0 0 18 17" fill="currentColor">
                            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide >
              <div className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-600">

                <div className='flex md:flex-row flex-col justify-between md:gap-5 gap-2'>
                  <div className="p-2">
                    <div className="tracking-wide lg:text-sm text-xs text-yellow-500 font-semibold">Good Tour, Really Well Organised</div>
                    <p className=" xl:text-base lg:text-sm text-xs text-gray-500 ">
                      Great tour! Everything was well planned and organized.
                    </p>
                    <p className="mt-2 text-gray-500  lg:text-sm text-xs"> Amazing Guide!</p>
                    <p className="mt-2 text-gray-600 xl:text-base lg:text-sm text-xs">
                      Our Tour Guide in Kuckata Was Fantastic! They Showed Us The Best Spots For Sunrise And Sunset, Shared Fascinating Local Stories, And Made The Trip Smooth And Enjoyable. Their Friendly Attitude And Attention To Detail Truly Made Our Visit Unforgettable. Highly Recommend!
                    </p>

                  </div>

                  <div className='flex gap-1 text-[#778088] lg:text-sm text-xs'>
                    <p>Helpful?</p>
                    <p>Yes</p>
                  </div>
                </div>

                <div className=''>
                  <div className="flex items-center justify-center md:gap-5  gap-2 lg:mt-4 mt-2">
                    <img src={second} alt="avatar"
                      className="md:h-32 md:w-28 h-20 w-20  rounded-full " />
                    <div className="space-y-2">
                      <p className="md:text-sm  text-xs font-bold text-gray-900">Atlene McCoy</p>
                      <p className="md:text-sm  text-xs text-gray-500">2 October 2012</p>
                      <div className="flex items-center mb-1 gap-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="lg:w-5 lg:h-5 w-3 h-3" viewBox="0 0 18 17" fill="currentColor">
                            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </SwiperSlide>

          </Swiper>

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="swiper-button-prev group flex justify-center items-center border border-solid border-gray-100 w-1 h-[3px] transition-all duration-500 rounded-full hover:bg-yellow-500">

            </button>
            <button className="swiper-button-next group flex justify-center items-center border border-solid border-gray-100 w-1 h-[3px] transition-all duration-500 rounded-full hover:bg-yellow-500">

            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GuideProfile;