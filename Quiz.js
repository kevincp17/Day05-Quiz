//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas
console.log("Soal 1");
const arrNum=[12,24,36,48,60];
let arrNumShow='';
for(let i=0;i<arrNum.length;i++){
    arrNumShow+=arrNum[i]+' ';
}
console.log(arrNumShow);
console.log("\n");

//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15
console.log("Soal 2");
let num=1;
let arrOkYes=[];
while(num<=15){
    if(num%3==0 && num%4==0){
        arrOkYes.push("OKYES");
    }
    else if(num%3==0){
        arrOkYes.push("OK");
    }
    else if(num%4==0){
        arrOkYes.push("YES");
    }
    else{
        arrOkYes.push(num);
    }
    num++;
}
console.log(arrOkYes);
console.log("\n");

//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
console.log("Soal 3");
let triangle1='';
for(let i=1;i<=5;i++){
    for(let j=i;j<i+5;j++){
        if(j<i*2){
            triangle1+=j+" "; 
        }
    }
    console.log(triangle1+"\n");
    triangle1='';
}

console.log("\n");

//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5
console.log("Soal 4");
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
let n=5;
let triangle2=''; //menampung string
for(let i=1;i<n+1;i++){
    for(let j=0;j<i;j++){
        /*
        menampung i untuk mendapatkan baris dengan angka sama 
        dan batas berapa angka yang dapat dimasukkan pada satu baris
        */
        triangle2+=i+" "; 
    }
    console.log(triangle2+"\n");
    triangle2='';
}
console.log("================");

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
let triangle3=''; //menampung string
for(let i=1;i<n+1;i++){
    for(let j=i;j>0;j--){
        /*
        menampung j yang menyimpan nilai i agar nilainya dapat diturunkan dengan j-- 
        sehingga angka yang dimasukkan terbalik dengan nilai menurun tiap barisnya
        */
        triangle3+=j+" " 
    }
    console.log(triangle3+"\n");
    triangle3='';
}
console.log("================");

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3
let triangle4='';//menampung string
let count=1;//buat dimasukkan kedalam baris
let descend=2; //dipakai saat count melebihi n
for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        if(count<n+1){ //memasukkan angka sebelum n
            triangle4+=count+" ";
            count++;
        }
        else if(count>=n+1 && (count-descend)!=1){
            //jika sudah melebihi n maka count-descent selama tidak sama dengan 1 dan descent++
            triangle4+=(count-descend)+" ";
            count++;
            descend+=2;
        }
        else if(count>=n+1 && (count-descend)==1){
            //jika count-descent=1 maka count dikembalikan ke nilai 1 dan descent menjadi 2 kembali 
            count=1;
            descend=2;
            triangle4+=count+" ";
            count++;
        }
        
    }
    triangle4+="\n";
}
console.log(triangle4);
console.log("================");

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25
let triangle5='';//menampung string
let a=1,b=(n*2)-1; //variabel sebagai penambah
for(let i=1;i<=n;i++){
    let startValue=i; //startValue digunakan sebagai nilai yang digunakan untuk penambah a atau b
    for(let j=1;j<=n;j++){
        if(j==1){ 
            /*
            jika j==1 maka nilai i akan dimasukkan terlebih 
            dahulu untuk mendapatkan nilai awal untuk penambah b
            */
            triangle5+=i+" ";
        }
        else if(j>1 && j%2==0){
            /*
            jika j genap maka nilai maka j akan ditambah nilai b 
            */
            startValue+=b;
            triangle5+=startValue+" ";
        }else if(j>1 && j%2!=0){
            /*
            jika j ganjil maka nilai maka j akan ditambah nilai a 
            */
            startValue+=a;
            triangle5+=startValue+" ";
        }
    }
    /*
        a akan ditambah 2 dan b dikurangi 2 jika setiap baris selesai dimasukan pada
        variabel triangle5
    */
    a+=2;
    b-=2;
    console.log(triangle5+"\n");
    triangle5='';
}
console.log("================");

//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.
console.log("Soal 5");
let penduduk=30000;
let tahun=0;
while(penduduk<=100000){
    penduduk+=penduduk*0.03;
    tahun+=1;
}
console.log(tahun+" tahun");

console.log("\n");

