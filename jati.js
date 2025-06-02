//<![CDATA[ 

// cek mobile device
function detectMob() {
   const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i ];
    
   return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
   });
}

// test gambar bisa ditampilkan
function callApi() {
   return new Promise(function (resolve) {
      setTimeout(function () {
         resolve();
      }, 100);
   });
}

async function copyToCb(idEnt) {
  let teks = document.getElementById(idEnt).innerHTML;
	
  // ganti semua karakter kode h.tml
  teks = teks.replace(/&lt;/g, "<");  
  teks = teks.replace(/&gt;/g, ">");
  teks = teks.replace(/&apos;/g, "\'");
  teks = teks.replace(/&quot;/g, "\"");
  teks = teks.replace(/&nbsp;/g, " ");
  
  await navigator.clipboard.writeText(teks);
}

// menambahkan spasi pada element
function spDeui(jml){
	let sp = '';
	for (let i = 0; i < jml; i++) {
		sp += '&nbsp;';
	}
	return sp;	
}

// deteksi ch sebagai bilangan Arabic
function chBil(ch){
	const z = 48,  // kode 0
		   s = 57,  // kode 9
			c = ch.charCodeAt(0);
			
	let y = false;
		 
	if (c >= z & c <= s) y = true;	
	return y;
}

// deteksi ch sebagai bilangan Romawi
function chRomawi(text){
	const r = 'ivxlcdmIVXLCDM',
         p = text.length;
	let y = false;

	for (let i=0; i<p; i++) {
		if( r.includes(text[i]) ) {
			y = true;
			break;
		}	
	}

	return y;
}

function idSapasi(e) {
	const p = e.length,
	      m = 12,  // jml maksimal kode buku
			h = 9,   // jml space untuk nomor halaman
			t = 4,   // jml huruf sebuah tahun
			n = 4;   // jml maks penomoran halaman
			 
	let sp = '',
		 y  = '';  // dummy
	// jika sebuah sitasi
	if (p > m) {
		if ( chBil(e.at(p-1))) {
			// hanya mengambil sebagian nama
			y = e.substr(0, m-t); 
			sp = y + e.substr(p-t, t) + '\"';	
		}
	}	else {
		y = m;
		// halaman romawi tetap ditulis angka   
		if ( chBil(e.at(0)) || chRomawi(e.at(0)) ) y = h;
		if ( p == 1) {
			e += 'Q';
			y -= 1;
		}
		sp = e + '\"' + spDeui(y-p);
	}
	sp += '>';
	
	return sp;
}

// membaca element directLink
// o [0] : id
//	  [1] : directLink
//   [2] : deskripsi
function metaLink(e) {
	// deteksi tipe get.Element
	const y = [];
	let x, z;

	if ((e.length < 2) && chBil(e.at(0))) {
	   // e -= 1; // meyesuaikan start [0]
	   z = document.getElementsByTagName("rp")[e].innerHTML;
	   x = document.getElementsByTagName("rp")[e].id;
	} else {
	   z  = document.getElementById(e).innerHTML;
	   x  = document.getElementById(e).id;
	}
	const c = z.split('/');
	y[0] = x;
	y[1] = c[0];
	y[2] = c[1];
	
	return y;
}


//]]>