import FullScreenSection from "./layout/FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faReact, faBootstrap, faJs, faPython, faCss3, faHtml5, faSass } from "@fortawesome/free-brands-svg-icons";
import bgImg from "../assets/img/stacked-steps-haikei.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const heading = ["compétence", "informatique"]
const projects = [
  {
    name: "Xinhe's Personal Site",
    tech: [faReact, faSass],
    url: "https://xinhe.de/",
    describe: "C'est le site que vous explorez actuellement !",
  },
  {
    name: "Rui's Personal Site",
    url: "https://rui-yuan91.github.io/",
    tech: [faHtml5, faCss3, faJs, faBootstrap],
    describe: "Un site personnel au style académique, doté d'un design responsive et de fonctionnalités JavaScript conçues pour faciliter la consultation et la citation des travaux scientifiques de son propriétaire.",
  },
  {
    name: "ALCN Databse",
    url: "https://xinhe-yu.github.io/ALCN/",
    tech: [faHtml5, faCss3, faJs, faBootstrap, faPython],
    describe: "Le site est une base de données dédiée à la traduction des noms antiques. Construit principalement avec Bootstrap et JavaScript, la gestion des données est assurée par JSON, avec des scripts Python utilisés pour le traitement et la maintenance des données.",
  },
]

const skills = [
  {
    type: "Langages de programmation",
    content: "JavaScript\u00A0ES6/HTML5/CSS3, python",
  },
  {
    type: "Frameworks et bibliothèques",
    content: "React, Bootstrap",
  },
  {
    type: "Outils de développement",
    content: "Git, npm",
  },
  {
    type: "Base de données",
    content: "SQLite",
  },
  {
    type: "Systèmes d'exploitation",
    content: "Linux",
  },

]
const courses = [
  {
    year: "2020",
    org: "Université de Michigan",
    name: "Python for Everybody",
    url: "https://coursera.org/verify/specialization/AWJK4MY6L8EW",
  },
  {
    year: "2021",
    org: "Google",
    name: "Google IT Automation with Python",
    url: "https://coursera.org/verify/professional-cert/CX9RKB3MKAKS",
  },
  {
    year: "2023",
    org: "Meta",
    name: "Meta Front-End Developer",
    url: "https://coursera.org/verify/professional-cert/RM6H7MYPMG82",
  },
]

const CodingSection = () => {
  const IconList = ({ icons }) => {
    return (
      <span>
        {icons.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} style={{ margin: '0 10px' }} />
        ))}
      </span>
    );
  };
  const ProjectsListItems = projects.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.url} className="projectLink">{item.name}</a>
        <IconList icons={item.tech} />
        <div style={{ color: "#E0E0E0" }}>{item.describe}</div>
      </li>
    )
  });
  const SkillListItems = skills.map((item, index) => {
    return (
      <li key={index}>
        <span style={{ color: "#66C0E2" }}>{item.type}</span> {" "}
        <span style={{ fontWeight: "100" }}>{item.content}</span>
      </li>
    )
  })
  const CoursesListItems = courses.map((item, index) => {

    return (
      <li key={index}>
        <p>{item.name} ({item.year})</p>
        <div>
          <p>· {item.org}</p>
          <a href={item.url}>
            <FontAwesomeIcon icon={faCertificate} /> Certificat</a>
        </div>

      </li>
    )
  })
  return (
    <FullScreenSection
      adddashedborder={{ bottom: "true", top: "true" }}
      backgroundImage={bgImg}
      justifyContent="center"
      alignItems="center"
      spacing={8} id="coding-section">
      <Box
        alignItems="center"
        fontSize="md"
        className="universalGrid codingGrid"
      >
        <div>
          <Heading as="h1" size="2xl">{heading[0]}</Heading>
          <Heading as="h1" size="2xl">{heading[1]}</Heading>
        </div>
        <div>
          <Heading as="h2" size="md">Portfolio</Heading>
          <ul>{ProjectsListItems}</ul>
        </div>
        <div>
          <Heading as="h2" size="md">Compétences</Heading>
          <ul>{SkillListItems}</ul>
          <div style={{ marginBottom: "1rem" }}></div>
          <Heading as="h2" size="md">Cours sur Coursera</Heading>
          <ul>{CoursesListItems}</ul>
        </div>
      </Box>
    </FullScreenSection>
  )
}

export default CodingSection