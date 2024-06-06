function makeGetNextId(seed: number) {
  let _seed = seed
  return function getNextId() {
    return _seed++
  }
}

function makeGetCurrentDate(date: Date) {
  return function getCurrentDate() {
    return date
  }
}



function create(gni: ReturnType<typeof makeGetNextId>, gcd: ReturnType<typeof makeGetCurrentDate>) { // 
  const nextId = gni()
  const createdDate = gcd()
  // ....
}

function run() {
  create(makeGetNextId(0), makeGetCurrentDate(new Date()))
}