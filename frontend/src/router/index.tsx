import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { AccountingRecords } from "../pages/AccountingRecords/AccountingRecords";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accountingrecords" element={<AccountingRecords />} />
      </Routes>
    </BrowserRouter>
  );
};
