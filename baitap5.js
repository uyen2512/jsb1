/**mô hình 3 khối
 * b1: nhập vào số nguyên dương có 2 chữ số (12,24,35)
 * b2: các bước xử lí:
 *   số hàng chục = phần nguyên trong phép chia 10
 *   số hàng đơn vị = phần dư trong phép chia 10
 *   tổng cần tìm = số hàng chục + số hàng đơn vị
 * b3: thông báo kết quả         
 * 
 */

//? b1
var num = 13;
var ten = 0;
var unit = 0;
var tong = 0;

//? b2
ten = Math.floor(num/10);
unit = Math.floor(num%10);
tong = ten + unit;

//? b3 
console.log("Tổng của 2 ký số là: " + tong);
