// format standard menampilkan gambar 
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

// input : idNomerUrut
// next : hrs ada konversi id ke nomor urut tag name  
function qip(inpKode) {
  let g = new Image();
  let z = [];
  
  // disesuaikan cloud 
  z = dbMulih(inpKode);
  g.src = z[0]; 
  
  const q = 'Gambar ' + inpKode + '. ' + z[1];
  let gUrl = iView(g.src, 'qipGy', q);

  document.getElementById('x' + inpKode).innerHTML = gUrl; 
}
