import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ForgotPassword from "./components/ForgotPassword";
import Main from "./components/Main";
import DonateForm from "./components/DonateForm";
import { UserContextProvider } from "./UserContext";
import EditProfile from "./components/EditProfile";
import DonorList from "./components/DonorList";
import TermsPage from "./components/TermsPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import Blog from "./components/Blog";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/main" element={<Main />} />
        <Route path="/donate" element={<DonateForm />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path="/donor-results" element={<DonorList />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;


//client id 89986100870-cbrqp4sjh117q4c31rd9kucikdl963ja.apps.googleusercontent.com
//client secrect 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