import React from 'react';
import TagLine from "./components/TagLine";
import myFriendBillImage from '../../assets/images/myfriendbill.png';
import Tags from "../../global/tags/tags";

const Projects = () => {
  return (
    <div className="flex flex-col space-y-2 pb-2">
      <TagLine text="h1" inline size="2xl" lineStyles="text-orange-400">
        Projects
      </TagLine>
      <br/>
      <br/>
      <Tags text=" MyFriendBill /" size="2xl"/>
      <img src={myFriendBillImage} width={1000}/>
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
          <li>Table that displays requests/payments to and from other users/institutions.</li>
          <li>The same bill is posted to the recipient when created or edited.</li>
          <li>Bills update their next due dates (based on frequency) when marked as complete.</li>
          <li>When bills are completed, they are archived and can be accessed.</li>
          <li>Bill summary that shows the total amount owed and requested from recipients.</li>
        </div>
      </TagLine>
    </div>
  )
};

export default Projects;