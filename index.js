//Bài 1:
/**
 * Input:Nhập vào date month year
 * Process:
 *         1.Lấy Input
 *         2.Kiểm tra TH không phải đầu tháng và cuối tháng:
 *              Ngày thanngs năm của ngày tiếp theo: date++,month,year;
 *              Ngày tháng năm  của ngày trước đó: date--,month,year
 *            TH cuối tháng:(30||31)
 *              Ngày thanngs năm của ngày tiếp theo: 1,month++,year;
 *              Ngày tháng năm  của ngày trước đó: date--,month,year;
 *            TH date=1 :
 *              .........
 *         3.     
 * Output: kết quả
 */
var date = 31;
var month = 12;
var year =2023;
switch(month){
    case 1:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=31,month=12,year-1);
        }
        break;
    case 2:
        if (date !== 28 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===28){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=27,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=2,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=31,month=1,year);
        }
        break;
    case 3:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=3,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=28,month=2,year);
        }
        break;
    case 4:
        if (date !== 30 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===30){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=29,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=4,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=31,month=3,year);
        }
        break;
    case 5:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=5,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month=4,year);
        }
        break;
    case 6:
        if (date !== 30 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===30){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=29,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=6,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=31,month=5,year);
        }
        break;
    case 7:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=7,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month=6,year);
        }
        break;
    case 8:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=8,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month=7,year);
        }
        break;
    case 9:
        if (date !== 30 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===30){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=29,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=9,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=31,month=8,year);
        }
        break;
    case 10:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=10,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month=9,year);
        }
        break;
    case 11:
        if (date !== 30 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===30){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,month+1,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=29,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=11,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=31,month=10,year);
        }
        break;
    case 12:
        if (date !== 31 && date !==1){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date+1,month,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date -1,month,year);
        }
        else
        if(date===31){
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=1,"1",year+1);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month,year);
        }
        else{
            console.log ("Ngày, Tháng, Năm của ngày tiếp theo là: ",date=2,month=12,year);
            console.log ("Ngày, Tháng, Năm của ngày trước là: ",date=30,month=11,year);
        }
        break;
    default:
        console.log("Ngày tháng không hợp lệ")
}
//Bài 2:
/**Input: Nhập month,year;
 * Process:1.Lấy input (month,year);
 *         2. Kiểm tra năm nhuận: year % 4===0;
 *         3. Lập điều kiện kiểm tra theo 2 TH năm nhuận và không nhuận.
 *         4. Xuất kết quả 
 * Output: Tháng đó bao nhiêu ngày?
 */
var month2 = 2;
var year2 = 2020;
if (year2 % 4 === 0){
    switch (month2){
        case 1:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        case 2:
            console.log("Tháng ",month2,"có 29 ngày");
        break;
        case 3:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        case 4:
            console.log("Tháng ",month2,"có 30 ngày");
        break;
        case 5:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        case 6:
            console.log("Tháng ",month2,"có 30 ngày");
        break;
        case 7:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        case 8:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        case 9:
            console.log("Tháng ",month2,"có 30 ngày");
        break;
        case 10:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        case 11:
            console.log("Tháng ",month2,"có 30 ngày");
        break;
        case 12:
            console.log("Tháng ",month2,"có 31 ngày");
        break;
        default:
            console.log("Ngày tháng không hợp lệ");
    }
}
    else {
        switch (month2){
            case 1:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            case 2:
                console.log("Tháng ",month2,"có 28 ngày");
            break;
            case 3:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            case 4:
                console.log("Tháng ",month2,"có 30 ngày");
            break;
            case 5:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            case 6:
                console.log("Tháng ",month2,"có 30 ngày");
            break;
            case 7:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            case 8:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            case 9:
                console.log("Tháng ",month2,"có 30 ngày");
            break;
            case 10:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            case 11:
                console.log("Tháng ",month2,"có 30 ngày");
            break;
            case 12:
                console.log("Tháng ",month2,"có 31 ngày");
            break;
            default:
                console.log("Ngày tháng không hợp lệ");
        }
}
//Bài 3:
/**
 * Input: Nhập số có 3 chữ số
 * Process: 
 *          1.Lấy input
 *          2.Lấy ra hàng trăm chục đơnvị của số đó
 *          3. Kiểm tra cách đọc hàng trăm, chục, đơn vị bằng switch case:
 *          4 In ra cách đọc của số đó
 * Output: cách đọc của số vừa nhập.
 */
var number = 345;
var hundreds = Math.floor (number/100);
var units = number % 10;
var tens = Math.floor((number - hundreds*100) / 10);
switch(hundreds){
    case 1: 
        hundreds = "Một trăm";
    break;
    case 2: 
        hundreds = "Hai trăm";
    break;
    case 3: 
        hundreds = "Ba trăm";
    break;
    case 4: 
        hundreds = "Bốn trăm";
    break;
    case 5: 
        hundreds = "Năm trăm";
    break;
    case 6: 
        hundreds = "Sáu trăm";
    break;
    case 7: 
        hundreds = "Bảy trăm";
    break;
    case 8: 
        hundreds = "Tám trăm";
    break;
    case 9: 
        hundreds = "Chín trăm";
    break;
    default:;
}
switch(tens){
    case 0:
        tens = "lẻ";
        break;
    case 1: 
        tens = "mười";
    break;
    case 2: 
        tens = "hai mươi";
    break;
    case 3: 
        tens = "ba mươi";
    break;
    case 4: 
        tens = "bốn mươi";
    break;
    case 5: 
        tens = "năm mươi";
    break;
    case 6: 
        tens = "sáu mươi";
    break;
    case 7: 
        tens = "bảy mươi";
    break;
    case 8: 
        tens = "tám mươi";
    break;
    case 9: 
        tens = "chín mươi";
    break;
    default:;
}
switch(units){
    case 0:
        units = "";
        break;
    case 1: 
        units = "mốt";
    break;
    case 2: 
        units = "hai";
    break;
    case 3: 
        units = "ba";
    break;
    case 4: 
        units = "bốn";
    break;
    case 5: 
        units = "lăm";
    break;
    case 6: 
        units = "sáu";
    break;
    case 7: 
        units = "bảy";
    break;
    case 8: 
        units = "tám";
    break;
    case 9: 
        units = "chín";
    break;
    default:;
}
console.log(hundreds,tens,units);
//Bài 4
/**
 * Input: Nhập tên sinh viên, tọa độ nhà của từng sinh viên, và tọa độ trường học 
 * Process:
 *      1.Lấy input.
 *      2.Tính khoảng cách của từng sinh viên đến trường học: d =  căn bậc 2 (x-x0) bình phương + (y-y0) bình phương;
 *      3So sánh và lấy kết quả lớn nhất 
 * Output:Sinh viên xa nhất trường
 */
var x0=0;
var y0=0;
var name1= "Nam";
var x1 = 14;
var y1 = 4;
var name2= "Đông";
var x2 = 2;
var y2 = 1;
var name3= "Tây";
var x3 = 5;
var y3 = 6;
var d1,d2,d3;
d1 = Math.sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0));
d2 = Math.sqrt((x2-x0)*(x2-x0)+(y2-y0)*(y2-y0));
d3 = Math.sqrt((x3-x0)*(x3-x0)+(y3-y0)*(y3-y0));
if (d1 > d2 && d1 > d3){
    console.log ("Nam là người xa trường nhất");
}
else
if (d2 > d1 && d2> d3){
    console.log ("Đông là người xa trường nhất");
}
else {
    console.log ("Tây là người xa trường nhất");
}