function today(){
  let today = '';
  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate();
  today = year+"-"+month+"-"+day;
  return today;
}

module.exports = today;