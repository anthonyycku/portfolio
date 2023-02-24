import React from 'react';
import { AboutMe } from "../about";

interface FunctionTextProps {
  name: string;
  paramsName: string;
  commentList?: string[];
  stateChange: React.Dispatch<React.SetStateAction<AboutMe>>
  state: AboutMe;
  buttonsList?: AboutMe[][];
}

const FunctionText = (
  { name, paramsName, commentList, state, stateChange, buttonsList }: FunctionTextProps
) => {

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex-col md:flex-row md:space-x-2">
        <div className="flex space-x-2 whitespace-nowrap items-baseline">
          <span className="text-amber-600">const</span> <span className="text-yellow-400 text-xl">{name}</span>
          <p>{`= (`}</p>
          <p>{paramsName}:</p>
          <p className="text-amber-600">{state.name}</p>
          <p>{`) => {`}</p>
        </div>

        {commentList && commentList.map((comment, commentListIndex) => (
          <div key={comment} className="md:flex flex-col md:flex-row flex-wrap space-x-2 gap-y-1 mt-2">
            {comment && <p className="text-gray-500">{`//${comment}`}</p>}
            {buttonsList?.[commentListIndex] && buttonsList[commentListIndex].map(({ name, text }) => (
              <button
                key={name}
                onClick={() => stateChange({ name, text })}
                className={`text-sm border-amber-600 border rounded px-2 hover:bg-amber-700 hover:text-white ${state.name === name ? 'bg-emerald-700 text-white border-white' : 'text-amber-600'}`}
              >
                {name}
              </button>
            ))}
          </div>
        ))}
      </div>

      <p className="pl-4 xl:max-w-[50%] md:max-w-[75%] text-gray-200"
         dangerouslySetInnerHTML={{ __html: state.text }}></p>

      <p>{`}`}</p>
    </div>
  )
};

export default FunctionText;