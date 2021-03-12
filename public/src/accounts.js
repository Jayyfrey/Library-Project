// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  // map => sort => push(find account)
  let lastNames = accounts.map((account) => account.name.last)
  lastNames.sort()
  let sortedAccounts = []
  for (let i = 0; i < lastNames.length; i++) {
    sortedAccounts.push(accounts.find((account) => account.name.last === lastNames[i]))
  }
  return sortedAccounts
}

function getTotalNumberOfBorrows(account, books) {
  // filter through all books any book with account.id
  // find the length of new array
  let idArray = []
  books.forEach((book) => { book.borrows.forEach((borrow) => idArray.push(borrow.id)) })
  let total = idArray.filter((theId) => theId === account.id)
  let result = total.length
  return result  
}

function getBooksPossessedByAccount(account, books, authors) {
  // account object, array of book objects, array of author objects
  // return array of books and authors that represent all books currently 
  // checked out by given account
  // use (...book, author) to add author object to book

  // go through each book
let result = [];
    books.forEach((book) => {
      if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
        result.push(book);
      }
    })
    result.forEach((book) => {
      let anAuthor = authors.find((person) => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    return result
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
