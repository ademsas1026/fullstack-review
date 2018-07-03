/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const { db, Book, Sauce } = require('../server/db')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const books = await Promise.all([
    Book.create({title: 'Kindred', author: 'Octavia Butler', bookJacket: './assets/Kindred.gif'}),
    Book.create({title: '1984', author: 'George Orwell', bookJacket: './assets/1984.gif'}), 
    Book.create({title: 'Americanah', author: 'Chimamanda Ngozi Adichie', bookJacket: './assets/adichie.gif'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${books.length} books`)
  console.log(`seeded successfully`)

  const sauces = await Promise.all([
    Sauce.create({name: 'Tabasco', image: './assets/Tabasco.gif'}),
    Sauce.create({name: 'Franks', image: './assets/Franks.gif'}), 
    Sauce.create({name: 'Sriracha', image: './assets/Sriracha.gif'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${sauces.length} sauces`)
  console.log(`seeded successfully`)

}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
