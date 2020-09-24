function theBeatlesPlay(array) {
  var i = []
  for (let n = 0; n < array.length; n++) {
    i.push(`${musicians[n]} plays ${instruments[n]}.`);
    }
  return i
}
