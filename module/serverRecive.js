// ! 나중에 주말에 한 번 만들어보자.



const serverSet = function serverSet(port){
  const http = require('http');

  const fs = require('fs');

  const path = require('path');

  const mimeType = {
    ".html" : "text/html; charset=UTF-8",
    ".css" : "text/css",
    ".js" : "application/js",
    ".json" : "application/json",
    ".ico" : "img/x-icon",
    ".png" : "img/png",
    ".jpg" : "img/jpg;",
    ".jpeg" : "img/jpeg",
    ".gif" : "img/gif",
  }

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
      let ext = path.extname(filePath);
      return ext.toLowerCase();
    },
  
    getContentType : function(ext){
      let contentType = '';
      if(mimeType.hasOwnProperty(ext)){
        contentType = mimeType[ext];
      }
      return contentType;
    }
  };

  
}


module.exports = serverSet;