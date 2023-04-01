//pdfjs-dist
//Google Docs Viewer ou PDF.js
//https://cdnjs.com/libraries/pdf.js
/*

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js"></script>


<script>
		// Récupération du conteneur
		const container = document.getElementById('pdfContainer');

		// Chargement du PDF
		pdfjsLib.getDocument('https://www.example.com/mon-pdf.pdf').then(pdf => {
			// Chargement de la première page
			pdf.getPage(1).then(page => {
				const scale = 1.5;
				const viewport = page.getViewport({ scale: scale });

				// Création du canvas
				const canvas = document.createElement('canvas');
				container.appendChild(canvas);
				canvas.width = viewport.width;
				canvas.height = viewport.height;

				// Affichage de la page
				page.render({
					canvasContext: canvas.getContext('2d'),
					viewport: viewport
				});
			});
		});
	</script>

    */