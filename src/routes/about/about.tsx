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
        <span class='text-amber-500 text-xl'>${title}</span> 
        <div>
        <span class='text-amber-600 text-lg'>${company}</span> 
        <span class='text-white'>${location}</span>
        </div>
        <span class='text-white'>${dates}</span>
        `
    )
  }

  const aboutMeTypesList: AboutMe[] = [
    {
      name: 'Background',
      text: "My diverse background is a unique blend of culture and experiences. Born in the US, raised in Thailand, and of Taiwanese heritage, I have been immersed in a variety of cultural environments, which has broadened my perspective and nurtured my appreciation for diversity.<br><br>I believe my background has helped me develop a greater sense of empathy and open-mindedness in better understanding and appreciating differing ideas, and I'm excited to bring this fresh perspective to my workplace."
    },
    {
      name: 'Engineer',
      text: "I'm a flexible, results-driven, and growth-minded individual who values loyalty and passion. With experience in full-stack development, mentorship, and code review, my goal is to collaborate effectively and contribute to the success of the team.<br><br>I am committed to lifelong learning and believe that it is an essential part of personal growth and development. I always welcome challenges that take me out of my comfort zone - That's where the best learning gets done. <br><br>I consider myself easy-going and friendly; adaptable to new people and new environments. Fostering positive relationships with my colleagues and clients is vital to achieving long-term success."
    },
    {
      name: 'Athlete',
      text: "Engaging in regular exercise is crucial for promoting physical and mental health. With this in mind, I make it a priority to hit the gym every day to keep those evil spirits away from my mental and physical gains.<br><br>My favorite sport is badminton, which I've been playing since the age of 5. I even had the honor of serving as the president of my college badminton team. I'm alright at tennis - I sneak into the local high school courts to play.<br><br>In addition to these sports, I spend a lot of time doing physical activities with my 80-pound pitbull, Turtle. He's a big boy."
    },
    {
      name: 'Musician',
      text: "I trained as both a pianist and guitarist in my childhood. I wouldn't consider myself musically gifted, but I have found that consistent practice and experience have been well worth the effort.<br><br>I also enjoy singing but no one would pay to listen to that. Not even my mom, who loves me very much."
    },
    {
      name: 'Cook',
      text: "As someone who values learning new things, I enjoy cooking as it allows me to experiment with new flavors and techniques; never having a shortage of challenges. I approach cooking the same way I approach new dogs: with a lot of love and a bit of fear.<br><br> I also find that cooking serves as a creative outlet that also requires attention to detail and problem-solving skills; like what to do when I accidentally add 1 tablespoon of sugar instead of 1 teaspoon.<br><br>As a child, my mom taught me the culinary wonders of Thai and chinese cuisine. Now that I'm in the states, I enjoy experimenting with Western recipes and perfecting my grilling skills. Desserts are cool too, but I can't make them too often because I keep eating it all."
    },
    {
      name: 'DogTrainer',
      text: "More recently, I have taken up dog training, which began when I sought professional help for my dog, Turtle. Initially, Turtle had a reactive personality, but with guidance and a skilled dog trainer, we were able to make significant strides in his behavior.<br><br>I found the process of training so fulfilling that on weekends I would assist the same trainer in training reactive dogs. I lend my support in training and equipping owners with the necessary knowledge and tools to continue their pet's training. It brings me great satisfaction to know that I am helping animals and their owners foster a deeper bond - and to keep them from being sent back to the shelter."
    }
  ];

  const aboutWorkTypesList1: AboutMe[] = [
    {
      name: 'Rational Enterprise',
      text: `${workInfo("Software Engineer", "Rational Enterprise", "Albany, New York", "Full-time (May 2021 - Current)")}<br><br>Currently, I develop eDiscovery software, utilizing React, Angular, and Java Spring Boot. In addition to coding, I conduct code reviews and assist with the onboarding of new hires.<br><br>Among my key assignments, I integrated Google API with our eDiscovery backend service and database, which enables clients to directly download and update files from their Google Drives and extract the file contents into ElasticSearch.<br><br>My team and I also constructed a brand-new UI for our eDiscovery Governance application from the ground up using React and MaterialUI, further contributing to the evolution of our software. Lastly I have developed pre-discovery features in Angular and Spring Boot, which help clients better prepare for the eDiscovery process.`
    }
  ]
  const aboutWorkTypesList2: AboutMe[] = [
    {
      name: 'Stock Trader',
      text: `${workInfo("Stock Trader", "Self-employed", "", "(Jan 2016 - Feb 2021)")} <br><br>I actively managed my personal securities portfolio by executing buy and sell orderse based on a combination of fundamental and technical analysis. Through careful analysis, I sought to manage portfolio risk and optimize returns.<br><br>My biggest takeaway from this was practicing discipline and patience, especially during periods of market volatility. Although I made a lot of mistakes, I found that these mistakes provided me with valuable opportunities for self-reflection and personal growth.`
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

  const skillsList = (list: string[]): string => {
    let result = ``;
    list.forEach(item => {
      result += `<li>${item}</li>`
    })
    return result;
  }

  const frontEndList: string[] = ["React", "Angular", "Typescript / Javascript", "Redux / Context", "Jest", "Material UI", "TailwindCSS", "Css/Sass", "jQuery"];
  const backEndList: string [] = ["Node / Express", "Java Spring Boot", "Ruby on Rails", "MySQL / PostgreSQL", "MongoDB", "PocketBase / SupaBase"]
  const toolsList: string [] = ["Google API / OAuth2", "AWS S3", "Photoshop", "Github/Git", "JIRA", "SCRUM/Agile"]

  const aboutSkillsList: AboutMe[] = [
    {
      name: 'Frontend',
      text: `${skillsList(frontEndList)}`
    },
    {
      name: 'Backend',
      text: `${skillsList(backEndList)}`
    },
    {
      name: 'Tools',
      text: `${skillsList(toolsList)}`
    }
  ]


  const [aboutMeType, setAboutMeType] = useState<AboutMe>(aboutMeTypesList[0]);
  const [aboutWorkType, setAboutWorkType] = useState<AboutMe>(aboutWorkTypesList1[0]);
  const [aboutSkillsType, setAboutSkillsType] = useState<AboutMe>(aboutSkillsList[0]);

  return (
    <div className="flex flex-col space-y-10 pb-2">
      <FunctionText
        name="aboutMe"
        paramsName="me"
        commentList={["Select type:"]}
        state={aboutMeType}
        stateChange={setAboutMeType}
        buttonsList={[aboutMeTypesList]}
      />
      <FunctionText
        name="aboutExperience"
        paramsName="company"
        commentList={["Current company:", "Past experiences:"]}
        state={aboutWorkType}
        stateChange={setAboutWorkType}
        buttonsList={[aboutWorkTypesList1, aboutWorkTypesList2]}
      />
      <FunctionText
        name="aboutSkills"
        paramsName="skills"
        commentList={["Select skills:"]}
        state={aboutSkillsType}
        stateChange={setAboutSkillsType}
        buttonsList={[aboutSkillsList]}
      />
    </div>
  )
};

export default About;