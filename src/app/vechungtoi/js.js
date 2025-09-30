const address = {
  "Hà Nội": [
    "188 Nguyễn Lương Bằng, Ô Chợ Dừa, Q. Đống Đa, Hà Nội",
    "40 Nguyễn Hoàng, Mỹ Đình, Q. Cầu Giấy, Hà Nội",
    "461 Hoàng Quốc Việt, Q. Cầu Giấy, Hà Nội",
    "12 Nguyễn Văn Lộc, Hà Đông, Hà Nội",
    "141 Bạch Mai, Q. Hai Bà Trưng, Hà Nội",
    "468 Nguyễn Văn Cừ, Q. Long Biên, Hà Nội",
  ],

  "TP. Hồ Chí Minh": [
    "350 Đường 3/2, Phường 12, Quận 10, TP.HCM",
    "215 Khánh Hội, P5, Quận 4, TP.HCM",
    "49A Phan Đăng Lưu, P3, Q. Bình Thạnh, TP.HCM",
    "18 Phan Văn Trị, Khu Cityland, Q. Gò Vấp, TP.HCM",
    "837b-837c Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Q.12, TP.HCM",
    "125 Bà Hom, Phường 13, Quận 6, TP.HCM",
    "427 Cộng Hòa, P15, Q. Tân Bình, TP.HCM",
    "278 Lũy Bán Bích, P. Hòa Thạnh, Q. Tân Phú, TP.HCM",
    "66A Hoàng Diệu 2, P. Linh Chiểu, TP. Thủ Đức, TP.HCM",
    "1095-1097 Huỳnh Tấn Phát, P. Phú Thuận, Q.7, TP.HCM",
  ],

  "Đà Nẵng": [
    "103-105 Hàm Nghi, Vĩnh Trung, Q. Thanh Khê, Đà Nẵng",
    "254 Tôn Đức Thắng, P. Hòa Minh, Q. Liên Chiểu, Đà Nẵng",
    "226 Ngũ Hành Sơn, P. Mỹ An, Q. Ngũ Hành Sơn, Đà Nẵng",
  ],

  "Hải Phòng": [
    "448 Lạch Tray, Ngô Quyền, Hải Phòng",
  ],

  "Đồng Nai": [
    "R76 Võ Thị Sáu, P. Thống Nhất, TP. Biên Hòa, Đồng Nai",
  ],

  "Bình Dương": [
    "9-11 Yersin, TP. Thủ Dầu Một, Bình Dương",
  ],

  "Thanh Hóa": [
    "Lô 10, Phan Chu Trinh, P. Điện Biên, TP Thanh Hóa",
  ],

  "Quảng Ninh": [
    "97 Trần Phú, P. Cẩm Tây, TP. Cẩm Phả, Quảng Ninh",
    "A3-05, KĐT Monbay, P. Hồng Hải, TP. Hạ Long, Quảng Ninh",
  ],

  "Hà Tĩnh": [
    "LK 1-08, KĐT Vinhomes, Đường Hàm Nghi, TP Hà Tĩnh",
  ],

  "Bà Rịa - Vũng Tàu": [
    "57 Lê Hồng Phong, TP. Vũng Tàu",
  ],

  "Khánh Hòa": [
    "55 Đường 23/10, P. Phương Sơn, TP. Nha Trang, Khánh Hòa",
  ],

  "Nghệ An": [
    "74 Hermann, P. Hưng Phúc, TP. Vinh, Nghệ An",
  ],
};
document.querySelectorAll(".tp").forEach(input=>{
    input.addEventListener("click", function(){
        const city=this.value.trim();
        const infoBox= document.getElementById("info");
        infoBox.innerHTML=""; // xóa nội dung cũ
        const infos = address[city] || ["Không có thông tin."];

        //tạo card cho từng value
        infos.forEach(a=>{
            infoBox.innerHTML+=`<div class="col-md-4">
            <div class="card mb-2">
              <div class="card-body">
              <h3>${city}</h3>
                ${a}
                
              </div>
            </div>
          </div>`;
        })
    })
})
