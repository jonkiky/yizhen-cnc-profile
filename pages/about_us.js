import styled from "styled-components";
import tw from "twin.macro";
import Head from "@components/head.js";
import AboutUsContent from "@components/about_us.js";
import Footer from "@components/footer.js";

function AboutUsPage() {
  return <div className="h-screen bg-neutral-50">
    <Head />
	<AboutUsContent/>
  </div>
}

export default AboutUsPage;