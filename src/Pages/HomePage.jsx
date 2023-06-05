import { Box } from '@mui/system';
import Card from "../component/Card";
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [newsData, setNewsData] = useState([])
  const fetchNewsDetail = async () => {
    try {
      const responObj = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=64b731bb9ef245ed99ca3e1628d206fd");
      const data = await responObj.json();
      console.log(data.articles)
      setNewsData(data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNewsDetail();
  }, [])

  return (
    <>
      <Box marginY={3}>
        <Card newsData={newsData} />
      </Box>
    </>
  )
}

export default HomePage;