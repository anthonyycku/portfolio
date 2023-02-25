import React from 'react';
import { AiFillGithub, BiLinkExternal } from "react-icons/all";
import inquizitorImage from "../../../assets/images/inquizitor.png";
import TagLine from "../components/TagLine";

const Inquizitor = () => {
  return (
    <>
      <div className="flex space-x-6 items-end">
        <p className="text-yellow-400 text-2xl">InQUIZitor</p>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://github.com/anthonyycku/inQUIZitor"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Github</p>
            <BiLinkExternal/>
          </a>
        </div>
      </div>
      <p className="text-red-400">
        ** Not hosted anymore as Heroku removed their free web/database hosting **
      </p>
      <img src={inquizitorImage} width={1000}/>
      <TagLine lineStyles="text-orange-400" text="Stack" inline>
        React, Express (Node), MongoDB
      </TagLine>

      <TagLine text="Info" inline={false} color="purple">
        <div className="flex flex-col space-y-1">
          <p>
            My first project in React! InQUIZitor is a trivia game where the user has to gain a certain number of points
            before the timer runs out.
          </p>
        </div>
      </TagLine>
    </>
  )
};

export default Inquizitor;