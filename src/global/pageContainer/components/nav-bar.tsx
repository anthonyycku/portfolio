import React, { useCallback } from 'react';
import { Link, useLocation } from "react-router-dom";
import jsSVG from '../../../assets/svg/js-file-icon.svg';
import cssSVG from '../../../assets/svg/css-file-icon.svg';
import fileSVG from '../../../assets/svg/pdf-file-icon.svg';
import htmlSVG from '../../../assets/svg/html-file-icon.svg';
import '../pageContainer.css'
import { AiOutlineClose } from "react-icons/all";

type RouteTab = [string, string, string, string];

const NavBar = () => {
  const location = useLocation();
  const tabStyle = useCallback((url: string) => {
    return url === location.pathname ? 'bg-gray-500 shadow-[inset_0_-3px_0_#0096FF]' : 'hover:bg-gray-600'
  }, [location]);
  const windowText = useCallback(() => {
    switch (location.pathname) {
      case ('/about'):
        return 'About.js'
      case ('/projects'):
        return 'Projects.html';
      case ('/contact'):
        return 'Contact.css';
      default:
        return 'Home.txt';
    }
  }, [location])

  const routeTabs: RouteTab[] = [
    ['Home', '/', fileSVG, 'file-svg'],
    ['About', '/about', jsSVG, 'js-svg'],
    ['Projects', '/projects', htmlSVG, 'html-svg'],
    ['Contact', '/contact', cssSVG, 'css-svg']
  ];

  const handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  }

  return (
    <>
      <div className="absolute right-0">
        <button onClick={handleClose} className="hover:bg-red-500 px-2"><AiOutlineClose className="text-2xl py-1"/>
        </button>
      </div>

      <div className="bg-slate-600 font-light text-center">
        <p>{`Anthony Ku Portfolio - ${windowText()}`}</p>
      </div>

      <div className="bg-navColor flex justify-between md:justify-start">
        {routeTabs.map(([title, url, icon, classString]) => (
          <Link to={url} key={title}>
            <button type="button"
                    className={`${tabStyle(url)} min-w-[100px] p-4 md:p-2 flex items-start justify-center space-x-1`}>
              <img src={icon} width={18} className={classString}/>
              <p>{title}</p>
            </button>
          </Link>
        ))}
      </div>
    </>
  )
};

export default NavBar;