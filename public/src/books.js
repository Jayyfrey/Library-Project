// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id)
  return result
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  //return array with 2 arrays
  //first array is loaned out books, second array is returned only
  let firstArray = []
  let secondArray = []
  books.forEach((book) => {
    if (book.borrows.find((item) => item.returned === false)) {
      firstArray.push(book)
    } else {
      secondArray.push(book);
    }
  })
  result = [firstArray, secondArray];
  return result
}

function getBorrowersForBook(book, accounts) {
  //book object and array of all accounts
  //  place account object into new array, then add the borrows key
  let borrowHistory = book.borrows.map((borrow) => { 
    let accountInfo = findAuthorById(accounts, borrow.id)
    accountInfo.returned = borrow.returned
  return accountInfo
  }).slice(0, 10)
return borrowHistory
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
