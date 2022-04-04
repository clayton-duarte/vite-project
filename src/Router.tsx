import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages";
import NotFoundPage from "./pages/404";

export default function Router() {
  // return <p>hey</p>;
  return (
    <Routes>
      <Route path="/" element={IndexPage} />
      <Route path="*" element={NotFoundPage} />
    </Routes>
  );
}
