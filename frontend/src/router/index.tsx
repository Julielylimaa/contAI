import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { AccountingRecords } from "../pages/AccountingRecords/AccountingRecords";
import { ProtectRoute } from "./ProtectRoute";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectRoute />}>
          <Route path="/accountingRecords" element={<AccountingRecords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
