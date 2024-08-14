import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { ReactNode } from "react";

type NotificationType = "success" | "info" | "warning" | "error";
interface NotificationOptions {
    placement?: NotificationPlacement;
    message?: string;
    description?: string | JSX.Element | ReactNode;
    icon?: JSX.Element;
    type?: NotificationType | undefined;
    [key: string]: any;
}

const Notification = (props: NotificationOptions) => {
    const { placement, message, description, icon, type, ...rest } = props;

    return notification[type ? type : "info"]({
        message: message,
        description: description,
        placement,
        icon: icon,
        ...rest,
    });
};

export default Notification;
