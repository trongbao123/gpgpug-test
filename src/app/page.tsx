"use client";
import { useEffect, useState } from "react";
import "../../styles/index.scss";
import HomePage from "./home/page";
import Project from "./project/page";

const Home = () => {
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        const storedProvider = localStorage.getItem("selectedProvider");
        setSelected(storedProvider);
    }, []);

    if (selected === "cloud") {
        return <Project />;
    } else {
        return <HomePage />;
    }
};

export default Home;
