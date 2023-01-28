import styled from "styled-components";
import tw from "twin.macro";
import Head from "@components/head.js";
import Content from "@components/plan/content.js"
import Footer from "@components/footer.js";

function PlanPage() {
  return <div className="h-screen bg-neutral-50">
    <Head />
	<Content />
	<Footer />
  </div>
}

export default PlanPage;