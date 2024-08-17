// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
    interface User {
        token?: string; // Thêm thuộc tính token vào kiểu User
    }

    interface Session {
        accessToken?: string; // Thêm thuộc tính accessToken vào kiểu Session
    }

    interface JWT {
        accessToken?: string; // Thêm thuộc tính accessToken vào kiểu JWT
    }
}
