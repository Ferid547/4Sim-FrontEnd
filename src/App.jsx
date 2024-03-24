import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper";
import { Footer } from "./components/HomePage/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
