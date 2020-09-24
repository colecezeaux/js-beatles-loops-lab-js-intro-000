function theBeatlesPlay(musicians, instruments) {
  var i = []
  for (let n = 0; n < musicians.length; n++) {
    i.push(`${musicians[n]} plays ${instruments[n]}`);
    }
  return i
}

function johnLennonFacts(facts) {
  var i = 0
  var n = []
  while (facts > i) {
    n.push(`${facts[i]}!!!`)
        i+=1
  }
  return n
}
