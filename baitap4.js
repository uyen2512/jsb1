/** mô hình 3 khối 
 * b1: nhập chiều dài chiều rộng của hcn
 * b2: thực hiện phép tính: chu vi = (d+r)*2 ! diện tích = d*r 
 * b3: thông báo kết quả
 */

//? b1:
var cdai = 14;
var crong = 10;
var cvi = 0;
var dtich = 0;

//? b2
cvi = (cdai + crong) * 2;
dtich = cdai * crong;

//? b3 
console.log(`Chu vi hình chữ nhật là: ${cvi} \nDiện tích hình chữ nhật là: ${dtich}`)
