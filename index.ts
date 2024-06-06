function makeGetNextId(seed: number, algo: (n: number) => number) {
  let current = seed
  return function getNextId() {
    current = algo(current)
    return current
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
  const algo = (n: number) => n + 1
  const gni = makeGetNextId(0, algo)
  const gcd = makeGetCurrentDate(new Date())

  create(gni, gcd)
  anotherCreate(gni)
  anotherUseDate(gcd)
}

function testAnotherCreate() {
  const algo = (n: number) => n + 1
  const gni = makeGetNextId(0, algo)

  anotherCreate(gni)
}