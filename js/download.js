document.getElementById("descargarCV").addEventListener("click", function() {
    var pdfPath = "docs/CV_ANGEL.pdf";
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = "CV_ANGEL.pdf";
    link.click();
});