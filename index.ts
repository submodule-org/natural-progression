import { combine, create, resolve, value } from "@submodule/core"

const seed = value(0)
const algo = value((n: number) => n + 1)

const getNextId = create(({ seed, algo}) => {
  let current = seed
  return () => {
    current = algo(current)
    return current
  }
}, combine({
  seed, algo
}))

const currentDate = create(() => new Date())

const getCurrentDate = create((date) => {
  return () => date
}, currentDate)

const make = create(({ getNextId, getCurrentDate }) => {
  const nextId = getNextId()
  const createdDate = getCurrentDate()
  // ....
}, combine({ getNextId, getCurrentDate }))

const anotherCreate = create(({ getNextId }) => {
  const nextId = getNextId()
  // ...
}, combine({ getNextId }))

const anotherUseDate = create(({ getCurrentDate }) => {
  const createdDate = getCurrentDate()
  // ...
}, combine({ getCurrentDate }))

async function run() {
  await resolve(make)
}

async function testAnotherCreate() {
  anotherCreate.patch(algo, value(n => n * 2))
  
  await resolve(anotherCreate)
}