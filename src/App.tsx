import PageContainer from "./global/pageContainer/pageContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import { useState } from "react";

function App() {
  const [homeVisited, setHomeVisited] = useState(false);

  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          <Route path="*" element={<p className="">Not found</p>}/>
          <Route path="/" element={<Home homeVisited={homeVisited} setHomeVisited={setHomeVisited}/>}/>
        </Routes>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App;
