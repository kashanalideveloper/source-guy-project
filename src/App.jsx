import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import SourcingChinaPage from "./Components/Services/ServicesLinkPages/SourcingChina";
import PreProductionPage from "./Components/Services/ServicesLinkPages/Pre-Production";
import DuringProductionPage from "./Components/Services/ServicesLinkPages/During-Production";
import PreShipmentPage from "./Components/Services/ServicesLinkPages/Pre-Shipment";
import SampleInspectionServicePage from "./Components/Services/ServicesLinkPages/Sample-Inspection-Service";
import SampleConsolidationServicePage from "./Components/Services/ServicesLinkPages/Sample-Consolidation-Service";
import FreightForwardingPage from "./Components/Services/ServicesLinkPages/Freight-Forwarding";
import Amazon3PLPage from "./Components/Services/ServicesLinkPages/Amazon-3PL";
import ProductPhotographyPage from "./Components/Services/ServicesLinkPages/Product-Photography";
import ProductVideographyPage from "./Components/Services/ServicesLinkPages/Product-Videography";
// Components Import
import LandingS from "./Components/Services/LandingS";
import LandingA from "./Components/About/LandingA";
import LandingDFY from "./Components/Done For You/LandingD.F.Y";
import LandingB from "./Components/Blog/LandingB";

// Yahan humne individual Hero/Section2 ki jagah Combined 'Landing' uthaya hai
import LandingH from "./Components/Home/LandingH";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Jab koi website khole (root path), to Landing page dikhao */}
          <Route index element={<LandingH />} />
          <Route
            path="/services/sourcing-china"
            element={<SourcingChinaPage />}
          />
          <Route
            path="/services/pre-production"
            element={<PreProductionPage />}
          />
          <Route
            path="/services/during-production"
            element={<DuringProductionPage />}
          />
          <Route
            path="/services/sample-inspection-service"
            element={<SampleInspectionServicePage />}
          />
          <Route
            path="/services/sample-consolidation-service"
            element={<SampleConsolidationServicePage />}
          />
          <Route
            path="/services/freight-forwarding"
            element={<FreightForwardingPage />}
          />
          <Route
            path="/services/product-photography"
            element={<ProductPhotographyPage />}
          />
          <Route
            path="/services/product-videography"
            element={<ProductVideographyPage />}
          />
          <Route path="/services/amazon-3pl" element={<Amazon3PLPage />} />
          <Route path="/services/pre-shipment" element={<PreShipmentPage />} />
          <Route path="/services" element={<LandingS />} />
          <Route path="/about" element={<LandingA />} />
          <Route path="/done-for-you" element={<LandingDFY />} />
          <Route path="/blog" element={<LandingB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
