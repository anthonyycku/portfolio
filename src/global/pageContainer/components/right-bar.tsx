import React from 'react';
import bellSVG from '../../../assets/svg/notification-bell-icon.svg';
import databaseSVG from '../../../assets/svg/database-line-icon.svg';
import '../pageContainer.css';

const RightBar = () => {

  return (
    <div
      className="invisible sm:visible absolute right-0 bg-navColor h-full flex flex-col w-6 top-6 border-l border-gray-800">
      <button className={`text-[0.75rem] hover:bg-gray-600 h-36`}>
        <div className="absolute relative -top-10">
          <img src={bellSVG} className="bell-svg absolute left-1 -top-6" width={15}/>
          <p className="rotate-90 mt-6">Notifications</p>
        </div>
      </button>
      <button className={`text-[0.75rem] hover:bg-gray-600 h-28`}>
        <div className="absolute relative -top-6">
          <img src={databaseSVG} className="bell-svg absolute left-1 -top-6" width={15}/>
          <p className="rotate-90 mt-6">Database</p>
        </div>
      </button>
    </div>
  )
};

export default RightBar;