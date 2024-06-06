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

function anotherCreate(gni: ReturnType<typeof makeGetNextId>) { //
  const nextId = gni()
  // ...
}

function anotherUseDate(gcd: ReturnType<typeof makeGetCurrentDate>) { //
  const createdDate = gcd()
  // ...
}

function run() {
  const gni = makeGetNextId(0)
  const gcd = makeGetCurrentDate(new Date())

  create(gni, gcd)
  anotherCreate(gni)
  anotherUseDate(gcd)
}