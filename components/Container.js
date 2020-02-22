import React from "react";
import { Flex } from "@chakra-ui/core";

export const Container = props => {
     return (
          <Flex
               direction="column"
               alignItems="center"
               justifyContent="flex-start"
			bg="gray.50"
			// minW="md"
			minH='72vh'
               color="black"
               {...props}
          />
     );
};