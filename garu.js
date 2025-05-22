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
