// menyisipkan spasi
function spRepeat(jml){
	let sp = '';
	for (let i = 0; i < jml; i++) {
		sp += '&nbsp;';
	}
	return sp;	
}

// nomenklatur iD supaya rapi
function idSapasi(inpId) {
	const pj = inpId.length;
	const idMax = 14,
		codeNol = 48,
		codeSembilan = 57;
			
	let sp = '';
	if (pj <= idMax) sp = inpId + '\"' + spRepeat(idMax-pj);
		
	// jika sebuah sitasi
	if (pj > idMax) {
		const chEnd = inpId.charCodeAt(pj-1);
		if (chEnd >= codeNol & chEnd <= codeSembilan) {
			const namaPenggal = inpId.substr(0, idMax-4);
			sp = namaPenggal + inpId.substr(pj-4, 4) + '\"';	
		}
	}	
	sp += '>';
	return sp;
}

// menyusun kembali kode menjadi directLink
// input : idName atau idNomerUrut
// output [0] : id
//		  [1] : directLink
//        [2] : deskripsi
function linkMulih(inpKode) {
	// deteksi tipe get.Element
	let q = [];
	let x, z;
	
	const y = inpKode.charCodeAt(0);
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
	
	return q;
}