//soal 6
console.log("Soal 6");
function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 
    let wordArr=word.split("");
    let reverseWord=wordArr.reverse().join();
    for(let i=0;i<=wordArr.length;i++){
        if(wordArr[i]==reverseWord[i]){
            return true;
        }
    }
    return false;
}
console.log(isPalindrome('kasur ini rUsak'));//true
console.log("\n");


//soal 7
console.log("Soal 7");
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
    let arrValley=s.split("");
    let total=0;
    for(let i=0;i<arrValley.length;i++){
        if(arrValley[i]=="U"){
            total+=1;
        }else{
            total-=1;
        }
    }

    if(total==0){
        return 1;
    }else{
        return total;
    }
}
console.log(countingValleys('UDDDUDUU'));//1
console.log("\n");

//soal 8
console.log("Soal 8");
function checkPermute(stringOne, stringTwo) {
	//buat isi function untuk menentukan nilai checkPermute di console jika length
	//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
	//jumlah kata dari masing2 inputan perjumlah sama atau tidak
    if(stringOne.split("").length!=stringTwo.split("").length){
        return false;
    }
    else{
        if(stringOne.split("").sort().join()!=stringTwo.split("").sort().join()){
            return false;
        }
        else{
            return true;
        }
    }
}
console.log(checkPermute('aba', 'aab'))//true;
console.log(checkPermute('aba', 'aaba'))//false;
console.log(checkPermute('aba', 'aaa'))//false;
console.log("\n");

//soal 9
console.log("Soal 9");
function maxWordLength(params) {
	//buat function menentukan kata mana yang paling panjang lengthnya
    let maxArr=params.split(" ");
    let numArr=[];
    
    for(let i=0;i<maxArr.length;i++){
        numArr.push(maxArr[i].length);
    }

    const max = Math.max(...numArr);
    const indexMax=numArr.indexOf(max);
    return maxArr[indexMax];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp
console.log("\n");

//soal 10
console.log("Soal 10");
const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
// Find where the 'walrus' item is
console.log("walrus berada di indeks ke-"+animal.indexOf("walrus")+ " pada array animal");
// Join the portion before 'walrus' to the portion after 'walrus'
const befWalrus=animal.slice(0,3);
const afWalrus=animal.slice(4,6);
const coba=animal.splice(3);
// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']
console.log(befWalrus.concat(afWalrus));
console.log("\n");

//soal 11
console.log("Soal 11");
function startsWithE(animal) {
    let eAnimal=[];
    for(let i=0;i<animal.length;i++){
        if(animal[i].split("")[0]=="e"){
            eAnimal.push(animal[i]);
        }
    }
    return eAnimal;
}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
    'eel', 'rabbit', 'goose', 'earwig'];

console.log(startsWithE(animals)); // ["elephant", "emu", "eel", "earwig"]
console.log("\n");

//soal 12
console.log("Soal 12");
function range(startOrEnd, end, step) {
    return rangeFromStartToEnd(startOrEnd,end,step);
}

function rangeFromStartToEnd(start, end, step = 1){
    let numArray=[]
    if(!end){
        for(let i=0;i<start;i+=step){
            numArray.push(i);
        }
    }else{
        for(let i=start;i<end;i+=step){
            numArray.push(i);
        }
    }
    return numArray;
};

console.log(range(9));//(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5,9));//(4) [5, 6, 7, 8]
console.log("\n");

//soal 13
console.log("Soal 13");
const  findSum =(arr, weight) =>{
    let sum=0;
    let step=0;
    let twoElements=[];
    for(let i=0;i<arr.length;i++){
        for(let j=step;j<arr.length;j++){
            sum+=arr[j];
            twoElements.push(arr[j]);
            if(sum>weight || twoElements.length>2){
                sum=0;
                twoElements=[];
                step++;
                break;
            }else if(sum==weight){
                return twoElements[0]+" & "+twoElements[1];
            }
        }
    }
}

console.log(findSum([1,2,3,4,5],9)); // 4 & 5
console.log("\n");

