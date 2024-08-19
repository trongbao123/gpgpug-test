"use client";
import { useEffect, useState } from "react";
import "../../styles/index.scss";
import DeviceResponsive from "./home/_components/deviceResponsive";
import HeaderMain from "./home/_components/header-main/page";
import Rate from "./home/_components/rate/page";
import { DeviceTable } from "./home/_components/table";
import { getDeivces } from "@component/services/device";

const Home = () => {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const response = (await getDeivces({ params: { page: 1, lenth: 10 } })) as {
                result?: { data: any; totalCount: number };
            };

            if (response && response?.result) {
                setTableData(response.result.data);
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        setLoading(true);   
        fetchData();
    }, []);
    return (
        <main className="main">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <Rate />
                <div className="res">
                    <DeviceTable tableData={tableData} loading={loading} />
                </div>
                <DeviceResponsive />
            </div>
        </main>
    );
};

export default Home;
