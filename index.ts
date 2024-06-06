let i = 0
function getNextId() {
  return i++
}

function getCurrentDate() {
  return new Date()
}

function create(gni: typeof getNextId, gcd: typeof getCurrentDate) { // 
  const nextId = gni()
  const createdDate = gcd()
  // ....
}

function run() {
  create(getNextId, getCurrentDate)
}