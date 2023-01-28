import React from "react";
import tw from "twin.macro";


 const Paper = tw.div`bg-neutral-800 w-full text-white`
 const Container = tw.div`flex flex-col 
 max-w-screen-xl h-full bg-cover  h-12 leading-10
 `;


function Footer() {
  return (
  	<Paper>
  		<Container>
  				 Copyright © 2022 Y&L solution
  		</Container>
  	</Paper>)
}


export default Footer