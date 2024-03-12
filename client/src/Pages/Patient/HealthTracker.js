import React, { useState } from "react";
import Layout from "../../components/Layout";
import BloodTest from "../../components/BloodTest";
import BloodPressureChecker from "../../components/Bloodtestcheckuser";

const HealthTracking = () => {
  return (
    <Layout>
      <div>
        {" "}
        <BloodTest />
        <BloodPressureChecker />
      </div>
    </Layout>
  );
};

export default HealthTracking;
