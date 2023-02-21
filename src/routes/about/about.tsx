import React, { useState } from 'react';
import FunctionText from "./components/function-text";

export interface AboutMeTypesList {
  name: string;
  text: string;
}

const About = () => {
  const [aboutMeType, setAboutMeType] = useState('person');

  const aboutMeTypesList: AboutMeTypesList[] = [
    {
      name: 'person',
      text: "I am a flexible, results-driven, and growth-minded individual who values loyalty and passion. With experience in full-stack development, mentorship, and code review, my goal is to collaborate effectively and contribute to the success of the team.<br><br>I am committed to lifelong learning and believe that it is an essential part of personal growth and development. I always welcome challenges that take me out of my comfort zone - That's where the best learning gets done. <br><br>I consider myself easy-going and friendly; adaptable to new people and new environments. I believe in fostering positive relationships with my colleagues and clients to achieve long-term success."
    },
    { name: 'athlete', text: '' },
    { name: 'musician', text: '' },
    { name: 'dogTrainer', text: '' }
  ];

  return (
    <div className="flex flex-col space-y-10 pb-2">
      <FunctionText
        name="aboutMe"
        paramsName="me"
        comment="Select a type:"
        state={aboutMeType}
        stateChange={setAboutMeType}
        buttonsList={aboutMeTypesList}
      >
        {aboutMeTypesList.find(obj => obj.name === aboutMeType)!.text}
      </FunctionText>
    </div>
  )
};

export default About;