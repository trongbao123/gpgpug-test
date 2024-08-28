"use client";
import { projectRate, rate } from "@/constants/constant";
import "./index.scss";
import { projectTotal } from "@component/services/project";
import { useEffect, useState } from "react";
import _ from "lodash";

const renderRate = (projectRate: any[]) => {
    return projectRate ? (
        projectRate.map((item) => {
            return (
                <div key={item.id} className="rate-item">
                    <div className="rate-item-top">{item.title === "Totalgpus" ? "Total GPUs" : item.title}</div>
                    <div className="rate-item-bottom">
                        {item.content} {item?.title === "Storage" ? "GB" : ""}
                    </div>
                </div>
            );
        })
    ) : (
        <div className="rate-item">
            <div className="rate-item-top">Title</div>
            <div className="rate-item-bottom">0</div>
        </div>
    );
};
const Rate = () => {
    const [projectRate, setProjectRate] = useState<any[]>([]);

    const fetchTotal = async () => {
        try {
            const res: any = await projectTotal();

            if (res) {
                const resMapping = _.map(res.data, (value: any, key: any) => ({
                    title: _.capitalize(key),
                    content: value,
                }));
                setProjectRate(resMapping);
            }
        } catch (error) {}
    };

    useEffect(() => {
        fetchTotal();
    }, []);

    return (
        <section className="rate-container">
            <div className="grid-rate">{renderRate(projectRate)}</div>
        </section>
    );
};
export default Rate;
