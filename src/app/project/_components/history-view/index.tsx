import "./index.scss";
const HistoryView = () => {
    return (
        <div className="history-view">
            <div className="history-view-header">
                <p>History Viewer</p>
            </div>
            <div className="history-view-body">
                <div className="history-view-body-item">
                    <div className="history-view-body-item-icon">
                        <div className="item-content">
                            <div className="completed-work">
                                <div className="completed-work-text">Completed</div>
                                <p>Work Contents</p>
                            </div>
                            <p>2024-06-30 01:42</p>
                        </div>
                        <p>
                            Traceback (most recent call last): File example.py, line 6, in {"<module>"} result =
                            numerator / denominator ZeroDivisionError: division by zero
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryView;
