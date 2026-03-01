# Generic
- 1 cách để tạo ra code linh hoạt và tái sử dụng bằng cách cho phép chúng ta định nghĩa các 
types mà sẽ được chỉ định sau khi được viết code.Cho phép
code hoạt động với nhiều loại dữ liệu khác nhau mà không 
cần viết lại types.
- Cấu trúc `<T>` `<TData>`
- Khi sử dụng từ khóa `extends` trong Generic Type thì nó được dùng
để áp đặt ràng buộc trên kiểu dữ liệu generic mà chúng ta dùng, giới
hạn các loại kiểu còn mà chuasgn ta có thể sử dụng cho tham số generic cụ thể.
``` typescript
type GenericType<T extends ConstraintType> =...
```
# conditional
