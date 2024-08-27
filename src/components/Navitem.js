import React from "react";
import { Flex,
         Text,
         Icon,
         Link as ChakraLink,
         Menu,
         MenuButton } from "@chakra-ui/react";


         



 export default function Navitem({navSize, title, icon, active}) {
    return(
        <Flex 
            mt={30}
            flexDir="column"
            width="100%"
            alignItems={navSize=== "small" ? "center" : "flex-start"}>

            <Menu placement="right">
                
                <ChakraLink
                backgroundColor={active && "#D862BC"}
                p={3}
                borderRadius={8}
                _hover={{textDecor: "none", backgroundColor: "#fa78c6"}}
                w={navSize === "large" ? "100%" : "80%"}>

                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon}  fontSize="xl" color="white" />
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </ChakraLink>
            </Menu>
        </Flex>
    )
 }