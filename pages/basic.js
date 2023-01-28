import styled from "styled-components";
import tw from "twin.macro";
import Head from "@components/head.js";
import BasicContent from "@components/basic/content.js"
import Footer from "@components/footer.js";

function BasicPage() {
  return <div className="h-screen bg-neutral-50">
    <Head />
	<BasicContent/>
	<Footer />
  </div>
}

export default BasicPage;