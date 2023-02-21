import React, { FC, MutableRefObject, useRef } from 'react';
import NavBar from "./components/nav-bar";
import LineBar from "./components/line-bar";
import Footer from "./components/footer";
import '../../index.css'
import RightBar from "./components/right-bar";
import { FaCheck } from "react-icons/all";

const PageContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <div className="h-full w-full text-textColor flex flex-col">
      <NavBar/>
      <div className="flex overflow-y-scroll h-full relative sm:mr-6" id="scrollable">
        <FaCheck className="invisible sm:visible fixed right-10 top-18 text-green-500"/>
        <LineBar ref={ref}/>
        <div className="w-full min-h-[550px] xl:min-h-[400px] pl-[3rem] pr-2 md:px-[3rem]  py-2" ref={ref}>
          {children}
        </div>
      </div>
      <RightBar/>
      <Footer/>
    </div>
  )
};

export default PageContainer;