let danhSachCongNhan = [];
function themCongNhan() {
    
    let hoTen = document.getElementById("hoTen").value;
    let ngaySinh = document.getElementById("ngaySinh").value;
    let diaChi = document.getElementById("diaChi").value;
    let luong = document.getElementById("luong").value;
    let chucVu = document.getElementById("chucVu").value;

    
    if (hoTen && ngaySinh && diaChi && luong && chucVu) {

        let congNhan = {
            hoTen: hoTen,
            ngaySinh: ngaySinh,
            diaChi: diaChi,
            luong: parseFloat(luong),
            chucVu: chucVu
        };

        
        danhSachCongNhan.push(congNhan);

      
        danhSachCongNhan.sort((a, b) => {
            let tenA = a.hoTen.split(" ").pop().toLowerCase();
            let tenB = b.hoTen.split(" ").pop().toLowerCase();
            return tenA.localeCompare(tenB);
        });

     
        hienThiDanhSach();
    } else {
        alert("Vuilòngnhậpđầyđủthôngtin!");
    }
}

function hienThiDanhSach() {
    let tbody = document.getElementById("danhSachCongNhan");
    tbody.innerHTML = "";

    danhSachCongNhan.forEach((congNhan, index) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${congNhan.hoTen}</td>
            <td>${congNhan.ngaySinh}</td>
            <td>${congNhan.diaChi}</td>
            <td>${congNhan.luong.toLocaleString()} VND</td>
            <td>${congNhan.chucVu}</td>
        `;

        tbody.appendChild(tr);
    });
}