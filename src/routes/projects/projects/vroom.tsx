import React from 'react';
import { AiFillGithub, BiLinkExternal } from "react-icons/all";
import vroomImage from '../../../assets/images/vroom.png';
import TagLine from "../components/TagLine";

const Vroom = () => {
  return (
    <>
      <div className="flex space-x-6 items-end">
        <p className="text-yellow-400 text-2xl">Vroom</p>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://github.com/anthonyycku/vroom_frontend"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Frontend</p>
            <BiLinkExternal/>
          </a>
          <a
            target="_blank"
            href="https://github.com/anthonyycku/vroom_backend"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Backend</p>
            <BiLinkExternal/>
          </a>
        </div>
      </div>
      <p className="text-red-400">
        ** Not hosted anymore as Heroku removed their free web/database hosting **
      </p>
      <img src={vroomImage} width={1000}/>

      <TagLine lineStyles="text-orange-400" text="Stack" inline>
        React, Ruby on Rails, PostgreSQL, Bootstrap
      </TagLine>

      <TagLine text="Info" inline={false} color="purple">
        <div className="flex flex-col space-y-1">
          <p>
            A 3 day team collaboration project - Responsive and CRUD application showing the parent/child companies and
            car models associated with each car brand. The database design is one-to-many.
          </p>
          <br/>
          <p className="font-bold">Features include:</p>
          <li>Users can access children companies through the parent company</li>
          <li>SQL sorting, allowing users to sort and filter cars based on price, type, rating, and model.</li>
          <li>Users can create, edit, and delete companies.</li>
          <li>Companies can be attached to other companies to either become parents or children.</li>
        </div>
      </TagLine>
    </>
  )
};

export default Vroom;