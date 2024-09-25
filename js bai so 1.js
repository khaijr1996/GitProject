   function tinhTrungBinhCong() {
        let input = document.getElementById("arrayInput").value;
        let arr = input.split(",").map(Number);

        let chiaHetCho3 = arr.filter(num => num % 3 === 0);

        if (chiaHetCho3.length > 0) {
            let tong = chiaHetCho3.reduce((acc, num) => acc + num, 0);
            let trungBinhCong = tong / chiaHetCho3.length;
            document.getElementById("result").innerText = `Trungbìnhcộncá sốchiahếtcho3 là: ${trungBinhCong.toFixed(2)}`;
        } else {
            document.getElementById("result").innerText = "Không có số nào chia hết cho 3.";
        }
    }
