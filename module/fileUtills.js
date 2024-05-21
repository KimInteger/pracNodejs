const fileUtills = {
  getFilePath : function(url){
    let filePath = "";
    if(url === '/') {
      filePath = './public/index.html';
    } else {
      filePath = './public' + url;
    }
    return filePath;
  },

  getExtention : function(filePath){
    const path = require('path');
    let ext = path.extname(filePath);
    return ext.toLowerCase();
  },

  getContentType : function(ext){
    const mimeType = {
      ".html" : "text/html; charset=UTF-8",
      ".css" : "text/css",
      ".js" : "application/js",
      ".json" : "application/json",
      ".ico" : "img/x-icon"
    }

    if(mimeType.hasOwnProperty(ext)){
      return mimeType[ext];
    } else {
      return "text/plain; charset=UTF-8";
    }
  }
};

module.exports = fileUtills;