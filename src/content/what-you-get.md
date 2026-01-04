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
-Union type dùng được nhiều type
-Intersection type & {} laf 1 type đặc biejt trong Typescript ,nó có tất cả giá trị ngoại trừ `null` và `undefined` và không nên dùng khi báo cho tất cả giá trị
-Để khai báo type trong typescript thì chúng ta sử dụng từ khóa là `interface` và `type`
-tên type thì viết theo PascalCase nghĩa là tất cả chữ cái đều in hoa
-Sử dụng `in` để kiểm tra 1 thuộc tính nào đó tồn tại trong object nào đó hay ko? phù hợp khi kiểm tra với union type

-Khi chúng ta sử dụng dấu : để khai báo type thì cái type nó sẽ mạnh hơn cái value
-`as const` sẽ biến giá trị thành readonly,tức là chỉ đọc chứ không thể thêm xóa cập nhật
//const scores = [1, 2, 3, 4, 5] as const
``` typescript