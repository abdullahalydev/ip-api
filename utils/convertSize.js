function convertSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', "PB", "EB", "ZB", "YB"];
    if (bytes == 0) return "0 MB";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};
module.exports = convertSize