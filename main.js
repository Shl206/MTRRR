
function right(){
    document.getElementById('left')
    .src="assets/Credit Pay2.png"
    document.getElementById('right')
    .src="assets/Elc Pay2.png"
    document.getElementById('actionBtns')
    .style.display="none"
    document.getElementById('actionBtns2')
    .style.display="flex"
    document.getElementById('changecolor3')
    .style.color="#fff"
    document.getElementById('changecolor4')
    .style.color="#4e86ad"
    document.getElementById('test1')
    .innerHTML="請拍下或上載收據，並請確保照片上能清晰顯示消費收據編號、商鋪地址、商戶名稱、交易日期、消費金額及購買項目資料。"
    document.getElementById('test2')
    .innerHTML="＊恕不接受遮蓋收據上的電子貨幣付款資料，如八達通或信用卡號碼。"
    document.getElementById('pic')
    .src="assets/Recept1.png"
    document.getElementById('movela3')
    .style.transform="translateX(0%)"
    document.getElementById('movela3')
    .style.transition="1s ease"
}
      
function left(){
    document.getElementById('left')
    .src="assets/Credit Pay1.png"
    document.getElementById('right')
    .src="assets/Elc Pay1.png"
    document.getElementById('actionBtns')
    .style.display="flex"
    document.getElementById('actionBtns2')
    .style.display="none"
    document.getElementById('test1')
    .innerHTML="請拍下或上載收據，並請確保照片上能清晰顯示消費收據編號、商鋪地址、商戶名稱、交易日期、消費金額及購買項目資料。"
    document.getElementById('test2')
    .innerHTML="＊恕不接受遮蓋收據上的電子貨幣付款資料，如八達通或信用卡號碼。"
    document.getElementById('pic')
    .src="assets/Recept1.png"
    document.getElementById('test3')
    .style.display="none"
    document.getElementById('changecolor2')
    .style.color="#4e86ad"
    document.getElementById('changecolor')
    .style.color="#fff"
    document.getElementById('movela')
    .style.transform="translateX(0%)"
    document.getElementById('movela')
    .style.transition="1s ease"
}
function right2(){
    document.getElementById('test1')
    .innerHTML="請拍下或上載付款收據 (持卡人存根)，並請確保照片上能清晰顯示消費商戶名稱、交易日期、消費金額及付款資料。"
    document.getElementById('test2')
    .innerHTML=""
    document.getElementById('pic')
    .src="assets/recept2.png"
    document.getElementById('test3')
    .style.display="none"
    document.getElementById('movela')
    .style.transform="translateX(95%)"
    document.getElementById('movela')
    .style.transition="1s ease"
    document.getElementById('changecolor')
    .style.color="#4e86ad"
    document.getElementById('changecolor2')
    .style.color="#fff"
    if (window.innerWidth > 1200) {
        document.getElementById('movela')
        .style.transform="translateX(99%)"
        document.getElementById('movela')
        .style.transition="1s ease"
    }
    if (window.innerWidth > 449) {
        document.getElementById('movela')
        .style.transform="translateX(97%)"
        document.getElementById('movela')
        .style.transition="1s ease"
    }
    if (window.innerWidth > 768) {
        document.getElementById('movela')
        .style.transform="translateX(98%)"
        document.getElementById('movela')
        .style.transition="1s ease"
    }
}
window.addEventListener('changesize', foo);

function left2(){
    document.getElementById('test1')
    .innerHTML="請拍下或上載收據，並請確保照片上能清晰顯示消費收據編號、商鋪地址、商戶名稱、交易日期、消費金額及購買項目資料。"
    document.getElementById('test2')
    .innerHTML="＊恕不接受遮蓋收據上的電子貨幣付款資料，如八達通或信用卡號碼。"
    document.getElementById('pic')
    .src="assets/Recept1.png"
    document.getElementById('test3')
    .style.display="none"
    document.getElementById('movela')
    .style.transform="translateX(0%)"
    document.getElementById('movela')
    .style.transition="1s ease"
    document.getElementById('changecolor2')
    .style.color="#4e86ad"
    document.getElementById('changecolor')
    .style.color="#fff"

}
function right3(){
    document.getElementById('movela3')
    .style.transform="translateX(95%)"
    document.getElementById('movela3')
    .style.transition="1s ease"
    document.getElementById('changecolor3')
    .style.color="#4e86ad"
    document.getElementById('changecolor4')
    .style.color="#fff"
    document.getElementById('test1')
    .innerHTML="請於電子貨幣App內的付款記錄頁面, 屏幕截圖及上載圖像檔案, 並請確保照片上能清晰顯示消費商戶名稱、交易日期、消費金額及付款資料。"
    document.getElementById('test2')
    .innerHTML="*如消費收據上已同時包含電子貨幣付款資料，請再次拍下或上載消費收據便可。 *如以八達通付款，則毋須上傳有關的截圖或電子貨幣付款存根。"
    document.getElementById('test3')
    .style.display="inline"
    document.getElementById('pic')
    .src="assets/recept3.png"
    if (window.innerWidth > 1200) {
        document.getElementById('movela3')
        .style.transform="translateX(99%)"
        document.getElementById('movela')
        .style.transition="1s ease"
    }
    if (window.innerWidth > 449) {
        document.getElementById('movela3')
        .style.transform="translateX(97%)"
        document.getElementById('movela')
        .style.transition="1s ease"
    }
    if (window.innerWidth > 768) {
        document.getElementById('movela3')
        .style.transform="translateX(98%)"
        document.getElementById('movela')
        .style.transition="1s ease"
    }
}
window.addEventListener('changesize2', foo);

function left3(){
    document.getElementById('test1')
    .innerHTML="請拍下或上載收據，並請確保照片上能清晰顯示消費收據編號、商鋪地址、商戶名稱、交易日期、消費金額及購買項目資料。"
    document.getElementById('test2')
    .innerHTML="＊恕不接受遮蓋收據上的電子貨幣付款資料，如八達通或信用卡號碼。"
    document.getElementById('pic')
    .src="assets/Recept1.png"
    document.getElementById('test3')
    .style.display="none"
    document.getElementById('movela3')
    .style.transform="translateX(0%)"
    document.getElementById('movela3')
    .style.transition="1s ease"
    document.getElementById('changecolor3')
    .style.color="#fff"
    document.getElementById('changecolor4')
    .style.color="#4e86ad"
}