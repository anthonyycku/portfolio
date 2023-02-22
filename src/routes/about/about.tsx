import React, { useState } from 'react';
import FunctionText from "./components/function-text";

export interface AboutMe {
  name: string;
  text: string;
}

const About = () => {
  const workInfo = (title: string = '', company: string = '', location: string = '', dates: string = '') => {
    return (
      `
        <span class='text-amber-600 text-xl'>${title}</span> 
        <div>
        <span class='text-amber-500 text-lg'>${company}</span> 
        <span class='text-white'>${location}</span>
        </div>
        <span class='text-white'>${dates}</span>
        `
    )
  }

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
      text: `${workInfo("Software Engineer", "Rational Enterprise", "Albany, New York", "Full-time (May 2021 - Current)")}<br><br>I am currently developing eDiscovery software using React, Angular, and Java Spring Boot. I also conduct code reviews and help onboard new hires.<br><br>My most notable assignments are: <br><br><li>Integrating Google API with our eDiscovery backend service and database, allowing clients to download and update their Google Drive files directly to and from the platform.</li> <br><li>Designing and building a new eDiscovery Governance application UI from scratch in React, using MaterialUI.</li> <br><li>Developing pre-discovery features in Angular and Spring Boot.</li>`
    },
    {
      name: 'Trader',
      text: `${workInfo("Trader", "Self-employed", "", "(Jan 2016 - Feb 2021)")} <br><br>I actively managed my personal securities portfolio by executing buy and sell orderse based on a combination of fundamental and technical analysis. Through careful analysis, I sought to manage portfolio risk and optimize returns.<br><br>My takeaway from this was to practice discipline and patience, especially during periods of market volatility. Although I made a lot of mistakes, I found that these mistakes provided me with valuable opportunities for self-reflection and personal growth.`
    },
    {
      name: 'BlueRock',
      text: `${workInfo("IT Consulting", "BlueRock Networks", "San Francisco, California", "Internship (Aug - Sep 2018)")}<br><br>I provided on-site technical support to clients, assisting them with setup and troubleshooting their systems, software, and services. My clients were primarily start-up companies, and I worked closely with them to ensure that their infrastructure solutions were up-to-date and aligned with their growth objectives. <br><br>In addition to on-site support, I also performed system administration work, managing client systems remotely. Leveraging my expertise, I was able to resolve 95% of level 1 tickets through ZenDesk without the need for escalation.`
    },
    {
      name: 'PrimeStreet',
      text: `${workInfo("Financial Analyst", "PrimeStreet", "Bangkok, Thailand", "Internship (Jul - Sep 2017)")}<br><br>During my investment banking internship, I was responsible for generating financial forecasts, maintaining financial models, preparing reports and presentations for senior management.<br><br>Through this experience, I gained practical skills in financial analysis, budgeting, and forecasting, as well as exposure to real-world business operations.`
    },
    {
      name: 'ITRI',
      text: `${workInfo("Digital Marketing", "Industrial Technology Research Institute (ITRI)", "Hsinchu, Taiwan", "Internship (Aug - Sep 2016)")}<br><br>I was responsible for managing the company's social media peresence, including creating and publishing content, responding to comments, and engaging with followers. I used tools such as Facebook Insights to analyze metrics and track the performance of our social media campaigns. This allowed me to identify areas for improvement and make data-driven decisions to optimize our social media strategy.<br><br>Additionally, I conducted interviews with various departments in the company to learn about their initiatives and explore ways to integrate these into our social media content. This experience helped me develop stronger communication skills and allowed me to work collaboratively with various teams to achieve shared goals.`
    },
    {
      name: 'KTB',
      text: `${workInfo("Software Engineer", "KrungThai Bank", "Bangkok, Thailand", "Internship (Jul - Sep 2015)")}<br><br>I assisted in developing a backend user authentication system using Java and MySQL. This experience allowed me to work on a mission-critical project that was essential to the functioning of the bank's internal systems.<br><br>I wrote unit tests to ensure the system was functioning as expected and that new code did not negatively impact performance. I learned the importance of testing and optimization in software development.`
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
        comment="Select company:"
        state={aboutWorkType}
        stateChange={setAboutWorkType}
        buttonsList={aboutWorkTypesList}
      />
    </div>
  )
};

export default About;