import React, { useEffect, useRef, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import gsap from "gsap";
import "../src/App.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkewedImages = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const skewSetter = gsap.quickTo(".dd", "skewY"); // fast
    const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    const handleScroll = () => {
      const scrollOffset = wrapperRef.current.scrollTop;
      const velocity = scrollOffset / -50;
      skewSetter(clamp(velocity));
    };

    wrapperRef.current.addEventListener("scroll", handleScroll);

    return () => {
      wrapperRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [firstref, firstrefView] = useInView();
  const [coursesText, setCoursesText] = useState(null);
  const [refTestimonial, inViewTestimonial] = useInView();
  // const [testimonialText, setTestimonialText] = useState();

  useEffect(() => {
    debugger
    if (firstrefView && coursesText !== "Start Course") {

      setCoursesText("Start Course");
    } else if (inView && coursesText !== "Courses") {
      setCoursesText("Courses" );
    } else if(inViewTestimonial && coursesText  !== "test") {

      setCoursesText("testmonial ");
    }
   
  }, [ inView, firstrefView, inViewTestimonial]);

  console.log(coursesText);
  return (
    <div
      id="wrapper"
      ref={wrapperRef}
      style={{ overflowY: "scroll", height: "120vh" }}
    >
      <div className="App">
        <div className="w-full h-full flex items-center justify-center ">
          <button className="btn-fixed">Get started</button>
        </div>
        <div className="circle gradient-green"
        
          ref={firstref}
          animate={control}
          variants={sectionVariant}
          controls="hidden"

        >
          <div className="flex flex-col items-center px-16 pt-7 pb-20 bg-slate-950 max-md:px-5">
            <div className="flex flex-col items-center w-full max-w-[1180px] max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center self-stretch w-full max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                  className="shrink-0 self-stretch max-w-full aspect-[2.33] w-[117px]"
                />
                <div className="flex gap-5 self-stretch my-auto text-xs max-md:flex-wrap">
                  <div className="justify-center px-3 py-1.5 my-auto text-white whitespace-nowrap bg-blue-700 rounded-lg">
                    Home
                  </div>
                  <div className="flex flex-auto gap-5 justify-between items-center text-white text-opacity-50">
                    <div className="justify-center self-stretch p-2.5 whitespace-nowrap">
                      Courses
                    </div>
                    <div className="self-stretch my-auto">Contact Us</div>
                    <div className="self-stretch my-auto">About Us</div>
                    <div className="self-stretch my-auto">Chat With AI</div>
                  </div>
                </div>
                <div className="flex gap-5 self-stretch my-auto text-sm">
                  <div className="justify-center px-6 py-3 font-medium bg-blue-700 rounded-2xl leading-[114%] shadow-[0px_12px_23px_rgba(0,56,97,1)] text-neutral-200 max-md:px-5">
                    Explore Courses
                  </div>
                  <div className="flex gap-5 justify-between pl-8 font-bold text-white rounded-2xl border-sky-500 border-solid shadow-lg border-[1.5px]">
                    <div className="my-auto">Sign In</div>
                    <div className="justify-center px-8 py-3 bg-blue-600 rounded-2xl shadow-lg max-md:px-5">
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-[16px] font-bold text-blue-700 leading-[52.44px] max-md:mt-10 max-md:text-4xl">
                <h1
                  aria-hidden="true"
                  class="text-blue-700   filter-text capitalize"
                >
                  {coursesText}
                </h1>
              </div>
              <div className="mt-7 text-base text-neutral-200 text-opacity-50">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </div>

              <div id="content">
                <section id="content">
                  <ParallaxProvider>
                    <Parallax y={[0, 0]} tagOuter="figure">
                      <section className="">
                        <div className="mt-20 w-full max-w-[1128px] max-md:mt-10 max-md:max-w-full">
                          <div className="w-full flex items-center justify-between">
                            <div className="flex w-full h-full ">
                              <div
                                data-speed="0.8"
                                className="dd grid grid-cols-8  max-md:ml-0 max-md:w-full"
                              >
                                {[1, 2, 3, 4].map((item, index) => {
                                  return (
                                    <>
                                      <div
                                        key={item}
                                        className={` ${
                                          index === 1
                                            ? "row-start-3 row-end-4 col-start-6 col-end-8 "
                                            : ""
                                        } ${
                                          index === 0
                                            ? "col-start-3 col-end-5 "
                                            : ""
                                        } ${
                                          index === 2
                                            ? "row-start-4 row-end-5 col-start-3 col-end-5 "
                                            : ""
                                        } ${
                                          index === 3
                                            ? "row-start-8 row-end-9 col-start-6 col-end-8  "
                                            : ""
                                        } grow justify-center px-2.5 py-3 w-full text-center text-white backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8`}
                                      >
                                        <div className="flex flex-col items-center px-8 pt-7 pb-14 border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                                          <img
                                            loading="lazy"
                                            className="w-20 h-20 rounded-full border-[1px] bg-gradient-to-r from-[#57677a] to-[#1f344e] aspect-[0.65]"
                                          />
                                          <h1 className="mt-8">
                                            Digital Marketing
                                          </h1>
                                          <p className="text-base font-light text-[#898ca9] pt-7">
                                            Speak with various AI tutors,
                                            tailored to youLorem ipsum dolor sit
                                            amet, Lorem ipsum dolor
                                          </p>
                                          <a className="flex justify-between w-32 pt-8 text-[#194bfd]">
                                            Start Course
                                            <img
                                              className="w-[25px] h-[25px] "
                                              srcSet="/arrow.png"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </Parallax>
                  </ParallaxProvider>
                </section>
              </div>
            </div>
          </div>
        </div>
        <motion.section
          className="w-full"
          ref={ref}
          variants={sectionVariant}
          animate={control}
          controls="hidden"

        >
          <div className="h-[30vh]">
            <h1 className="text-center text-[46px] font-semibold capitalize">
              Our
              <span className="text-[#194BFD]"> full {coursesText}</span>
            </h1>
            <p className="pt-[25px] text-[#E6E6E682] font-medium text-[16px] text-end w-[66%] ">
              Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor
              do amet sint. Velit officia consequat duis enim velit <br />
            </p>
          </div>
          <div className="h-[100vh]">
            <img srcSet="/background.png" className="h-[77%] w-[100%]" />
          </div>
        </motion.section>
        <motion.section
          className="w-full"
          ref={refTestimonial}
          variants={sectionVariant}
          animate={control}
        >
          <div className="testmonial">
            <h1 className="w-full h-screen">
              <h1
                aria-hidden="true"
                class="text-blue-700  text filter-text capitalize"
              >
                {coursesText}
              </h1>
              <div className="h-[100vh] flex">
                <div
                  className="w-[50%] h-[100%] bg-gradient-to-r from-[#000618] to-[#000D25] code code--wider code--left aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <h1 className="text-[28px] font-[500] text-center pt-[88px]">
                    “Courses are good and I recommend”
                  </h1>
                  <p className="pt-[40px] px-[55px] leading-9 font-normal text-[21px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.Amet
                    minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet
                  </p>
                  <img
                    className="w-[45%] h-[16%] ml-[42px] mt-10"
                    src="sign.png"
                  />
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-center">
                  <div className="w-[80%] h-[80%] rounded-[33px]">
                    <img
                      className="rounded-[20px] filter grayscale hover:filter-none transition duration-500 ease-in-out"
                      srcSet="/person.png"
                    />
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SkewedImages;
