import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyFriendBill from "./projects/my-friend-bill";
import TagLine from "./components/TagLine";
import Jeffify from "./projects/jeffify";
import Runescape from "./projects/runescape";
import Vroom from "./projects/vroom";
import Pawsrus from "./projects/pawsrus";
import Inquizitor from "./projects/inquizitor";

const Divider = () => {
  return (
    <>
      <br/>
      <div className="border border-b-2 border-gray-400 w-full "/>
      <br/>
    </>
  )
}

const Projects = () => {

  return (
    <div className="flex flex-col space-y-2 pb-2">
      <TagLine text="h1" inline size="2xl" lineStyles="text-orange-400">
        Projects
      </TagLine>

      <Divider/>

      <MyFriendBill/>

      <Divider/>

      <Jeffify/>

      <Divider/>

      <Runescape/>

      <Divider/>

      <Vroom/>

      <Divider/>

      <Pawsrus/>

      <Divider/>

      <Inquizitor/>
    </div>
  )
};

export default Projects;