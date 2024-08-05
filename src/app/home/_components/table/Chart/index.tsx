import React, { useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend, ChartOptions } from "chart.js";
import { Chart } from "react-chartjs-2";
import "./styles.scss";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

const MixedChart: React.FC = () => {
    const chartRef = useRef<ChartJS<"bar">>(null);

    const labels = [
        "Jul 12",
        "Jul 13",
        "Jul 14",
        "Jul 15",
        "Jul 16",
        "Jul 17",
        "Jul 18",
        "Jul 19",
        "Jul 20",
        "Jul 21",
        "Jul 22",
        "Jul 23",
        "Jul 24",
        "Jul 25",
        "Jul 26",
        "Jul 27",
    ];
    const dataLine = [2, 30, 35, 40, 30, 32, 20, 10, 30, 40, 50, 80, 70, 50, 40, 30];
    const dataBar = [5, 100, 90, 80, 71, 68, 65, 60, 68, 58, 50, 40, 60, 40, 50, 20];

    const data = {
        labels,
        datasets: [
            {
                type: "line" as const,
                label: "Line Dataset",
                data: dataLine,
                borderColor: "rgba(255, 255, 255, 1)",
                backgroundColor: "rgba(255, 255, 255)",
                fill: false,
                tension: 0,
                pointBorderColor: "rgba(255, 255, 255, 1)",
                pointBackgroundColor: "black",
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBorderWidth: 2,
                yAxisID: "y",
                order: 1,
            },
            {
                type: "bar" as const,
                label: "Bar Dataset",
                data: dataBar,
                backgroundColor: function (context: any) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart rendering, do nothing here.
                        return;
                    }

                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    if (context.dataIndex % 2 === 0) {
                        gradient.addColorStop(0, "rgba(32, 33, 34, 0.8)");
                        gradient.addColorStop(1, "rgba(22, 23, 23, 0.8)");
                    } else {
                        gradient.addColorStop(0, "rgba(196, 201, 206, 0.8)");
                        gradient.addColorStop(1, "rgba(39, 40, 41, 0.8)");
                    }

                    return gradient;
                },

                yAxisID: "y",
                order: 2, // Vẽ trước
                borderRadius: 8,
            },
        ],
    };

    const options: ChartOptions<"bar"> = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "white",
                },
            },
            y: {
                grid: {
                    color: "rgba(255, 255, 255, 0.2)",
                    drawTicks: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };
    return (
        <div className="chart-container">
            <div className="chart-header">
                <div className="chart-header-title">Reward Chart</div>
                <div className="chart-header-labels">
                    <div className="label-button">
                        <span className="hire-icon"></span>
                        <span>Hire Fee</span>
                    </div>
                    <div className="label-button">
                        <span className="reward-icon"></span>
                        <span>PoT Reward</span>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", height: "400px", padding: "20px" }}>
                <Chart ref={chartRef} type="bar" data={data as any} options={options} />
            </div>
        </div>
    );
};

export default MixedChart;
