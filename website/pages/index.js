import Head from 'next/head'
import style from "../styles/Home.module.css"

const information = {
  name: `John James`,
  profileImage: `/profile.jpg`,

  email: `jjames23@gmu.edu`,
  phone: "+1 (703) 705-1875",
  address: "1493 Powells Tavern Pl, Herndon, VA 20170",

  title: `John James`,
  metadata: {
    icon: `/favicon.ico`,
    description: `Website description`,
  },

  introductionParagraph1: `
    Welcome to my professional blog and projects showcase website.
  `,
  introductionParagraph2: `
    I am a junior year undergraduate student pursuing a computer engineering major at 
    George Mason University, Fairfax, Virginina. I am a Math tutor at GMU Math Tutoring
    Center and Learning Assistant at GMU Electrical and Computer Engineering department.
    I previously worked as the web development team lead at HKP Solution.
  `,

  interest: `
    My interests are in frontend engineering, distributed computing and AI/ML. I have 
    professional experiance working as a frontend web developer and have worked with React
    to implement a responsive website from FIGMA designs. I also like learning about distributed 
    systems and technologies used to solve common problems in design and implementation of 
    distributed systems. I am currently working on a project to implement a dart client for
    Kafka event streaming system. I also have interests in AI/ML to solve problems such as 
    face recognition large scale data mining.
  `,

  education: [
    {
      img: "/gmu.svg",
      institutionName: "George Mason University",
      educationClass: {
        type: "undergrad",
        degreeType: "Bachelors of Science",
        major: "Computer Engineering",
      },
      address: "4400 University Dr, Fairfax, VA 22030",
      startDate: new Date("22 Aug 2020"),
      endDate: new Date("21 May 2024"),
      gpa: 3.85,
    },
    {
      img: "/hhs.jpg",
      institutionName: "Herndon High School",
      educationClass: {
        type: "highschool",
      },
      address: "700 Bennett Street, Herndon, VA 20170",
      startDate: new Date("22 Aug 2018"),
      endDate: new Date("21 May 2020"),
      gpa: 3.9,
    },
    {
      img: "/jnv.png",
      institutionName: "Jawahar Navodaya Vidyala, Nerimangalam",
      educationClass: {
        type: "highschool",
      },
      address: "NH 49, Neriamangalam, Kerala 686693, India",
      startDate: new Date("05 Jun 2013"),
      endDate: new Date("21 Mar 2018"),
      gpa: 3.8,
    },
  ],

  workExperiance: [
    {
      institutionName: "HKP Solutions",
      jobTitle: "WebDev Team Lead and SCRUM Master",
      startDate: new Date("22 Aug 2020"),
      endDate: new Date("22 Aug 2020"),
      description: `
        
      `,
    },
    {
      institutionName: "HKP Solutions",
      jobTitle: "Frontend Developer Intern",
      startDate: new Date("22 Aug 2020"),
      endDate: new Date("22 Aug 2020"),
      description: `
        
      `,
    },
    {
      institutionName: "HKP Solutions",
      jobTitle: "Cross Team Manager",
      startDate: new Date("22 Aug 2020"),
      endDate: new Date("22 Aug 2020"),
      description: `
        
      `,
    },
    {
      institutionName: "George Mason University, Math Tutoring Center",
      jobTitle: "Math Tutor",
      startDate: new Date("22 Aug 2021"),
      endDate: new Date("05 May 2022"),
      description: `
        My main responsibilities included staffing George Mason University's Math tutoring center as a math 
        tutor. Student who are taking any math course can came in ask us for help. I had to help them with
        math classes including but not limited to Calculus I, Calculus II and Calculus III. I helped students
        who are struggling in math with their homeworks and exams. 
      `,
    },
    {
      institutionName: "George Mason University, Electrical and Computer Engineering Department",
      jobTitle: "Undergraduate Student Learning Assistant",
      startDate: new Date("22 Aug 2021"),
      endDate: new Date("05 May 2022"),
      description: `
        My main responsibilities includes assisting Dr. Lorie when implementing flipped classroom model in 
        Introduction to Electrical and Computer engineering (ECE 101), helping students work with daily
        assigned class works, helping with weekly lab assignment and helping students work on concepts they
        find difficult to understand. 
      `,
    },
  ],

  projects: [
    {
      title: "Kepler: Discover the universe with NASA data",
      description: `
        Kepler is an open source app that showcase latest NASA discoveries about exoplanets and catalog most of 
        the known exoplanets. We used NASA API to access public data to make information about exoplanets more 
        accessible. We used flutter to implement the UI.
      `,
      link: {
        code: "https://github.com/gumbarros/kepler",
        playStore: "https://play.google.com/store/apps/details?id=br.com.barros.kepler",
      },
      tags: ["Dart", "Flutter", "REST"],
      preview: "/kepler.jpg"
    },
    {
      title: "FaceIndex: Public Figure Face Index",
      description: `
        Face Index is a public database of face indices of public figures that can be used to identify the 
        database to identify public figures in a novel image. I used publicaly available wikipedia data to
        mine information about public figures and extract embedding using FaceNet model.
      `,
      link: {
        code: "https://github.com/johnjamespj/vigilant-goggles"
      },
      tags: ["Python", "Tensorflow", "Spark", "EC2"],
      preview: "/face-index.jpg"
    },
    {
      title: "2022 CAHMP Entrepreneurship Challenge",
      description: `
        CAHMP Entrepreneurship Challenge is a Shark Tank style business idea pitching competition, where
        you pitch a business idea that creates a product related to human machine interaction. I used my
        skills in UI designs and the semester long business development training to present our idea.
      `,
      link: {
        website: "https://cahmp.gmu.edu/",
      },
      tags: ["Figma"],
      preview: "/cahmp.png"
    },
    {
      title: "JSON Parser written in C",
      description: `
        JSON is a lightweight, language agnostic data interchange format. It is easy for humans to read and write and 
        easy for machines to parse and read. I wrote a simple library in C to parse JSON data to learn to structure 
        and manage a large project in C.
      `,
      link: {
        code: "https://github.com/johnjamespj/json_parser"
      },
      tags: ["C", "JSON"],
      preview: "/json.png"
    },
    {
      title: "Minesweeper game on React",
      description: `
        This is a basic reimplementation of minesweeper using HTML/JS using React. Minesweeper is a classic mini 
        game in windows. The rules are simple, flag down all the mines in the minefield. Mines can be identified
        with the numbers in non-mined tiles. A tile has the number of mines in its neighborhood.
      `,
      link: {
        code: "https://github.com/johnjamespj/minesweeper",
        game: "https://johnjamespj.github.io/minesweeper/",
      },
      tags: ["js", "HTML", "CSS", "React"],
      preview: "/minesweeper.png"
    },
    {
      title: "Secrets: Encrypted Anonymous Text Message Repository",
      description: `
        Secrets is an open source encrypted message repository. A user can store a message and will get an id and key. The
        message be encrypted with the key and stored in dynamoDB. Another user with the id and key can retrive the message
        later on when needed. The app can be deployed with Amplify to AWS.
      `,
      link: {
        code: "https://github.com/johnjamespj/secrets",
      },
      tags: ["js", "HTML", "CSS", "React", "AWS", "AWS DynamoDB", "AWS Amplify"],
      preview: "/secrets.jpg"
    },
  ]
}

