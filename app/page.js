"use client"
import Header from "@/Components/Header";
import React, { useState } from "react";

const page = () => {

  const [logoName, setlogoName] = useState(null)
const dataFlow =(childdata)=>{

  console.log("parent")
  console.log(childdata)
  setlogoName(childdata)
}

  return (
    <>
    <Header data={dataFlow} />
      <div className="main">
        <div className="nav">
          <h2 >{logoName}</h2>

          <div className="nav-part2">
            <h4>Store</h4>
            <h4>Courses</h4>
            <h4>Career</h4>
            <h4>Blog</h4>
            <h4>Account</h4>
            <i class="ri-menu-3-line"></i>
            <button>Sign In</button>
          </div>
        </div>

        <div className="content">
          <div className="left">
            <h1>
              Learn From the <span>coolest</span> website of India.
            </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amett dolorsepidatat non proident, sunt in
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.{" "}
            </p>
            <button>Explore Now !</button>
          </div>
          <div className="right">
            <img src="/coding.avif" alt="myimage"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
