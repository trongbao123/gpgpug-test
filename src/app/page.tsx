"use client";
import "../../styles/index.scss";
import HomePage from "./home/page";
import Project from "./project/page";

const Home = () => {
    const selected = localStorage.getItem("selectedProvider");
    if (selected === "provider") {
        return <HomePage />;
    } else {
        return <Project />;
    }
};

export default Home;