function formatDateToMonthYYYY(date) {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${month[date.getMonth()]} ${date.getYear() + 1900}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function EducationRow({ educationInfo }) {
  return <li className={style.education}>
    <img src={educationInfo.img} />
    <h2>{educationInfo.institutionName}</h2>
    {educationInfo.educationClass.degreeType && (<h3>{educationInfo.educationClass.degreeType} in {educationInfo.educationClass.major}</h3>)}
    <i> {formatDateToMonthYYYY(educationInfo.startDate)} &nbsp;-&nbsp;
      {formatDateToMonthYYYY(educationInfo.endDate)}</i>
    {educationInfo.gpa && (<><i>GPA {educationInfo.gpa}</i></>)}
  </li>;
}

function WorkExperianceRow({ workExperiance }) {
  return (
    <li className={style.work}>
      <h2>{workExperiance.jobTitle}</h2>
      <h3>at {workExperiance.institutionName}</h3>
      <i> {formatDateToMonthYYYY(workExperiance.startDate)} &nbsp;-&nbsp;
        {formatDateToMonthYYYY(workExperiance.endDate)}</i>
      {/* <p>{workExperiance.description}</p> */}
    </li>
  );
}

function ProjectRow({ project }) {
  return (
    <li className={style.project}>
      <img src={project.preview} />
      <h2>{project.title}</h2>
      <i>{Object.keys(project.link).map((v, i) => (
        <a key={i} href={project.link[v]} target="_blank">
          <span>[{capitalizeFirstLetter(v)}]&nbsp;</span>
        </a>
      ))}</i>
      <p>{project.description}</p>
      <i>
        {project.tags.map((v, i) => <span key={i}><span className={style.tag}>{v}</span>{i != project.tags.length - 1 ? <>,&nbsp;&nbsp;</> : ""}</span>)}
      </i>
    </li>
  );
}

export default function Home() {
  return (
    <div className={style.rootContainer}>
      <Head>
        <title>{information.title}</title>
        <meta name="description" content={information.metadata.description} />
        <link rel="icon" href={information.metadata.icon} />
      </Head>

      <main>
        <h1>{information.name}</h1>
        <div className={style.main}>
          <div className={style.intro}>
            <p>{information.introductionParagraph1} If you are here for <a href='https://cataas.com/cat/says/John%20send%20you%20here%3F' target="_blank">random cat pics click here</a>. Otherwise carry on..</p>
            <p>{information.introductionParagraph2}</p>
            <p>Feel free to contact me at <a href={`mailto:${information.email}`}>{information.email}</a>.</p>
          </div>
          <div className={style.profilePic}>
            <img src={information.profileImage} />
          </div>
        </div>
      </main>

      <section>
        <h1>Interests</h1>
        <p>{information.interest}</p>
      </section>

      <section>
        <h1>Education</h1>

        <ul className={style.list}>
          {information.education.map((v, i) => <EducationRow key={i} educationInfo={v} />)}
        </ul>
      </section>

      <section>
        <h1>Work Experiance</h1>

        <ul className={style.list}>
          {information.workExperiance.map((v, i) => <WorkExperianceRow key={i} workExperiance={v} />)}
        </ul>
      </section>

      <section>
        <h1>Projects</h1>

        <ul className={style.list}>
          {information.projects.map((v, i) => <ProjectRow key={i} project={v} />)}
        </ul>
      </section>

      <section className={style.copyright}>
        <small>You can use my design without my permission. Here is the <a href='https://github.com/johnjamespj/me' target="_blank">source</a></small>
      </section>
    </div>
  )
}
