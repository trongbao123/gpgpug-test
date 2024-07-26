import "../../styles/index.scss";
import HeaderMain from "./home/_components/header-main/page";
import Rate from "./home/_components/rate/page";
import { DeviceTable } from "./home/_components/table";

export default function Home() {
    return (
        <main className="main">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <Rate />
                <DeviceTable />
            </div>
        </main>
    );
}
