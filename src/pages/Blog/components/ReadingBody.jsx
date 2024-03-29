import { Flex, Hide } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

import Footer from "../../../components/Footer/Footer";

const ReadingBody = (props) => {
    return (
        <Flex
            as="main"
            zIndex={1}
            top="8rem"
            position="absolute"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
            fontFamily="Arial, Helvetica, sans-serif"
        >
            <ChakraLink
                to="/blog"
                fontSize="1rem"
                color="blue.500"
                textAlign="center"
                as={ReactRouterLink}
                marginBottom="1rem"
                fontWeight="semibold"
            >
                Voltar para a página Inicíal
            </ChakraLink>

            <Flex as="section" justifyContent="space-around" width="100%">

                <Hide breakpoint="(max-width: 768px)">
                    <Flex 
                        as="aside"
                        width="20%" 
                        padding="1rem" 
                        justifyContent="center" 
                    >
                    </Flex>
                </Hide>

                <Flex
                    as="article"
                    padding="2rem"
                    flexDirection="column"
                    width={["100%", "100%", "100%", "60%"]}
                >
                    {props.children}
                </Flex>

                <Hide breakpoint="(max-width: 768px)">
                    <Flex 
                        as="aside"
                        width="20%" 
                        padding="1rem" 
                        justifyContent="center" 
                    >
                    </Flex>
                </Hide>

            </Flex>

            <Footer />
        </Flex>
    );
};

export default ReadingBody;