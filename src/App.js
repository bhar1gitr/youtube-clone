import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Box } from '@mui/material'
import {Navbar,VideoDetail,SearchFeed,Feed,ChannelDetail} from './components'

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Feed></Feed>}></Route>
        <Route path="/video/:id" element={<VideoDetail></VideoDetail>}></Route>
        <Route path="/channel/:id" element={<ChannelDetail></ChannelDetail>}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed></SearchFeed>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
