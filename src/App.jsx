import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#181818" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App