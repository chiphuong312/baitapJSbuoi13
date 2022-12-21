// Bài tập 1 
let salary1Day = 100000
let tinhtienEl = document.getElementById("tinhtien");
let tinhtoanEl = document.getElementById("tinhtoan");

tinhtoanEl.onclick = function() {
    // Những câu lệnh bên trong cặp {} sẽ được chạy khi user click vào button 
    let ketQua = salary1Day * tinhtienEl.value;
    let tdQua = "<p>" + "Kết quả hiện ra là: " + ketQua + "</p>"
    let tdiv = document.getElementById("ket-qua");
    tdiv.innerHTML = tdQua;
}

// Bài tập 2
let tinhTien1 = document.getElementById("tinhtien1");
let tinhTien2 = document.getElementById("tinhtien2");
let tinhTien3 = document.getElementById("tinhtien3");
let tinhTien4 = document.getElementById("tinhtien4");
let tinhTien5 = document.getElementById("tinhtien5");

let tinhTrungBinh = document.getElementById("tinhTB");
tinhTrungBinh.onclick = function(){
    let reSult = (parseInt(tinhTien1.value) + parseInt(tinhTien2.value) + parseInt(tinhTien3.value) + parseInt(tinhTien4.value) + parseInt(tinhTien5.value))/5;
    let pReSult = "<h3>" + "Kết quả hiện ra là: " + reSult + "</h3>"
    let divTB = document.getElementById("tinh-TB");
    divTB.innerHTML = pReSult;
}

// Bài tập 3
let so1USD = 23500;
let doitienEl = document.getElementById("doitien");

let quyDoiEl = document.getElementById("quydoi");
quyDoiEl.onclick = function(){
    let exChange = doitienEl.value * so1USD;
    let hExChange = "<h3>" + "Kết quả hiện ra là: " + exChange + "</h3>";
    let divQD = document.getElementById("tinh-QD");
    divQD.innerHTML = hExChange;
}

// Bài tập 4 
let chieudaiEl = document.getElementById("chieudai");
let chieurongEl = document.getElementById("chieurong");
let tinhCVEl = document.getElementById("tinhCV");
tinhCVEl.onclick = function(){
    let tinhChuvi = (parseInt(chieudaiEl.value) + parseInt(chieurongEl.value))*2;
    let tinhDientich = parseInt(chieudaiEl.value) * parseInt(chieurongEl.value);
    let hCV = "<h3>" + "Chu vi là: " + tinhChuvi + "</h3>";
    let hDT = "<h3>" + "Diện tích là: " + tinhDientich + "</h3>";
    let divCV = document.getElementById("tinh-CV");
    divCV.innerHTML = hCV + "<br>" + hDT;
}

// Bài tập 5 
let numberEl = document.getElementById("number");
let countnumerEl = document.getElementById("countnumber");
countnumerEl.onclick = function(){
    let number1El = parseInt(numberEl.value) % 10;
    let numberaEl = parseInt(numberEl.value) - number1El;
    let number2El = numberaEl / 10;
    let countSum = number1El + number2El;

    let hCountSum = "<h3>" + "Kết quả hiện ra là: " + countSum + "</h3>";
    let divCN = document.getElementById("count-number");
    divCN.innerHTML = hCountSum;

}