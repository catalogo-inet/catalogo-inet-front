"use client";

import { useState } from "react";
import { Map } from "@/components/Map";
import { ListOfFormations } from "@/components/home/ListOfFormations";
import { Layout } from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <ListOfFormations />
    </Layout>
  );
};

export default Home;
