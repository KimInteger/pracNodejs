const template = function makeHTML(title, content){
const html = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    <div>${content}</div>
  </body>
</html>
`;
return html;
};

module.exports = template;