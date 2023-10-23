"use client";

import { ListOfFormations } from "@/components/home/ListOfFormations";
import { Layout } from "@/components/Layout";
import { FiltersProvider } from "@/context/FiltersProvider";

const Home = () => {
  return (
    <FiltersProvider>
      <Layout>
        <ListOfFormations />
      </Layout>
    </FiltersProvider>
  );
};

export default Home;
