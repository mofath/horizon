import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ChooseCompanyPage,
  HomePage,
  ForgotPassword,
  ForgotPasswordVerifyPage,
  NotFoundPage,
  SignInPage,
  ChangePasswordPage,
  EmployeeManagementPage,
  CompanyManagementPage,
  RequestTrackingPage,
} from "./pages";
import { ROUTES } from "./constant/routes";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import TempPage from "./pages/Temp/Temp";
import EmployeeLetters from "./pages/EmployeeLetters/EmployeeLetters";
import PurchaseDetails from "./pages/PurchaseDetails/PurchaseDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.CHOOSE_COMPANY} element={<ChooseCompanyPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.OVERVIEW} element={<OverviewPage />} />
        <Route
          path={ROUTES.EMPLOYEE_MANAGEMENT}
          element={<EmployeeManagementPage />}
        />
        <Route
          path={ROUTES.COMPANY_MANAGEMENT}
          element={<CompanyManagementPage />}
        />
        <Route
          path={ROUTES.REQUEST_TRACKING}
          element={<RequestTrackingPage />}
        />
        <Route
          path={ROUTES.REQUEST_TRACKING__EMPLOYEES_LETTERS}
          element={<EmployeeLetters />}
        />
        <Route
          path={ROUTES.REQUEST_TRACKING__PURCHASE_DETAILS}
          element={<PurchaseDetails />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD_VERIFY}
          element={<ForgotPasswordVerifyPage />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD_VERIFY}
          element={<ForgotPasswordVerifyPage />}
        />
        <Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
        <Route path={ROUTES.TEMP} element={<TempPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
