window.onload = function () {
    var textArea = document.getElementById("text_area");

    var submitButton = document.getElementById("submit_button");
    submitButton.addEventListener("click", function (event) {
        textArea.value = JSVersion.formatText_5wte96$(textArea.value.toString(),
            new JSVersion.FicbookLineFormatAlgorithm());
    });

    var copyButton = document.getElementById("copy_button");
    copyButton.addEventListener("click", function (event) {
        textArea.select();
        document.execCommand('copy');
    });

    var clearButton = document.getElementById("clear_button");
    clearButton.addEventListener("click", function (event) {
        textArea.value = "";
    });

};
