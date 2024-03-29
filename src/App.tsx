import PageContainer from "./global/pageContainer/pageContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import { useState } from "react";
import About from "./routes/about/about";
import Projects from "./routes/projects/projects";
import Contact from "./routes/contact/contact";

function App() {
  const [homeVisited, setHomeVisited] = useState(false);

  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          <Route path="*" element={<p className="">Not found</p>}/>
          <Route path="/" element={<Home homeVisited={homeVisited} setHomeVisited={setHomeVisited}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App;
