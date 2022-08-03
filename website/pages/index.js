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
    Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
    anim sunt id elit.
  `,
  introductionParagraph2: `
    Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
    nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
    nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
    Nostrud in ad sunt sunt laborum dolore laboris ex dolor dolor occaecat. Veniam sit consectetur officia
    anim sunt id elit.
  `,

  interest: `
    Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
    Nostrud in ad sunt sunt laborum dolore laboris ex dolor dolor occaecat. Veniam sit consectetur officia
    nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
    anim sunt id elit.
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
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        anim sunt id elit.
      `,
    },
    {
      institutionName: "HKP Solutions",
      jobTitle: "Frontend Developer Intern",
      startDate: new Date("22 Aug 2020"),
      endDate: new Date("22 Aug 2020"),
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        anim sunt id elit.
      `,
    },
    {
      institutionName: "HKP Solutions",
      jobTitle: "Cross Team Manager",
      startDate: new Date("22 Aug 2020"),
      endDate: new Date("22 Aug 2020"),
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        anim sunt id elit.
      `,
    },
    {
      institutionName: "George Mason University, Math Tutoring Center",
      jobTitle: "Math Tutor",
      startDate: new Date("05 May 2022"),
      endDate: new Date("22 Aug 2021"),
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        anim sunt id elit.
      `,
    },
    {
      institutionName: "George Mason University, Electrical and Computer Engineering Department",
      jobTitle: "Undergraduate Student Learning Assistant",
      startDate: new Date("05 May 2022"),
      endDate: new Date("22 Aug 2021"),
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        anim sunt id elit.
      `,
    },
  ],

  projects: [
    {
      title: "Kepler: Discover the universe with NASA data",
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        anim sunt id elit.
      `,
      link: {
        code: "https://github.com/gumbarros/kepler",
        playStore: "https://play.google.com/store/apps/details?id=br.com.barros.kepler",
      },
      tags: ["Dart", "Flutter", "REST"]
    },
    {
      title: "FaceIndex: Public Figure Face Index",
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        anim sunt id elit.
      `,
      link: {
        code: "https://github.com/johnjamespj/vigilant-goggles"
      },
      tags: ["Python", "Tensorflow", "Spark", "EC2"]
    },
    {
      title: "2022 CAHMP Entrepreneurship Challenge",
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        anim sunt id elit.
      `,
      link: {
        website: "https://cahmp.gmu.edu/",
      },
      tags: ["Figma"]
    },
    {
      title: "JSON Parser written in C",
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        anim sunt id elit.
      `,
      link: {
        code: "https://github.com/johnjamespj/json_parser"
      },
      tags: ["C", "CMake"]
    },
    {
      title: "Minesweeper game on React",
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        anim sunt id elit.
      `,
      link: {
        code: "https://github.com/johnjamespj/minesweeper"
      },
      tags: ["js", "HTML", "CSS", "React"]
    },
    {
      title: "Secrets: Encrypted Anonymous Text Data Repository",
      description: `
        Incididunt dolor mollit consequat cillum dolor ex adipisicing excepteur est culpa consectetur sunt.
        nostrud occaecat tempor aliqua pariatur eiusmod elit fugiat anim proident. Do aute in laboris pariatur
        anim sunt id elit.
      `,
      link: {
        code: "https://github.com/johnjamespj/secrets",
      },
      tags: ["js", "HTML", "CSS", "React", "AWS", "AWS DynamoDB", "AWS Amplify"]
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
      <p>{workExperiance.description}</p>
    </li>
  );
}

function ProjectRow({ project }) {
  return (
    <li>
      <h2>{project.title}</h2>
      <i>{Object.keys(project.link).map((v, i) => (
        <a key={i} href={project.link[v]} target="_blank">
          <span>[{capitalizeFirstLetter(v)}]&nbsp;</span>
        </a>
      ))}</i>
      <p>{project.description}</p>
      <i>
        {project.tags.map((v, i) => <span key={i}>{v}{i != project.tags.length - 1 ? <>,&nbsp;&nbsp;</> : ""}</span>)}
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
            <p>{information.introductionParagraph1}</p>
            <p>{information.introductionParagraph2}</p>
            <p>Feel free to contact me at <a href="#">jjames23@gmu.edu</a>.</p>
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
    </div>
  )
}
