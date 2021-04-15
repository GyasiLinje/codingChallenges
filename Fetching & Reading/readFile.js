function readData(file_name) {
    var reader = new FileReader();

    reader.onload = function() {

        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++) {
            console.log(lines[line])
        }

    }
    reader.readAsText(file_name)

}