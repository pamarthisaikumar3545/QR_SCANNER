function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    const scanResults = document.getElementById("scan-results");

    // On QR Code Scanned
    function onScanSuccess(decodedText, decodedResult) {
        alert(`QR Code Scanned: ${decodedText}`);
        const listItem = document.createElement("li");
        listItem.textContent = decodedText;
        scanResults.prepend(listItem);
    }

    const html5QrCode = new Html5QrcodeScanner("my-qr-reader", {
        fps: 10,
        qrbox: 250
    });
    html5QrCode.render(onScanSuccess);
});
