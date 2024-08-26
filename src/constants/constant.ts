export const unAuthenticatedRoute = ["/auth/sign-in", "/auth/sign-in/email", "/auth/sign-up", "/"];

export const rate = [
    {
        id: 1,
        title: "Uptime rate (7d)",
        content: "94%",
    },
    {
        id: 2,
        title: "PoT Reward",
        content: "45,463 GP",
    },
    {
        id: 3,
        title: "Hire fee",
        content: "5,568 GP",
    },
    {
        id: 4,
        title: "My GP Power",
        content: "321,406",
    },
];

export const projectRate = [
    {
        id: 1,
        title: "Total GPUs",
        content: "32",
    },
    {
        id: 2,
        title: "Work",
        content: "12",
    },
    {
        id: 3,
        title: "Storange",
        content: "3.25 GB",
    },
    {
        id: 4,
        title: "Billing",
        content: "24.53 $",
    },
];

export const provider = [
    {
        state: "Online",
        key: "1",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "New York No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "2",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "London No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Online",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "3",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "Sydney No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Online",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "4",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "Sydney No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Paused",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "5",
        name: "Device-Laptop-101",
        chip: "GeForce RTX 3050 Ti Laptop",
        address: "Sydney No. 1 Lake Park",
        ulti: "99%",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Deleted",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "6",
        name: "Device-Laptop-101",
        chip: "GeForce RTX 3050 Ti Laptop",
        address: "Sydney No. 1 Lake Park",
        network: "High",
        ulti: "99%",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Blocked",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
];

export const logo = {
    ["Mac"]: "/images/apple.svg",
    ["M2 Pro"]: "/images/apple.svg",
    ["GeForce RTX 3050 Ti Laptop"]: "/images/device.svg",
};

const markdownData = [
    {
        title: "1. Install Docker",
        content: `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\nsudo apt-get install docker-ce docker-ce-cli containerd.io`,
    },
    {
        title: "2. NVIDIA Docker Install",
        content: `distribution=$(source /etc/os-release;echo $ID$VERSION_ID)\ncurl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -\ncurl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\n\nsudo apt-get updat\nsudo apt-get install -y nvidia-docker2\nsudo systemctl restart docker\n\n# check\ndocker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi`,
    },
];
export const steps = [
    {
        id: 1,
        title: 1,
        content: [
            {
                id: 1,
                img: "/images/window.svg",
                title: "Windows",
                link: "",
            },
            {
                id: 2,
                img: "/images/apple.svg",
                title: "Mac",
                link: "",
            },
            {
                id: 3,
                img: "/images/untubu.svg",
                title: "Linux",
                link: "",
            },
        ],
        subTitle: "Os Select",
        subContent: "Download WNC installer for your operating system",
    },
    {
        id: 2,
        title: 2,
        macContent: [
            {
                id: 1,
                img: "/images/icon_copy.svg",
                title: "Download Docker",
                link: "https://www.docker.com/products/docker-desktop/",
            },
            {
                id: 2,
                img: "/images/icon_copy.svg",
                title: "Download and run WNC installer",
                url_title: "Apple Silicon:",
                link: [
                    {
                        type: "Apple Silicon",
                        value: "https://github.com/ServerKit-Project/wnc-installer-binary/releases/download/1.0/wnc_installer_darwin_arm64",
                    },
                    {
                        type: "Intel Mac",
                        value: "https://github.com/ServerKit-Project/wnc-installer-binary/releases/download/1.0/wnc_installer_darwin_amd64",
                    },
                ],
            },
            {
                id: 3,
                img: "/images/icon_copy.svg",
                title: "After running the WNC installer and completing the device creation, enter the ID of the created device and click `Confirm` button.",
                link: "",
            },
        ],
        content: [
            {
                id: 1,
                img: "/images/icon_copy.svg",
                title: "Download Docker",
                link: "https://www.docker.com/products/docker-desktop/",
            },
            {
                id: 2,
                img: "/images/icon_copy.svg",
                title: "Download and run WNC installer",
                link: "https://github.com/ServerKit-Project/wnc-installer-binary/releases/download/1.0/wnc_installer_windows.exe",
            },
            {
                id: 3,
                img: "/images/icon_copy.svg",
                title: "After installing the WNC installer, please open cmd or PowerShell in the folder where the file is located and execute the following command.",
                link: [
                    {
                        type: "cmd",
                        value: "wnc_installer_windows.exe",
                    },
                    {
                        type: "PowerShell",
                        value: "./wnc_installer_windows.exe",
                    },
                ],
            },
            {
                id: 4,
                img: "/images/icon_copy.svg",
                title: "After running the WNC installer and completing the device creation, enter the ID of the created device and click `Confirm` button.",
                link: "",
            },
        ],
        subTitle: "Set Up",
        subContent: "Follow the instructions below to set up a connection via the WNC",
        markdown: markdownData,
        isCLILog: true,
    },
    {
        id: 3,
        title: 3,
        content: [],
        subTitle: "Finish",
        subContent: "Check and confirm specifications of your connected device",
    },
];

export const stepCreateProject = [
    {
        id: 1,
        title: "New Project name",
        subTitle: "Please enter a project name to create a new project",
        content: [
            {
                id: 1,
                img: "/images/device.svg",
                title: "Device",
            },
        ],
    },
    {
        id: 2,
        title: "Select Device",
        subTitle: "Select the device you want to use for your project",
    },
];

export const stepCreateWork = [
    {
        id: 1,
        title: "Work name",
        subTitle: "Please enter the name of the new work",
        content: [
            {
                id: 1,
                img: "/images/device.svg",
                title: "Device",
            },
        ],
    },
    {
        id: 2,
        title: "Region",
        subTitle: "Which area of device will you use?\n\nOnly one area can be selected",
    },
    { id: 3, title: "Network Tier", subTitle: "Select the network tier" },
    { id: 4, title: "Choose Processor", subTitle: "Select the device to use" },
    { id: 5, title: "Run Script", subTitle: "Please upload the run script" },
];

export const dataRegion = [
    {
        region: "Asia",
        countries: [
            { name: "Vietnam", flag: "🇻🇳", checked: false },
            { name: "Australia", flag: "🇦🇺", checked: false },
            { name: "China", flag: "🇨🇳", checked: false },
            { name: "Hong Kong", flag: "🇭🇰", checked: false },
            { name: "India", flag: "🇮🇳", checked: false },
            { name: "Indonesia", flag: "🇮🇩", checked: false },
            { name: "Japan", flag: "🇯🇵", checked: false },
            { name: "Korea", flag: "🇰🇷", checked: false },
            { name: "Malaysia", flag: "🇲🇾", checked: false },
            { name: "Philippines", flag: "🇵🇭", checked: false },
            { name: "Singapore", flag: "🇸🇬", checked: false },
            { name: "Taiwan", flag: "🇹🇼", checked: false },
            { name: "Thailand", flag: "🇹🇭", checked: false },
        ],
    },
    {
        region: "North America",
        countries: [{ name: "Canada", flag: "🇨🇦", checked: false }],
    },
    {
        region: "South America",
        countries: [{ name: "Brazil", flag: "🇧🇷", checked: false }],
    },
    {
        region: "Europe",
        countries: [
            { name: "France", flag: "🇫🇷", checked: false },
            { name: "Germany", flag: "🇩🇪", checked: false },
        ],
    },
];

export const networkTier = [
    {
        id: 1,
        label: "Ultra",
        downloadSpeed: "1.6 Gbps",
        uploadSpeed: "1.6 Gbps",
        isSelected: true,
        icon: "/images/network_icon_ultra.svg", // Đây có thể là một class hoặc tên của icon component
    },
    {
        id: 2,
        label: "High",
        downloadSpeed: "1.6 Gbps",
        uploadSpeed: "1.6 Gbps",
        isSelected: false,
        icon: "/images/network_icon_high.svg",
    },
    {
        id: 3,
        label: "Nomal", // "Normal" nếu bạn muốn sửa chính tả
        downloadSpeed: "1.6 Gbps",
        uploadSpeed: "1.6 Gbps",
        isSelected: false,
        icon: "/images/network_icon_normal.svg",
    },
    {
        id: 4,
        label: "Low",
        downloadSpeed: "1.6 Gbps",
        uploadSpeed: "1.6 Gbps",
        isSelected: false,
        icon: "/images/network_icon_low.svg",
    },
];

export const deviceGroups = [
    {
        brand: "Nvidia",
        devices: [
            { id: 1, name: "NVIDIA GeForce RTX 4090", brand: "NVIDIA", quantity: 20, icon: "/images/nvidia_icon.svg" },
            {
                id: 2,
                name: "NVIDIA GeForce RTX 4080 SUPER",
                brand: "NVIDIA",
                quantity: 18,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 3, name: "NVIDIA GeForce RTX 4080", brand: "NVIDIA", quantity: 17, icon: "/images/nvidia_icon.svg" },
            {
                id: 4,
                name: "NVIDIA GeForce RTX 4070 Ti",
                brand: "NVIDIA",
                quantity: 16,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 5, name: "NVIDIA GeForce RTX 4070", brand: "NVIDIA", quantity: 22, icon: "/images/nvidia_icon.svg" },
            {
                id: 6,
                name: "NVIDIA GeForce RTX 4060 Ti",
                brand: "NVIDIA",
                quantity: 25,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 7, name: "NVIDIA GeForce RTX 4060", brand: "NVIDIA", quantity: 19, icon: "/images/nvidia_icon.svg" },
            { id: 8, name: "NVIDIA GeForce RTX 3090", brand: "NVIDIA", quantity: 14, icon: "/images/nvidia_icon.svg" },
            {
                id: 9,
                name: "NVIDIA GeForce RTX 3080 TI",
                brand: "NVIDIA",
                quantity: 15,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 10, name: "NVIDIA GeForce RTX 3080", brand: "NVIDIA", quantity: 13, icon: "/images/nvidia_icon.svg" },
            {
                id: 11,
                name: "NVIDIA GeForce RTX 3070 Ti",
                brand: "NVIDIA",
                quantity: 12,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 12, name: "NVIDIA GeForce RTX 3070", brand: "NVIDIA", quantity: 16, icon: "/images/nvidia_icon.svg" },
            {
                id: 13,
                name: "NVIDIA GeForce RTX 3060 Ti",
                brand: "NVIDIA",
                quantity: 18,
                icon: "/images/nvidia_icon.svg",
            },
            {
                id: 14,
                name: "NVIDIA GeForce RTX 3060 Ti GDDR6X",
                brand: "NVIDIA",
                quantity: 15,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 15, name: "NVIDIA GeForce RTX 3060", brand: "NVIDIA", quantity: 17, icon: "/images/nvidia_icon.svg" },
            { id: 16, name: "NVIDIA GeForce RTX 3050", brand: "NVIDIA", quantity: 21, icon: "/images/nvidia_icon.svg" },
            {
                id: 17,
                name: "NVIDIA GeForce RTX 2080 Ti",
                brand: "NVIDIA",
                quantity: 10,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 18, name: "NVIDIA GeForce RTX 2080", brand: "NVIDIA", quantity: 12, icon: "/images/nvidia_icon.svg" },
            {
                id: 19,
                name: "NVIDIA GeForce RTX 2070 SUPER",
                brand: "NVIDIA",
                quantity: 9,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 20, name: "NVIDIA GeForce RTX 2070", brand: "NVIDIA", quantity: 11, icon: "/images/nvidia_icon.svg" },
            {
                id: 21,
                name: "NVIDIA GeForce RTX 2060 SUPER",
                brand: "NVIDIA",
                quantity: 13,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 22, name: "NVIDIA GeForce RTX 2060", brand: "NVIDIA", quantity: 14, icon: "/images/nvidia_icon.svg" },
            { id: 23, name: "NVIDIA GeForce RTX 2070", brand: "NVIDIA", quantity: 11, icon: "/images/nvidia_icon.svg" },
            {
                id: 24,
                name: "NVIDIA GeForce GTX 1660 Ti",
                brand: "NVIDIA",
                quantity: 8,
                icon: "/images/nvidia_icon.svg",
            },
            {
                id: 25,
                name: "NVIDIA GeForce GTX 1660 SUPER",
                brand: "NVIDIA",
                quantity: 10,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 26, name: "NVIDIA GeForce GTX 1660", brand: "NVIDIA", quantity: 12, icon: "/images/nvidia_icon.svg" },
            {
                id: 27,
                name: "NVIDIA GeForce GTX 1650 SUPER",
                brand: "NVIDIA",
                quantity: 9,
                icon: "/images/nvidia_icon.svg",
            },
            {
                id: 28,
                name: "NVIDIA GeForce GTX 1650 GDDR6",
                brand: "NVIDIA",
                quantity: 11,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 29, name: "NVIDIA GeForce GTX 1650", brand: "NVIDIA", quantity: 13, icon: "/images/nvidia_icon.svg" },
            { id: 30, name: "NVIDIA GeForce GTX 1630", brand: "NVIDIA", quantity: 6, icon: "/images/nvidia_icon.svg" },
            {
                id: 31,
                name: "NVIDIA GeForce GTX 1080 Ti",
                brand: "NVIDIA",
                quantity: 5,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 32, name: "NVIDIA GeForce GTX 1080", brand: "NVIDIA", quantity: 8, icon: "/images/nvidia_icon.svg" },
            {
                id: 33,
                name: "NVIDIA GeForce GTX 1070 Ti",
                brand: "NVIDIA",
                quantity: 9,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 34, name: "NVIDIA GeForce GTX 1070", brand: "NVIDIA", quantity: 7, icon: "/images/nvidia_icon.svg" },
            { id: 35, name: "NVIDIA GeForce GTX 1060", brand: "NVIDIA", quantity: 10, icon: "/images/nvidia_icon.svg" },
            {
                id: 36,
                name: "NVIDIA GeForce GTX 1050 Ti",
                brand: "NVIDIA",
                quantity: 12,
                icon: "/images/nvidia_icon.svg",
            },
            { id: 37, name: "NVIDIA GeForce GTX 1050", brand: "NVIDIA", quantity: 13, icon: "/images/nvidia_icon.svg" },
            { id: 38, name: "NVIDIA GeForce GTX 1010", brand: "NVIDIA", quantity: 4, icon: "/images/nvidia_icon.svg" },
        ],
    },
    {
        brand: "Apple",
        devices: [
            {
                id: 1,
                name: "MacBook Pro 16-inch",
                quantity: 10,
                icon: "/images/mac_icon.svg",
            },
            {
                id: 2,
                name: "MacBook Air M2",
                quantity: 15,
                icon: "/images/mac_icon.svg",
            },
            // Các thiết bị Apple khác...
        ],
    },
];

export interface FileData {
    id: string;
    fileName: string;
    fileSize: number; // in MB
    uploadedSize: number; // in MB
    progress: number; // in percentage
    status: "uploading" | "done" | "error";
    error?: string;
}

interface FileCategories {
    uploadingOrFail: FileData[];
    uploaded: FileData[];
}

export const fileData: FileCategories = {
    uploadingOrFail: [
        {
            id: "1",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 123.51,
            progress: 21,
            status: "uploading",
        },
        {
            id: "2",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 123.51,
            progress: 78,
            status: "uploading",
        },
        {
            id: "3",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 123.51,
            progress: 100,
            status: "error",
            error: "Error",
        },
    ],
    uploaded: [
        {
            id: "4",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
        {
            id: "5",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
        {
            id: "6",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
        {
            id: "7",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
    ],
};

export const project = [
    {
        id: "1",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        work: 29,
        data: "1.5 GB",
        billing: "10 $",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
        ],
    },
    {
        id: "2",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        work: 29,
        data: "1.5 GB",
        billing: "10 $",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
        ],
    },
    {
        id: "3",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        work: 29,
        data: "1.5 GB",
        billing: "10 $",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
        ],
    },
    {
        id: "4",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        work: 29,
        data: "1.5 GB",
        billing: "10 $",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
        ],
    },
    {
        id: "5",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        work: 29,
        data: "1.5 GB",
        billing: "10 $",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
        ],
    },
    {
        id: "6",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        work: 29,
        data: "1.5 GB",
        billing: "10 $",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
                hourFee: 10,
                dailyFee: 20,
                error_logs: [
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                    {
                        timestamp: "2024-06-30 01:42",
                        traceback:
                            'Traceback (most recent call last): File "example.py", line 6, in <module> result = numerator / denominator ZeroDivisionError: division by zero',
                    },
                ],
            },
        ],
    },
];
