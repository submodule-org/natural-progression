let i = 0
function getNextId() {
  return i++
}

function create() { // 
  const nextId = getNextId()
  const createdDate = new Date()
  // ....
}