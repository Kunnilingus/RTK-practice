import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoodsPage from "./components/GoodsPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="goods" element={<GoodsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
