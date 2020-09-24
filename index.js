function theBeatlesPlay(musicians, instruments) {
  var i = []
  for (let n = 0; n < musicians.length; n++) {
    i.push(`${musicians[n]} plays ${instruments[n]}.`);
    }
  return i
}
