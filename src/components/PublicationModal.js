import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

const publication = [
  {
    type: "article",
    year: "2019",
    title: "Le bateau de Dionysos,",
    info1: " (狄奥尼索斯之舟 en chinois) dans ",
    info2: "Museum Sinicum",
    info3: "  II, W. Zhang (éd.), Shanghaï : Presses de l’Université Fudan, p. 233-247",
  },
  {
    type: "article",
    year: "2021",
    title: "On ne badine pas avec la politique. Cratère de Syriskos à Boston,",
    info1: " ",
    info2: "Histoire de l’art",
    info3: " 86, p. 43-54",
  },
  {
    type: "article",
    year: "2022",
    title: "Les Tyrannoctones sur les vases à figures noires en Attique,",
    info1: " (雅典陶瓶画与僭主刺杀者 en chinois) dans ",
    info2: "Museum Sinicum",
    info3: " IV, W. Zhang (éd.), Shanghaï : Presses de l’Université Fudan, p. 275-286",
  },
  {
    type: "book",
    year: "2024",
    title: "Les Mort, les Agonisants et les Menacés. Scènes mythologiques et quotidiennes sur les vases à vin attiques jusqu'en 450 av. J.-C.",
    info1: "Thèse de doct. École pratique des hautes études",
  }
]

const translation = [
  {
    type: "article",
    year: "2018",
    title: "« Le pseudo-sacrifice d’Hermès ». Hymne homérique à Hermès I, vers. 112-142. Poésie rituelle, théologie et histoire",
    info1: " de Claudine Leduc, du français en chinois, dans ",
    info2: "Museum Sinicum",
    info3: " I, W. Zhang (éd.), Shanghaï : Presse de l’Université Fudan, p. 136-165",
  },
  {
    type: "article",
    year: "2020",
    title: "Le chant choral des jeunes filles à Sparte",
    info1: " de Claude Calame, du français en chinois, dans ",
    info2: "Museum Sinicum",
    info3: " III, W. Zhang (éd.), Shanghaï : Presse de l’Université Fudan, p. 284-303",
  },
]
const pubNumber = publication.length;
const transNumber = translation.length;
function PublicationModal() {
  const PubListItems = publication.map((item, index) => {
    let punctuation = index + 1 === pubNumber ? "." : ";";
    let formattedPubItem = (
      <span>({item.year}) "{item.title}"{item.info1}<i>{item.info2}</i>{item.info3}{punctuation}</span>
    );
    if (item.type === "book") {
      formattedPubItem = (
        <span>({item.year}) <i>{item.title}</i> {item.info1}{punctuation}</span>
      )
    }
    return (
      <li key={index}>
        {formattedPubItem}
      </li>
    )
  })
  const TranListItems = translation.map((item, index) => {
    let punctuation;
    index + 1 === transNumber ? punctuation = "." : punctuation = ";";
    return (
      <li key={index}>
        ({item.year}) "{item.title}"{item.info1}<i>{item.info2}</i>{item.info3}{punctuation}
      </li>
    )
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        size="lg"
        borderRadius={100}
        onClick={onOpen}

      >Mes Publications</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInBottom'
        size="xl"
      >
        <ModalOverlay
          bg="none"
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
        <ModalContent>
          <ModalHeader>Publication</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            marginRight={8}
            marginLeft={8}
          >
            <ol style={{ fontFamily: "Times New Roman" }}>
              {PubListItems}
              <p><b>Traduction</b></p>
              {TranListItems}
            </ol>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PublicationModal