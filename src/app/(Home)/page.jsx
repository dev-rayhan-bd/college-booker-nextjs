"use client"
import { useEffect, useState } from "react";
import About from "./About";
import CollegeCard from "./CollegeCard";
import Contact from "./Contact";
import DisplayReviews from "./DisplayReviews";
import Gallary from "./Gallary";
import Graduates from "./Graduates";
import Header from "./Header";
import ResearchLinks from "./ResearchLinks";
import SearchBar from "./SearchBar";


const HomePage = () => {
  const [collegeData,setCollegeData] = useState([])
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
      fetch('https://college-booker-server.vercel.app/allColleges')
      .then(res=>res.json())
      .then(data=>setCollegeData(data))
  },[])
  const handleSearch = () => {
      fetch(`https://college-booker-server.vercel.app/colleges/searchbyName/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
        
          setCollegeData(data);
        });
    };
    return (
        <div>
        <SearchBar handleSearch={handleSearch} setSearchText={setSearchText}/>
          <Header/>
          <CollegeCard collegeData={collegeData}/>
          <Gallary/>
          <Graduates/>
          <ResearchLinks/>
          <DisplayReviews/>
        <About/>
        <Contact/>
       </div>
    );
};

export default HomePage;