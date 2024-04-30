import FullScreenSection from "./layout/FullScreenSection";
import { Heading, Box } from "@chakra-ui/react";
import bgImg from "../assets/img/low-poly-grid-haikei.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PublicationModal from "./PublicationModal";

const heading = ["parcours", "académique"]
const education = [
  {
    id: "phd",
    time: "2019-2024",
    diploma: "Doctorat en Histoire de l'Art",
    school: "École pratique des hautes études",
    location: "Paris, France",
  },
  {
    id: "german",
    time: "2020",
    diploma: "Stage d'allemand",
    school: "Université de Vienne",
    location: "Vienne, Autriche",
  },
  {
    id: "master",
    time: "2017-2019",
    diploma: "Master en Mondes Anciens",
    school: "École normale supérieure de Paris",
    location: "Paris, France",
  },
  {
    id: "bachelor",
    time: "2013-2017",
    diploma: "Bachelor en Histoire",
    school: "Université Fudan",
    location: "Shanghaï, Chine",
  },
]

const intro = "La culture grecque, qui a animé ma jeunesse, reste un intérêt précieux dans ma vie, même si elle n'occupe plus le centre de mes activités professionnelles. J'ai soutenu ma thèse le 27 avril 2024, qui explorait les vases athéniens des VIe et Ve siècles av. J.-C.";

const ResearchSection = () => {
  const EduListItems = education.map(item => {
    return (
      <li key={item.id}>
        <p><span>{item.time}</span> {item.diploma}</p>
        <p>{item.school}</p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} /> {item.location}
        </p>
      </li>
    )
  })
  return (
    <FullScreenSection
      adddashedborder={{ bottom: "true", top: "true" }}
      backgroundImage={bgImg}
      justifyContent="center"
      alignItems="center"
      id="research-section">
      <Box
        alignItems="center"
        fontSize="md"
        className="universalGrid researchGrid"
      >
        <div>
          <Heading as="h1" size="2xl">{heading[0]}</Heading>
          <Heading as="h1" size="2xl">{heading[1]}</Heading>
        </div>
        <div>
          <p>{intro}</p>
          <div></div>
          <div></div>
        </div>
        <div>
          <ul>
            {EduListItems}
          </ul>
          <div></div>
          <div></div>
        </div>
        <div>
          <PublicationModal />
        </div>
      </Box>
    </FullScreenSection>
  )
}

export default ResearchSection