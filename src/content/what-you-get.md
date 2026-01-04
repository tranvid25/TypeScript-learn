- Để khai báo Type trong Typescript thì chúng ta sử dụng cú pháp dấu 2 chấm (comnlon) -> keyword(let,var,const) variable name: type =value
-Type any cho phép sử dụng bất kỳ giá trị giá dữ liệu hạn chế sử dụng type
-Type `number` dành cho giá trị là số ->10,10.5
-Type `string` dành cho giá trị là chuỗi ->"javascrit"
-Type `boolean` dành cho giá trị là enum
-Type `unknow` dành cho những biến hoặc params mà chúng ta chưa xác định được type rõ ràng

-Sử dụng `typeof variableName` để kiểm tra type của một biến
-Chỉ sử dụng typeof trực tiếp vào biến hoặc params.chứ ko sử dụng vào Type được
-Type never ko gán được giá trị nào

-Dấu ? nghĩa là ko bắt buộc có cũng được ko có cũng được
``` typescript