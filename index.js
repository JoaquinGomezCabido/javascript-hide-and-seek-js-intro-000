var getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

var nestedTarget = () => {
  document.getElementById('nested').querySelector('target')

  return document.querySelector('#nested .target')
}

var increaseRankBy = (n) => {
  var elements = document.querySelectorAll('.rankedl-list')

  for(let i = 0; i < elements.length; i++) {
    elements[i] = parseInt(elements[i], 10) + n
  }

  return
}

var deepestChild = () => {
  var mainNode = document.querySelectorAll('div').getElementById('grand-node')
  var nextNode = mainNode.children[0]

  while(nextNode) {
    mainNode = nextNode
    nextNode = mainNode.children[0]
  }

  return mainNode
}
