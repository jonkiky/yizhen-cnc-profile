import styled from "styled-components";
import tw from "twin.macro";
import Head from "@components/head.js";
import Banner from "@components/banner.js";
import WeightLossBasic from "@components/weight_loss_basic.js";
import Plan from "@components/plan.js";
import Motivation from "@components/motivation.js";
import Footer from "@components/footer.js";

function HomePage() {
  return <div className="h-screen bg-neutral-50">
    <Head />
    <Banner />
    <WeightLossBasic />
     <Plan />
     <Motivation />
     <Footer />
  </div>
}

export default HomePage;