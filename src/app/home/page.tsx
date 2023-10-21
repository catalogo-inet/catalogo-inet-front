"use client";

import { useState } from "react";
import { Map } from "@/components/Map";
import { ListOfFormations } from "@/components/home/ListOfFormations";
import { Layout } from "@/components/Layout";

const Home = () => {
  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <Layout>
        <ListOfFormations />
      </Layout>
    </main>
  );
};

export default Home;
