//<![CDATA[ 

function detectMob() {
   const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i ];
    
   return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
   });
}

function callApi() {
   return new Promise(function (resolve) {
      setTimeout(function () {
         resolve();
      }, 100);
   });
}

// menyusun kembali kode menjadi directLink
// output [0] : id
//		  [1] : directLink
//  	  [2] : deskripsi
function metaLink(e) {
	// deteksi tipe get.Element
	const y = [];
	let x, z;

	const q = e.charCodeAt(0);
	if ((e.length < 2) && (q >= 48 & q <= 57)) {
	   e -= 1; // meyesuaikan start [0]
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

// input : idNomerUrut
// next : hrs ada konversi id ke nomor urut tag name  
function qiv(e) {
  let g = new Image();
  
  // disesuaikan cloud 
  const z = metaDropbox(e);
  g.src = z[1]; 
  
  const q = pGambar + e + '. ' + z[2],
        y = iView(g.src, q, 'qivGy');

  document.getElementById('x'+ e).innerHTML = y; 
}

//]]>
