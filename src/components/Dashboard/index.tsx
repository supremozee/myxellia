import React from "react";
import Container from "../Container";
import Overview from "../Overview";
import ChartOverview from "../ChartOverview";
import Metric from "../Metric";

const Dashboard = () => {
  return (
    <main>
      <Container className="custom-grid mt-4">
        <section className="charts border border-[#E4E4E4] rounded-[16px]">
           <ChartOverview/>
        </section>
        <section className="overview">
          <Overview />
        </section>
        <section className="image">
           <Metric/>
        </section>
      </Container>
    </main>
  );
};

export default Dashboard;
