import { Flex, Text, Heading, Show } from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import ScrollUp from "../IndicatorScroll/ScrollUp";

import PresentationLinks from "./PresentationLinks";

const myPresentationLinks = [
    {
        icon: <FaLinkedin />,
        tooltip: "LinkedIn",
        link: "https://www.linkedin.com/in/daviteixeira-me/"
    },
    {
        icon: <FaGithub />,
        tooltip: "GitHub",
        link: "https://github.com/daviteixeira-btm"
    }
]

const Apresentation = () => {
    return (
        <Flex
            as="section" 
            alignItems="center" 
            backgroundColor="black"
            height={["100%", "100%", "100%", "100vh"]} 
            paddingTop={["5rem", "5rem", "1rem", "0rem"]}
        >
            <Flex
                width="100%"
                textAlign="justify"
                borderRadius=".5rem"
                flexDirection="column"
                justifyContent="center"
                height={["70%", "auto", "80%", "80%"]}
                padding={["1rem", "1rem", "2rem", "2rem"]}
                marginTop={["0rem", "0rem", "4rem", "4rem"]}
                marginLeft={["0rem", "0rem", "0rem", "2rem"]}
                marginRight={["0rem", "0rem", "0rem", "2rem"]}
                marginBottom={["0rem", "0rem", "0rem", "2rem"]}
            >
                <Heading
                    as="h1"
                    bgClip="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign={["center", "start"]}
                    fontSize={["1.3rem", "3rem", "2rem", "2rem"]}
                    bgGradient="linear(to-l, gray.300, gray.500)"
                >
                    Olá, meu nome é Davi, sou
                </Heading>

                <Flex
                    flexDirection="column"
                >
                    <Text
                        bgClip="text"
                        fontWeight="bold"
                        textTransform="uppercase"
                        textAlign={["center", "start"]}
                        fontSize={["2rem", "3rem", "4.5rem", "5rem"]}
                        bgGradient="linear(to-l, gray.300, gray.500)"
                    >
                        Desenvolvedor
                    </Text>

                    <Flex 
                        marginTop={[".5rem", "0rem"]}
                        justifyContent={["center", "flex-start"]} 
                    >
                        <Text
                            bgClip="text"
                            display="flex"
                            fontWeight="bold"
                            textTransform="uppercase"
                            justifyContent={["space-evenly", "start"]}
                            bgGradient="linear(to-l, gray.300, gray.500)"
                            fontSize={["2rem", "3rem", "4.5rem", "5rem"]}
                        >
                            Web
                        </Text>

                        <Flex
                            alignItems="center"
                            borderRadius=".5rem"
                            border="2px solid gray"
                            justifyContent="space-evenly"
                            marginLeft={["1rem", "2rem"]}
                            width={["50%", "50%", "30%", "20%"]}
                        >
                            {
                                myPresentationLinks.map((item, index) => (
                                    <PresentationLinks 
                                        key={index} 
                                        link={item.link} 
                                        icon={item.icon}
                                        tooltip={item.tooltip} 
                                    />
                                ))
                            }
                        </Flex>
                    </Flex>

                    <Text 
                        bgClip="text"
                        marginTop="1rem" 
                        fontWeight="bold"
                        textAlign={["center", "start"]}
                        fontSize={["1.3rem", "1.2rem"]} 
                        width={["100%", "100%", "100%", "70%"]}
                        bgGradient="linear(to-l, gray.300, gray.500)"
                    >
                        Colaborando na criação de presença digital impactante e inovadora 
                        para empresas, por meio do <Text as="span" color="blue.500">desenvolvimento de websites</Text> de alta 
                        qualidade e criatividade.
                    </Text>

                    <Show below='md'>
                        <Flex justifyContent="center" pt="3rem">
                            <ScrollUp />
                        </Flex>
                    </Show>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Apresentation;