import React, { useState } from 'react';
import FunctionText from "./components/function-text";

export interface AboutMe {
  name: string;
  text: string;
}

const About = () => {
  const aboutMeTypesList: AboutMe[] = [
    {
      name: 'Person',
      text: "I'm a flexible, results-driven, and growth-minded individual who values loyalty and passion. With experience in full-stack development, mentorship, and code review, my goal is to collaborate effectively and contribute to the success of the team.<br><br>I am committed to lifelong learning and believe that it is an essential part of personal growth and development. I always welcome challenges that take me out of my comfort zone - That's where the best learning gets done. <br><br>I consider myself easy-going and friendly; adaptable to new people and new environments. Fostering positive relationships with my colleagues and clients is vital to achieving long-term success."
    },
    {
      name: 'Athlete',
      text: "Regular exercise is essential for maintaining a healthy mind and promotes overall well-being. That's why I try to go to the gym every day to lift away the evil spirits.<br><br>My main sport is badminton as I've been playing it since I was 5 years old and was president of my college badminton team. I'm alright at tennis, but not really. I sneak into local high school tennis courts to play.<br><br>I also have a 80lbs pitbull named Turtle, so I engage in a lot of activities with him. He throws, I fetch."
    },
    {
      name: 'Musician',
      text: "Although it's been a while, I did train as a pianist and guitarist when I was a child. I'm not musically gifted - at all - but practice and experience does prove to be a worthwhile endeavor.<br><br>I also enjoy singing but no one would pay to listen to that. Not even my mom."
    },
    {
      name: 'DogTrainer',
      text: "Dog training is a more recent activity of mine. It all started when I brought my dog, Turtle, to a trainer because he was very reactive when I first adopted him.<br><br> I ended up enjoying it so much that I sometimes help her train dogs. On weekends, I help train reactive dogs and provide the knowledge and tools to owners so that they can continue their pet's training by themselves."
    }
  ];

  const aboutWorkTypesList: AboutMe[] = [
    {
      name: 'Rational Enterprise',
      text: "Software Engineer (May 2021 - Current) <br><br>I am currently developing eDiscovery software using React, Angular, and Java Spring Boot. My most notable assignments are: <br><br><li>Integrating Google API with our eDiscovery backend service, allowing clients to download and update their Google Drive files directly to and from the platform.</li> <br><li>Designing and building a new eDiscovery Governance application UI from scratch in React, using MaterialUI.</li> <br><li>Developing pre-discovery features in Angular.</li>"
    }
  ]

  const [aboutMeType, setAboutMeType] = useState<AboutMe>(aboutMeTypesList[0]);
  const [aboutWorkType, setAboutWorkType] = useState<AboutMe>(aboutWorkTypesList[0]);

  return (
    <div className="flex flex-col space-y-10 pb-2">
      <FunctionText
        name="aboutMe"
        paramsName="me"
        comment="Select a type:"
        state={aboutMeType}
        stateChange={setAboutMeType}
        buttonsList={aboutMeTypesList}
      />
      <FunctionText
        name="aboutExperience"
        paramsName="company"
        state={aboutWorkType}
        stateChange={setAboutWorkType}
      />
    </div>
  )
};

export default About;