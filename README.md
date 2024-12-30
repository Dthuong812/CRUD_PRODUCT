
# CRUD PRODUCT

## Giới Thiệu

Tạo một ứng dụng ReactJS cho phép người dùng quản lý danh sách sản phẩm. Ứng dụng cần cung cấp các chức năng như thêm, sửa, xóa sản phẩm và lưu dữ liệu vào localStorage.

## Yêu cầu
### Giao diện người dùng:
- Hiển thị danh sách sản phẩm dưới dạng bảng (table) Cột: ID, Tên sản phẩm, Giá, Hành động (Sửa, Xóa).
- Form để thêm/sửa sản phẩm với các trường : Tên sản phẩm (bắt buộc).Giá sản phẩm (bắt buộc, chỉ cho phép nhập số dương).
- Nút "Thêm" và "Cập nhật" tùy thuộc vào chế độ thêm mới hoặc sửa.

### Chức năng:
- Thêm sản phẩm : Điền thông tin vào form, nhấn "Thêm" để thêm sản phẩm vào danh sách.
- Xóa sản phẩm:Nhấn nút "Xóa" để xóa sản phẩm khỏi danh sách.
- Sửa sản phẩm:Nhấn nút "Sửa" để hiển thị thông tin sản phẩm vào form, sau đó cập nhật thông tin.
- Lưu dữ liệu:Lưu danh sách sản phẩm vào localStorage để không mất dữ liệu khi tải lại trang.
- Kiểm tra đầu vào:Tên sản phẩm không được để trống.
Giá sản phẩm phải là số dương.
### Công nghệ
- Sử dụng ReactJS 
### Mở rộng
- Thêm tính năng tìm kiếm sản phẩm theo tên.
- Thêm phân trang nếu danh sách quá dài.
- Sắp xếp sản phẩm theo tên hoặc giá (tăng/giảm dần).
- Hiển thị thông báo xác nhận trước khi xóa sản phẩm.
