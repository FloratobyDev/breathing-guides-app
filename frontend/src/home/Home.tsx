import React from "react";
import PageLayout from "../components/PageLayout";
import Brand from "../components/Brand";
import Footer from "./Footer";
import Hero from "./Hero";
import Features from "./Features";

function Home() {
  return (
    <div className="bg-gradient-main text-primary min-h-screen flex flex-col justify-between gap-y-24">
      <PageLayout>
        <div>
          <Brand />
          <Hero />
          <Features />
        </div>
      </PageLayout>
      <Footer />
    </div>
  );
}

export default Home;
