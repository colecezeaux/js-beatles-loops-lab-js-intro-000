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
  while (facts.length > i) {
    n.push(`${facts[i]}!!!`)
        i+=1
  }
  return n
}

function iLoveTheBeatles(i) {
  var i = []
  var n = 0
  do {
  i.push("I love the Beatles!")
      n++
  }
  while (n < 15);
  return i
}
