import React from 'react';
import TagLine from "../components/TagLine";
import { AiFillGithub, BiLinkExternal, SiNetlify } from "react-icons/all";
import myFriendBillImage0 from "../../../assets/images/myfriendbill0.png";
import myFriendBillImage from "../../../assets/images/myfriendbill.png";
import myFriendBillImage2 from "../../../assets/images/myfriendbill2.png";
import myFriendBillImage3 from "../../../assets/images/myfriendbill3.png";
import { Carousel } from "react-responsive-carousel";

const MyFriendBill = () => {
  return (
    <>
      <div className="flex space-x-6 items-end">
        <p className="text-yellow-400 text-2xl">My Friend Bill</p>
        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://myfriendbill.netlify.app/"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <SiNetlify/>
            <p>Site</p>
            <BiLinkExternal/>
          </a>
          <a
            target="_blank"
            href="https://github.com/anthonyycku/MyFriendBill"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Github</p>
            <BiLinkExternal/>
          </a>
        </div>
      </div>
      <Carousel width={950}>
        <img src={myFriendBillImage0}/>
        <img src={myFriendBillImage}/>
        <img src={myFriendBillImage2}/>
        <img src={myFriendBillImage3}/>
      </Carousel>
      <TagLine lineStyles="text-orange-400" text="Stack" inline>
        React, Typescript, TailwindCSS, Supabase, PostgreSQL
      </TagLine>
      <TagLine text="Info" inline={false} color="purple">
        <div className="flex flex-col space-y-1">
          <p>
            MyFriendBill is an application I built from the ground up that allows users to keep track of the money they
            are owed/owe to other users
            or institutions.
          </p>
          <p>Users can sign in via Google OAuth2, but can also sign in with a guest account.</p>
          <br/>
          <p className="font-bold">Features include:</p>
          <li>Search and filter bills by name / amount / description.</li>
          <li>The same bill is posted to the recipient when created or edited.</li>
          <li>Bills update their next due dates (based on frequency) when marked as complete.</li>
          <li>When bills are completed, they are archived and can be accessed if needed.</li>
          <li>Bill summary that shows the total amount owed and requested from recipients.</li>
        </div>
      </TagLine>
    </>
  )
};

export default MyFriendBill;