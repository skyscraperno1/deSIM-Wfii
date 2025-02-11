import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { Country } from "../home/Country.jsx";
import { Step } from "../home/Step.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout title='DeSiM Wi-Fi'>
          <Home />
        </Layout>
      }
    />
     <Route
      path={RoutePaths.COUNTRY}
      element={
        <Layout title='DeSiM Wi-Fi　端末接続'>
          <Country />
        </Layout>
      }
    />
     <Route
      path={RoutePaths.INFO}
      element={
        <Layout title='DeSiM Wi-Fi　チャージ内容確認'>
          <Country />
        </Layout>
      }
    />
     <Route
      path={RoutePaths.STEP}
      element={
        <Layout title='DeSiM Wi-Fi'>
          <Step />
        </Layout>
      }
    />
     <Route
      path={RoutePaths.HOME}
      element={
        <Layout title='DeSiM Wi-Fi'>
          <Home />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
