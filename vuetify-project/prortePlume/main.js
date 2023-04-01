
//Google Docs Viewer ou PDF.js
//https://cdnjs.com/libraries/pdf.js






		// Récupération du conteneur
		const container = document.getElementById('pdfContainer');

		// Chargement du PDF
		pdfjsLib.getDocument('https://drive.google.com/file/d/1--fs0w6U0c5vqFjf8rF9UGX_Fa9KlXFw/view?usp=share_link').then(pdf => {
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
	