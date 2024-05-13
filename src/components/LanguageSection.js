import FullScreenSection from "./layout/FullScreenSection";
import { Heading, Box } from "@chakra-ui/react";
import { faArrowRight, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookOpen, faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farStarRegular } from "@fortawesome/free-regular-svg-icons";
import bgImg from "../assets/img/layered-peaks-haikei.svg"
const heading = ["intérêts", "linguistiques"]
const intro = "Ma maîtrise s'étend des langues de programmation, telles que Python et JavaScript, aux langues naturelles, avec une compétence avancée en français et en anglais."

const languages = [
  {
    language: "chinois",
    level: "langue maternelle",
  },
  {
    language: "français",
    level: "courant, C2",
  },
  {
    language: "anglais",
    level: "courant, C1",
  },
  {
    language: "allemand",
    level: "correcte, B2",
  },
  {
    language: "langues anciennes",
    level: "grec ancien, latin classique",
  },
]

const projects = [
  {
    title: "Periegesis",
    author: "Pausanias",
    date: "IIe moitié du IIe sièle",
    translatedTitle: "希腊游记",
    url: "https://github.com/Xinhe-Yu/periegesis/tree/main",
  },
  {
    title: "Mornings in Florence",
    author: "John Ruskin",
    date: "1875-1877",
    translatedTitle: "佛罗伦萨的清晨",
    url: "https://github.com/Xinhe-Yu/translate_project/blob/main/Mornings%20in%20Florence.md",
  },
]

const LanguageSection = () => {
  const LanguageItems = languages.map(item => {
    return (
      <tr key={item.language}>
        <td style={{ fontWeight: 800 }}>{item.language}</td><td>{item.level}</td>
      </tr>
    )
  })
  const TranslateItems = projects.map((item => {
    return (
      <li key={item.title}>
        <i>{item.title} </i> <FontAwesomeIcon icon={faArrowRight} />{" "}<a href={item.url}>{item.translatedTitle}</a>
        <p>Auteur : {item.author} ({item.date})</p>
      </li>
    )
  }))
  return (
    <FullScreenSection
      adddashedborder={{ bottom: "true", top: "true" }}
      backgroundImage={bgImg}
      justifyContent="center"
      alignItems="center"
      id="language-section">
      <Box
        alignItems="center"
        fontSize="md"
        className="universalGrid greenGrid"
      >
        <div>
          <Heading as="h1" size="2xl">{heading[0]}</Heading>
          <Heading as="h1" size="2xl">{heading[1]}</Heading>
        </div>
        <div>

          <FontAwesomeIcon icon={faLanguage} size="xl" />{" "}{intro}

        </div>
        <div>
          <Heading as="h2" size="md">compétences linguistiques</Heading>
          <tbody>{LanguageItems}</tbody>
          <Heading as="h2" size="md">projets de traduction en cours</Heading>
          <p>Je travaille actuellement sur plusieurs projets de traduction dans le domaine culturel.</p>
          <ul>{TranslateItems}</ul>
        </div>
      </Box>
    </FullScreenSection>
  )
}

export default LanguageSection