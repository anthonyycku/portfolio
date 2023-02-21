import React from 'react';
import { AboutMeTypesList } from "../about";

interface FunctionTextProps {
  children: React.ReactNode;
  name: string;
  paramsName: string;
  comment?: string;
  stateChange: React.Dispatch<React.SetStateAction<string>>
  state: string;
  buttonsList?: AboutMeTypesList[];
}

const FunctionText = (
  { name, children, paramsName, comment, state, stateChange, buttonsList }: FunctionTextProps
) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col md:flex-row md:space-x-2">
        <div className="flex space-x-2 whitespace-nowrap">
          <span className="text-amber-600">const</span> <span className="text-yellow-400">{name}</span>
          <p>{`= (`}</p>
          <p>{paramsName}:</p>
          <p className="text-amber-600">{state}</p>
          <p>{`) => {`}</p>
        </div>

        <div className="md:flex flex-col md:flex-row flex-wrap space-x-2">
          {comment && <p className="text-gray-500">{`//${comment}`}</p>}
          {buttonsList && buttonsList.map(({ name }) => (
            <button
              key={name}
              onClick={() => stateChange(name)}
              className={`text-sm border-amber-600 border rounded px-2 hover:bg-amber-700 hover:text-white ${state === name ? 'bg-emerald-700 text-white border-white' : 'text-amber-600'}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <p className="pl-4 xl:max-w-[50%] md:max-w-[75%] text-gray-50"
         dangerouslySetInnerHTML={{ __html: buttonsList!.find(obj => obj.name === state)!.text }}></p>

      <p>{`}`}</p>
    </div>
  )
};

export default FunctionText;