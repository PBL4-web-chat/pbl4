đưa phần giao diện react vào thư mục ./client, thêm server nodejs. tạm thời dừng làm client.
>về server: liên kết với mongodb "mongodb://localhost:27017" và chạy trên local host. port hiện dùng là 8080

API được viết trong ./server/routes (đang viết auth.js). đã xong phần login và register user.

model trong ./server/models -> mô hình hóa database

>mn dùng phần mềm Postman để thử nghiệm request/response của API.
> > **Cần tải mongodb (bản compass hoặc dùng trên cloud cluster đều đc)**, nếu dùng cluster thì đổi url đến db trong file index.js (server)

>guide: 

-tại terminal ./pbl4 gõ 

cd client       //chuyển tới client

npm install     //import các module cần thiết, sau này ko cần import lại

npm start       //khởi động client


-tại terminal ./pbl4 gõ

cd server       //chuyển tới server

npm install

node .          //khởi động server
