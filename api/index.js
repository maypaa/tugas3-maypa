import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const biodata = {
    nama_lengkap :["Nama Lengkap",":","Maypa Dea Fazrin"],
    nama_panggilan :["Nama Panggilan",":","Kiyowo"],
    tempat_tgl_lahir :["Tempat_tgl_lahir",":","Padangsidimpuan, Sumatera Utara, 21 Februari 2003"],
    umur :["Umur",":","19 Tahun"],
    jenis_kelamin :["Jenis Kelamin",":","Perempuan"],
    gol_darah :["Gol. Darah",":","Tidak Diketahui"],
    agama :["Agama",":","Islam"],
    alamat :["Alamat",":","Jln. Arif Rahman Hakim"],
    status :["Status",":","Belum Menikah"],
    pekerjaan :["Pekerjaan",":","Mahasiswi"],
    kewarganegaraan :["Kewarganegaraan",":","Indonesia"]
};



app.get("/api/biodata", (req,res)=>{
res.send(biodata);
})
app.listen(3000);





