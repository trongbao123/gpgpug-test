import { Spin } from "antd";
import React from "react";

type Props = {};

const contentStyle: React.CSSProperties = {
    padding: 50,
    borderRadius: 4,
};

const content = <div style={contentStyle} />;

const Loading = (props: Props) => {
    return (
        <div className="main loading-page">
            <Spin tip="Loading" size="large" fullscreen>
                {content}
            </Spin>
        </div>
    );
};

export default Loading;
