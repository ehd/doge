var niceArray = [
  'such %s',
  'wow',
  'so %s',
  'bes %s',
  'much %s',
  'plz %s',
  'nice %s'
];
module.exports = function (suchInput) {
  var soRandom = parseInt(Math.random()*niceArray.length);
  return niceArray[soRandom].replace(/%s/g, suchInput);
};
