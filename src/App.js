import Container from "@mui/material/Container";
import { Header } from "./components/header";
import "./App.css";
import "./assets/fonts/index.css";
import { Footer } from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import { Body } from "./components/Body";
// import bg from "./assets/images/bg2.jpg";

function App() {
  document.title = "Based Tax Pad - Welcome";
  return (
    <div
      style={{
        maxWidth: "1524px",
        margin: "0 auto",
      }}
    >
      <Container sx={{
          position: "relative",
        }}>
        <main>
          <Header />
          <Body />
          <Footer />
        </main>
        <ScrollToTop />
      </Container>
    </div>
  );
}

export default App;
