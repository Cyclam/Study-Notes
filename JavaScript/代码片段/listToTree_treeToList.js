export function listToTree (list) {
  var getTree = (routes, pid = 0) => {
    const result = []
    let temp
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].pid === pid) {
        const current = { ...routes[i] }
        temp = getTree(routes, routes[i].id)
        if (temp.length > 0) {
          current.children = temp
        }
        result.push(current)
      }
    }
    return result
  }
  return getTree(list)
}

export function treeToList (tree) {
  var queen = []
  var out = []
  queen = queen.concat(tree)
  while (queen.length) {
    var first = queen.shift()
    if (first.children) {
      queen = queen.concat(first.children)
      delete first['children']
    }
    out.push(first)
  }
  return out
}