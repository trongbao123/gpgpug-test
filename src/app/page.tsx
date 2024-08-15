"use client";
import "../../styles/index.scss";
import DeviceResponsive from "./home/_components/deviceResponsive";
import HeaderMain from "./home/_components/header-main/page";
import Rate from "./home/_components/rate/page";
import { DeviceTable } from "./home/_components/table";

const Home = () => {
    return (
        <main className="main">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <Rate />
                <div className="res">
                    <DeviceTable />
                </div>
                <DeviceResponsive />
            </div>
        </main>
    );
};

export default Home;
