const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    }
]

function getTotalPenjualan(dataPenjualan){
    if(typeof(dataPenjualan[0,1,2,3].totalTerjual) != 'string'){ //apabila tipedata pada objek yang berada dalam index [0,1,2,3] bukan string  maka eksekusi 
        const total = dataPenjualan.map(data => data.totalTerjual).reduce((previous, current) => previous + current, 0);   
        //map() mengembalikan array baru (memodifikasi elemen array tanpa mengubah array asli.)
        //reduce() untuk mengeksekusi fungsi callback pada setiap elemen array
        return total;
    }else{
        return "Data must be numbers";
    }
}

console.log(`Total Penjualan Sepatu sebanyak : ${(getTotalPenjualan(dataPenjualanPakAldi))} pasang `) //Expected Output 307


