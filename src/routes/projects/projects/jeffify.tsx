import React from 'react';
import { AiFillGithub, BiLinkExternal } from "react-icons/all";
import jeffifyImage from '../../../assets/images/jeffify.png'
import TagLine from "../components/TagLine";

const Jeffify = () => {
  return (
    <>
      <div className="flex space-x-6 items-end">
        <p className="text-yellow-400 text-2xl">Jeffify - Spotify Clone</p>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://github.com/anthonyycku/jeffify_react"
            className="hover:text-green-400 flex items-center space-x-1"
          >
            <AiFillGithub/>
            <p>Frontend</p>
            <BiLinkExternal/>
          </a>
          <a
            target="_blank"
            href="https://github.com/anthonyycku/jeffify"
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
      <img src={jeffifyImage} width={1000}/>

      <TagLine lineStyles="text-orange-400" text="Stack" inline>
        React, Ruby on Rails, PostgreSQL, AWS S3
      </TagLine>

      <TagLine text="Info" inline={false} color="purple">
        <div className="flex flex-col space-y-1">
          <p>
            A 2 week project, aiming to showcase Spotify's unique style and various features including search,
            playlists, and audio control - All built from scratch with no packages.
          </p>
          <p>
            And yes, it really does play music! mp3 files are saved in an Amazon S3 database and are fetched when user
            clicks play on a song.
          </p>
          <br/>
          <p className="font-bold">Features include:</p>
          <li>Many-to-many relational database between users, playlists, songs, albums, and artists.</li>
          <li>Logging in enables users to create personal playlists.</li>
          <li>Full audio control! Pause, skip, reverse, random, and time-seeking all work.</li>
          <li>Queue individual songs or an entire album at once.</li>
          <li>Search and filter by song name, artist name, and album name.</li>
        </div>
      </TagLine>
    </>
  )
};

export default Jeffify;