import React from 'react';
import { AiFillGithub, BiLinkExternal } from "react-icons/all";
import pawsrus from "../../../assets/images/pawsrus.png";
import TagLine from "../components/TagLine";

const Pawsrus = () => {
  return (
    <>
      <div className="flex space-x-6 items-end">
        <p className="text-yellow-400 text-2xl">Paws R Us</p>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://github.com/anthonyycku/PawsRUs"
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
      <img src={pawsrus} width={1000}/>
      <TagLine lineStyles="text-orange-400" text="Stack" inline>
        EJS, Express (Node), MongoDB
      </TagLine>

      <TagLine text="Info" inline={false} color="purple">
        <div className="flex flex-col space-y-1">
          <p>
            A small, responsive and CRUD application that allows users to post dog profiles, comment on profiles, and
            favorite profiles that pique your interest.
          </p>
        </div>
      </TagLine>
    </>
  )
};

export default Pawsrus;