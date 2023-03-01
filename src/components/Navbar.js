/* import { useState, useEffect, useRef } from 'react'; */
import { Box, HStack, Heading } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const contacts = [
	{
		icon: faEnvelope,
		linkTo: "email",
		url: "mailto: xinhe.yu.dsa@gmail.com",
	},
	{
		icon: faGithub,
		linkTo: "Github",
		url: "https://github.com/Xinhe-Yu",
	},
	{
		icon: faLinkedin,
		linkTo: "Linkedin",
		url: "https://www.linkedin.com/in/xinhe-yu-21750418a",
	},
	{
		icon: faInstagram,
		linkTo: "Instagram",
		url: "https://www.instagram.com/xiiiiiinhe",
	}
]

const Navbar = () => {
	const contactListItems = contacts.map(item => {
		return <a href={item.url} key={item.linkTo} style={{ padding: 8 }}>
			<FontAwesomeIcon icon={item.icon} size="lg" />
		</a>
	})
	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			right={0}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#18181b"
			zIndex={1}
			width="100vw"
		>
			<Box color="#FAFAFA" maxWidth="1280px" margin="0 auto" fontSize='xl'>
				<HStack
					px={12}
					py={4}
					justifyContent="space-between"
					alignItems="center"
					id="navbar"
				>
					<Heading as="h3" size='lg'>Xinhe YU</Heading>
					<nav>
						{contactListItems}
					</nav>
				</HStack>
			</Box>
		</Box >
	)
}



export default Navbar