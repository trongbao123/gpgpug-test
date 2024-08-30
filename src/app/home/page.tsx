"use client";
import { useEffect, useState } from "react";
// import "../../styles/index.scss";
import { getDeivces } from "@component/services/device";
import HeaderMain from "./_components/header-main/page";
import Rate from "./_components/rate/page";
import { DeviceTable } from "./_components/table";
import DeviceResponsive from "./_components/deviceResponsive";
import Notification from "@component/components/common/notification";

const HomePage = () => {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const response = (await getDeivces({ params: { page: 1, length: 10 } })) as {
                result?: { data: any; totalCount: number };
            };

            if (response && response?.result) {
                setTableData(response.result.data);
            } else {
                throw response;
            }
        } catch (error: any) {
            Notification({
                type: "error",
                message: error.message || error,
                placement: "top",
            });
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

export default HomePage;
