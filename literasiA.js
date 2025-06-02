
function hapusTitikDiAkhirSitasi(e) {
	// keharusan input tanpa tanda . di akhir sitasi awal
	let y = e,
	    l = e.length-1;
	if(e.charCodeAt(l) == 46) y = e.substring(0, l);
	
	return y;
}

function getTahunTerbitDiSitasi(e){
	const a = '(', // tanda awal tahun
	      t = ')', // tanda akhir tahun
	      s = 1;   // akibat adanya spasi
	
	// deteksi tanda ( pertama 
	const b = e.indexOf(a), // posisi penanda awal tahun
	      f = e.indexOf(t); // posisi penanda akhir tahun
	
	return e.substr(b+s, f-b-s);
}

function getNamaPenulisDiSitasi(e){
   // i: link by id
	const a = '(',  // tanda awal tahun
	      b = e.indexOf(a)-1;   // indek awal tahun
   let   d = e.substr(0, b);   // simbol karakter dan
	const p = d.replaceAll(/&/g,'&amp;' + 'amp;'); // nama penulis
	
	return p;
}

function getNamaBaniDiSitasi(e) { // metaId
	const a = getNamaPenulisDiSitasi(e),
	      n = -1;	
	let b = a;  // bani marga author 
	
	const t = e.indexOf(','); // deteksi nama penulis tunggal
	if (t != n) b = a.substr(0, t);
	
	return b; 	  
}

function qKodeBukuStd(e){ // metaId 
  const m = 12,       // jumlah maksimal kode buku
  // cek char terakhir (angka atau huruf)
        j = e.length; // jumlah kode buku
  let   y = 4;        // jumlah kode tahun (bisa 5)
		  
  // 57 charCode angka 9 
  if (e.charCodeAt(j-1) > 57) y = 5;          // huruf terakhir
  const t = e.substr(j-y, y); // tahun terbit
  let a = e.substr(0, j-y),   // author
      k = e;                  // kode buku

	if (j > m) {
		a = e.substr(0, m-y);
		k = a + t;
	}

  return k;  
}

function getJudulDiSitasi(e) {

	const s = e.indexOf(')', 0) + 2, // titik mulai judul
	      f = e.lastIndexOf('.')+1,  // titik akhir judul
	      l = e.substring(s, f),     // judul yang lengkap
			k = '~',                   // tanda pemisah tema
	      b = '&lt;/button&gt;';
	
	let y = ['', '', ''],   // judul
	    p = [],	  // pecahan judul
	    j = 0;    // jumlah k

	const flag = l.includes(k);
	if (flag) {
		p = l.split(k);
		j = (l.match(/~/g)).length;
	}
	
	switch(j) {
		case 1: 
			y[1] = p[0] + b;
			y[2] = p[1];
			break;
		
		case 2: 
			y = p;
			y[1] += b;
			break;
			
		default :
			y[1] = l;
			y[2] = b;
	}

	return y;
}

// include ISBN
function getPenerbit(e) {
	const t = e.lastIndexOf(".")+1; // titik index Penerbit Awal
	let p = e.slice(t);
	p = p.replaceAll(/&/g,'&amp;' + 'amp;');
	
	return p;
}

function eBookPdf () {
   const m = arguments[0],      // bani
	      y = arguments[1],      // tahun terbit
			s = arguments[2],      // judul bagian awal
			u = arguments[3],      // judul utama/tema
			f = arguments[4],      // judul bagian akhir
			b = '&lt;/button&gt;'; // judul bagian akhir			
			
	let t = '', // judul
	    p = 0;  // letak titik
	
	if( (s == '') & (f == b) ) {
			t = hapusTitikDiAkhirSitasi(u);
	} else {
			p = u.indexOf(b, 0);
			t = u.substring(0, p);;
	}
	
	return m + ' (' + y + ') ' + t;
}

// merubah url asli dropBox menjadi format short kode
// https://www.dropbox.com/scl/fi/346qg04q4o2v1aa7c08zj/Nafaa.png?rlkey=j7yw8mfduo1my2606x8va0z3n&st=1iqdflrk&dl=0
//                                a                     b
// https://dl.dropboxusercontent.com/scl/fi/346qg04q4o2v1aa7c08zj/Nafaa.png?rlkey=j7yw8mfduo1my2606x8va0z3n&st=1iqdflrk&dl=0 --> 
//        titik point                       a                     b         c                               d           e -->
// input url asli non DL 
function dbSusunKode() {
	let urlInp = arguments[0];
	let desInp = ''; // hanya dummy
	
	const a=31, b=52;
	let   c = urlInp.indexOf("?rlkey"),
		   d = urlInp.indexOf('st=')-1, // simbol & diabaikan
		   e = urlInp.indexOf('dl=')-1;

	const folder = urlInp.substring(a, b),
	      file   = urlInp.substring(b+1, c-4), // tanpa ekstensi
	      rlKey  = urlInp.substring(c+7, d),
	      status = urlInp.substring(d+4, e);
		
	d = '|';
	const y = '&lt;rp id=\"' + idSapasi(file) +
	    folder + d + rlKey + d + status +
		 '/' + desInp +
		 '&lt;/rp&gt;';
	  
	return y;
}

function shortLink(){

	const y = '&lt;p&gt;' + arguments[0] + 
		 ' (' + arguments[1] + ') ' + 
		 '&lt;cite&gt;' + arguments[2] + 
		 '&lt;button onclick=&quot;iqra(&apos;' + arguments[3] + '&apos;)&quot;&gt;' + 
		 arguments[4] + arguments[5] + '&lt;/cite&gt;' + 
		 arguments[6] + '.&lt;/p&gt;';
		 
	return y;	 
}
