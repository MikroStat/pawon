// javaScript yang berlaku untuk semua modul

// variabel global
var Q = [];

function asalQ() {
	return Q = [];
}
  
function spRepeat(jml){
	let sp = '';
	for (let i = 0; i < jml; i++) {
		sp += '&nbsp;';
	}
	return sp;	
}

// nomenklatur iD supaya rapi
function idDilengkapiSpasi(inpId) {
	const pj = inpId.length;
	const idMax = 14;
	let sp = '';

	if (pj <= idMax) sp = inpId + '\"' + spRepeat(idMax-pj);
		
	// jika sebuah sitasi
	if (pj > idMax) {
		const chEnd = inpId.charCodeAt(pj-1);
		if (chEnd >= 48 & chEnd <= 57) {
			const namaPenggal = inpId.substr(0, idMax-4);
			sp = namaPenggal + inpId.substr(pj-4, 4) + '\"';	
		}
	}	
	sp += '>';
	return sp;
}

// menyusun kembali kode menjadi directLink
// output [0] : id
//			 [1] : directLink
//        [2] : deskripsi
function linkEscape(inpKode) {
	// deteksi tipe get.Element
	let q = [];
	let x, z;
	const y;
	
	y = inpKode.charCodeAt(0);
	if (y >= 48 & y <= 57) {
		inpKode -= 1; // meyesuaikan start [0]
	   z = document.getElementsByTagName("rp")[inpKode].innerHTML;
	   x = document.getElementsByTagName("rp")[inpKode].id;		
	} else {
		z  = document.getElementById(inpKode).innerHTML;
		x  = document.getElementById(inpKode).id;	
	}
	let c = z.split('/');
	q[0] = x;
	q[1] = c[0];
	q[2] = c[1];
	
	// document.getElementById('tenjo').innerHTML = q;
	return q;
}

function iView() {
  let iUrl = '<figure>' + 
					'<img ' + 
					'src=\"' + arguments[0] + '\"' +
					'class=\"' + arguments[1] + '\"' +
					'alt=\"' + arguments[3] + '\"' +					
					'/>' +
					'<figcaption>' + arguments[2] + '</figcaption>' +
					'</figure>';
					
  return iUrl;
}
