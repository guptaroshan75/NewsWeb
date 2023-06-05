import React from "react";
import Navbar from "./component/Navbar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Footer from "./component/Footer";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";

const App = () => {
  // const [newsData, setNewsData] = useState([])
  // const fetchNewsDetail = async () => {
  //   try {
  //     const responObj = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=64b731bb9ef245ed99ca3e1628d206fd");
  //     const data = await responObj.json();
  //     console.log(data.articles)
  //     setNewsData(data.articles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchNewsDetail();
  // }, [])

  return (
    <>
      <Navbar />
      <Container maxWidth='lg' >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      {/* <Card newsData={newsData} /> */}
      <Footer />
    </>
  );
}

export default App;
