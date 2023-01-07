import styled from "styled-components";
import tw from "twin.macro";
import Filter from "@components/filters";
import Search from "@components/searchbar";
import Scorllingls from "@components/scorllingls";
import GMap from "@components/map";
import Header from "@components/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HiddenMd = tw.div`hidden md:flex`;
const SearchSection = tw.div`absolute top-6 left-72`;

function ListPage() {
  return <div className="h-screen">
	  <Header/>
	  <HiddenMd>
	  	<SearchSection>
		 </SearchSection>
	 </HiddenMd>
	  <div className="flex flex-row">
		  <Filter/>
		  <Scorllingls/>
		  <GMap/>
	  </div>
  </div>
}

export default ListPage;