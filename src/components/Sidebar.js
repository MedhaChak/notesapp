import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import React,{ useState } from "react";
import Navitem from "./Navitem";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoLogInSharp } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { TiInfoLargeOutline } from "react-icons/ti";


import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";







export default function Sidebar(){
    const [navSize, changeNavSize] = useState("large")  
      return(
        <Flex 
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={navSize === "small" ? "75px" : "250px"}
            flexDir="column"
            justifyContent="space-between"
            backgroundColor= " #40daf5"
            borderRadius="7px">

            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav">

                <IconButton
                    background="none"
                    mt={5}
                    _hover={{background: 'none'}}
                    icon={<FiMenu/>}
                    size="lg"
                    onClick={() =>{
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")

                    }}/>
                    <Navitem navSize={navSize} icon={RiHomeHeartFill} title="Home" active/>
                        <ChakraLink as={Link} to="/log-in"
                                    w={navSize === "large" ? "100%" : "80%"}>
                            <Navitem navSize={navSize} icon={IoLogInSharp} title="Log-In" />
                        </ChakraLink>
                    
                    <Navitem navSize={navSize} icon={IoPersonAdd} title="Sign-up"/>
                    <Navitem navSize={navSize} icon={TiInfoLargeOutline} title="About"/>

            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}>
                    <Divider display={navSize === "small" ? "none" : "flex"}/>
                    <Flex mt={4} align="center">
                        <Avatar size="sm"/>
                        <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm"> Medha Chak</Heading>
                        </Flex>
                     

                    </Flex>


            </Flex>

             
        </Flex>
       
    )
}