//soal 14
console.log("Soal 14");
/**
 *  Peminjaman komik di taman bacaan 
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

 function tagihanKomik(tglPinjam, tglKembali, totalkomik) {
     let falseDate1=false;
     let falseDate2=false;
     for(let i=0;i<3;i++){
       if(isNaN(tglPinjam.split("-")[i])==true){
            falseDate1=true;
            break;
       }
     } 

     for(let i=0;i<3;i++){
        if(isNaN(tglKembali.split("-")[i])==true){
             falseDate2=true;
             break;
        }
      }
      if(falseDate1==true && falseDate2==true){
        return "Tgl.Pinjam "+tglPinjam+" & Tgl.Kembali "+tglKembali+" not valid formated date";
      }else if(falseDate1==true && falseDate2!=true){
        return "Tgl.Pinjam "+tglPinjam+" not valid formated date";
      }else if(falseDate1!=true && falseDate2==true){
        return "Tgl.Kembali "+tglKembali+" not valid formated date";
      }else{
          let datePinjam=new Date(tglPinjam);
          let dateKembali=new Date(tglKembali);
          let pinjamToKembali=dateKembali.getDate()-datePinjam.getDate();
          if(pinjamToKembali>6){
              let denda=500*totalkomik;
              return "Total Hari = "+pinjamToKembali+" hari\n Total Komik ="+totalkomik+" x "+2000+"\n Total Denda =Rp."+denda+"\n------------------------\n Total Tagihan =Rp."+((denda*(pinjamToKembali-6))+2000*totalkomik);
          }else{
            return "Total Hari = "+pinjamToKembali+" hari\n Total Komik ="+totalkomik+" x "+2000+"\n------------------------\n Total Tagihan =Rp."+2000*totalkomik*pinjamToKembali;
          }
      }
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021",4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021",4));//Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021",4));//Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021",4));
/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */
 console.log(tagihanKomik("09-03-2021", "09-15-2021",4));
 console.log("\n");

//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,
    
    function payment(tglBayar,tglJatuhTempo,cicilan);
    jika penghuni telat membayar dari tgl jatuh tempo 
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */
console.log("Soal 15");
function payment(tglBayar,tglJatuhTempo,cicilan){
        let dateBayar=new Date(tglBayar);
        let dateJatuhTempo=new Date(tglJatuhTempo);
        if(cicilan<3500000){
            return "Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran.";
        }
        else if(dateBayar.getDate()<dateJatuhTempo.getDate()-5){
            return "Tagihan bulan "+dateJatuhTempo.getMonth()+" belum tersedia" ;
        }

        else if(dateBayar.getDate()>dateJatuhTempo.getDate()){
            let lewatTenggang=differenceInDays(dateBayar,dateJatuhTempo);
            let denda=cicilan*0.002*lewatTenggang;
            return showTagihan(dateBayar,dateJatuhTempo,3500000,cicilan,lewatTenggang,denda);
        }
        else{
            return showTagihan(dateBayar,dateJatuhTempo,3500000,cicilan);
        }
} 

function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){
    if(terlambat && denda){
        return " --------------------------\nTanggal Bayar : "+new Intl.DateTimeFormat('id-ID').format(payDate)+"\nJatuh Tempo : "+new Intl.DateTimeFormat('id-ID').format(dueDate)+"\n--------------------------\nTagihan bulan "+dueDate.getMonth()+","+dueDate.getFullYear()+" = Rp."+angsuran+"\nDenda = Rp."+denda+" (terlambat "+terlambat+" hari)\nTotal = Rp."+(cicilan+denda)+" (lunas)\n--------------------------\nKwitansi ini sebagai alat bukti pembayaran";
    }else{
        return " --------------------------\nTanggal Bayar : "+new Intl.DateTimeFormat('id-ID').format(payDate)+"\nJatuh Tempo : "+new Intl.DateTimeFormat('id-ID').format(dueDate)+"\n--------------------------\nTagihan bulan "+dueDate.getMonth()+","+dueDate.getFullYear()+" = Rp."+angsuran+"\nDenda = Rp.0 (terlambat 0 hari)\nTotal = Rp."+cicilan+" (lunas)\n--------------------------\nKwitansi ini sebagai alat bukti pembayaran";
    }
}

function differenceInDays(startDate,endDate){
    return startDate.getDate()-endDate.getDate();
}

console.log(payment("09/30/2021","09/27/2021",50000));//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021","09/27/2021",3500000));//Tagihan bulan 8 belum tersedia
console.log(payment("09/27/2021","09/27/2021",3500000));
/**
 --------------------------
    	Tanggal Bayar : 27/9/2021
    	Jatuh Tempo :  27/9/2021
    	--------------------------
    	Tagihan bulan 9,2021 = Rp.3500000 
    	Denda = Rp.0 (terlambat 0 hari)
    	Total = Rp.3500000 (lunas)
    	--------------------------
    	Kwitansi ini sebagai alat bukti pembayaran
 */