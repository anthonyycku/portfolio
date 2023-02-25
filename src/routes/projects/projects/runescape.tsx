import React from 'react';
import { AiFillGithub, BiLinkExternal } from "react-icons/all";
import TagLine from "../components/TagLine";
import { Carousel } from "react-responsive-carousel";
import osrs1 from '../../../assets/images/osrs1.png';
import osrs2 from '../../../assets/images/osrs2.png';
import osrs3 from '../../../assets/images/osrs3.png';

const Runescape = () => {
  return (
    <>
      <div className="flex space-x-6 items-end">
        <p className="text-yellow-400 text-2xl">Old School Runescape Scripts</p>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://github.com/anthonyycku/osrs-autoit-scripts"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Version 1(old)</p>
            <BiLinkExternal/>
          </a>
          <a
            target="_blank"
            href="https://github.com/anthonyycku/osrs-autoit-scripts-v2"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Version 2(new)</p>
            <BiLinkExternal/>
          </a>
        </div>
      </div>

      <Carousel>
        <img src={osrs1} width={1000}/>
        <img src={osrs2} width={1000}/>
        <img src={osrs3} width={1000}/>
      </Carousel>

      <TagLine lineStyles="text-orange-400" text="Stack" inline>
        AutoIt, PixelSearch, RuneLite Plugins
      </TagLine>

      <TagLine text="Info" inline={false} color="purple">
        <div className="flex flex-col space-y-1">
          <p>
            I created scripts in AutoIt to automate player activities in the popular online game, Old School Runescape
            (OSRS), leveraging PixelSearch to facilitate the scripts in handling event triggers.
          </p>
          <br/>
          <p>
            This was strictly a educational experience for me and did not use these scripts for monetary gain.
          </p>
        </div>
      </TagLine>
    </>
  )
};

export default Runescape;