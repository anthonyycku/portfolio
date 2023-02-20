import React, { useEffect, useRef, useState } from 'react';
import ProfilePic1 from '../../assets/images/profilepic.png';
import ProfilePic2 from '../../assets/images/profilepic2.png';
import ProfilePic3 from '../../assets/images/profilepic3.png';
import './home.css'
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/all";

interface HomeProps {
  homeVisited: boolean;
  setHomeVisited: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeProps> = ({ homeVisited, setHomeVisited }) => {
  const [nameDone, setNameDone] = useState(false);
  const [titleDone, setTitleDone] = useState(false);
  const visitedRef = useRef(false);

  const [imageIndex, setImageIndex] = useState(0);
  const images = [ProfilePic1, ProfilePic2, ProfilePic3];

  useEffect(() => {
    return () => {
      if (visitedRef.current) setHomeVisited(true);
      visitedRef.current = true;
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex(prev => ((prev + 1) % images.length));
    }, 5000);

    return () => clearInterval(timer);
  }, [imageIndex])

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <div>

      <div className="flex flex-col items-center xl:ml-72 xl:items-start">

        <div className="flex justify-center">
          {images.map((src, index) => (
            <img key={src} src={src} width={250}
                 className="xl:left-20 xl:top-10"
                 style={{
                   opacity: index === imageIndex ? 1 : 0,
                   transition: 'opacity 1s ease-in-out',
                   position: 'absolute',
                 }}/>
          ))}
        </div>


        <div className="text-3xl text-white mt-[250px] xl:mt-10">
          {(homeVisited || nameDone) ? (
            <p>Anthony Ku</p>
          ) : (
            <TypeAnimation
              wrapper="p"
              sequence={['Anthony Ku', 1000, () => setNameDone(true)]}
              speed={20}
              cursor
            />
          )}
        </div>

        <div className="text-2xl text-emerald-500">
          {nameDone && !titleDone &&
              <TypeAnimation
                  wrapper="p"
                  sequence={[
                    'Software Engineer', 1000,
                    () => setTitleDone(true)
                  ]}
                  speed={20}
                  cursor
              />
          }
          {(homeVisited || titleDone) && <p>Software Engineer</p>}
        </div>

        <div className="flex justify-center space-x-6">
          <button onClick={() => handleClick('https://www.linkedin.com/in/anthonyycku/')}
                  className={`hover:text-blue-400 text-5xl ${homeVisited ? '' : 'links'} `}>
            <AiFillLinkedin/>
          </button>
          <button onClick={() => handleClick('https://github.com/anthonyycku')}
                  className={`hover:text-green-400 text-5xl ${homeVisited ? '' : 'links'} `}>
            <AiFillGithub/>
          </button>
          <button onClick={() => handleClick('https://www.instagram.com/a.yc.k/')}
                  className={`hover:text-red-400 text-5xl ${homeVisited ? '' : 'links'} `}>
            <AiOutlineInstagram/>
          </button>
        </div>

        <div className="mt-10 px-2 md:px-20 xl:mt-4 xl:px-0 xl:w-1/2 self-start">
          {titleDone &&
              <>
                  <TypeAnimation
                      wrapper="p"
                      sequence={[
                        `Welcome to my site! I'm Anthony, a software engineer specializing in React development.
                       My goal is to create visually intuitive, functionally rich web experiences that drive user engagement
                       and to provide cutting-edge solutions that bring your visions to life. 
                       I'm here to help you make a lasting impact. 
                       Let's talk.`,
                        () => setHomeVisited(true)
                      ]}
                      speed={80}
                      cursor
                  />
              </>
          }
          {!titleDone && homeVisited && (
            <p>
              Welcome to my site! I'm Anthony, a software engineer specializing in React development.
              My goal is to create visually intuitive, functionally rich web experiences that drive user engagement
              and to provide cutting-edge solutions that bring your visions to life. I'm here to help you make a
              lasting impact. Let's talk.
            </p>
          )}
        </div>
      </div>

    </div>
  )
};

export default Home;