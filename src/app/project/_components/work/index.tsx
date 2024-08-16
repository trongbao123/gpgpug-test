import HistoryView from "../history-view";
import WorkTable from "../work-table";

type WorkAndHistoryProps = {
    [key: string]: any;
};
const WorkAndHistory: React.FC<WorkAndHistoryProps> = ({ itemDetail }) => {
    return (
        <div>
            <WorkTable itemDetail={itemDetail} />
            <HistoryView />
        </div>
    );
};

export default WorkAndHistory;
