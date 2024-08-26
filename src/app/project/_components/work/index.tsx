import HistoryView from "../history-view";
import WorkTable from "../work-table";

type WorkAndHistoryProps = {
    [key: string]: any;
};
const WorkAndHistory: React.FC<WorkAndHistoryProps> = ({
    keyword,
    workList,
    page,
    length,
    handleSearch,
    itemDetail,
}) => {
    return (
        <div>
            <WorkTable
                keyword={keyword}
                workList={workList}
                page={page}
                length={length}
                handleSearch={handleSearch}
                itemDetail={itemDetail}
            />
            <HistoryView />
        </div>
    );
};

export default WorkAndHistory;
