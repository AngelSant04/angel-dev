document.getElementById("descargarCV").addEventListener("click", function() {
    var pdfPath = "documentos/CURRICULUM-2024.pdf";
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = "CURRICULUM-2024.pdf";
    link.click();
});