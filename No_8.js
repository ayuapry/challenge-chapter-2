const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

const getInfoPenjualan = (dataPenjualan) =>{
  const untung = dataPenjualan.map(data => (data.hargaJual - data.hargaBeli) * data.totalTerjual).reduce((previous,current) => previous + current, 0); //Hitung Total Keuntungan
  const modal = dataPenjualan.map(data => (data.sisaStok + data.totalTerjual) * data.hargaBeli).reduce((previous, current) => previous + current, 0);  //Hitung Total Modal

  //Create a Rupiah format
  const format = [untung .toString().split('').reverse().join(''), modal.toString().split('').reverse().join('')];                                       
  const totalUntung = 'Rp ' + format[0].match(/\d{1,3}/g).join('.').split('').reverse().join('') //The match() method matches a string against a regular expression
  const totalModal = 'Rp ' + format[1].match(/\d{1,3}/g).join('.').split('').reverse().join('')
  
  const persenUntung = ((untung / modal) * 100).toFixed(1) + '%';
  
  const totalArr = dataPenjualan.map(data => newArr = data.totalTerjual);
  const bestSelling = Math.max(...totalArr);                                                                                    //The Math.max() function returns the largest of the zero or more numbers given as input parameters
  const novelTerlaris = dataPenjualan.filter(data => data.totalTerjual == bestSelling).map(data => data.namaProduk).toString(); //filter() untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.
  const penulisTerlaris = dataPenjualan.filter(data => data.totalTerjual == bestSelling).map(data => data.penulis).toString();  //map() mengembalikan array baru (memodifikasi elemen array tanpa mengubah array asli.)
  
  const objek = {
    totalKeuntungan : totalUntung, 
    totalModal : totalModal,
    persentaseKeuntungan : persenUntung,
    produkBukuTerlaris: novelTerlaris,
    penulisTerlaris: penulisTerlaris,
  }
  return objek;
}

console.log(getInfoPenjualan(dataPenjualanNovel))