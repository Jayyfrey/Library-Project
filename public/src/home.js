// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  result = books.length
  return result
}

function getTotalAccountsCount(accounts) {
  result = accounts.length
  return result
}

function getBooksBorrowedCount(books) {
  checkedOut = books.filter((book)=> book.borrows.some((borrow) => borrow.returned === false))
  result = checkedOut.length
  return result
}

function getMostCommonGenres(books) {
  // map genre from all books
  //filter the different genres into separate arrays
  //count each array length
  let genresArr = []
  books.forEach((book) => {
    if (genresArr.some((gen) => gen.name === book.genre)) {
      for (let i = 0; i < genresArr.length; i++) {
        if (genresArr[i].name === book.genre) {
          genresArr[i].count += 1
        }
      }
    } else {
     let newObject = {}
      newObject.name = book.genre;
      newObject.count = 1;
    genresArr.push(newObject);
    }
  })
  genresArr.sort((a, b) => b.count - a.count)
  //console.log(genresArr);
  return genresArr.slice(0,5)
  
}

function getMostPopularBooks(books) {
  let result = books.map((book) => {
    let newObject = {}
    newObject.name = book.title;
    newObject.count = book.borrows.length
    return newObject
  })
result.sort((a, b) => b.count - a.count)

  return result.slice(0, 5)
  //console.log(result)
}

function getMostPopularAuthors(books, authors) {
  // recieves array of books and array of authors
  // returns array with objects, 2 keys, 
  //name :author last name
  //count : number if times author is borrowed (book.borrows book.authorId)
  // author.id and author.name.last
  // array.length = 5
    books.forEach((book) => {
      let number = book.borrows.length
      let theAuth = authors.find((person) => person.id === book.authorId);
      let theName = `${theAuth.name.first} ${theAuth.name.last}`
      book['name'] = theName;
      book['count'] = number;
    })
    let newArr = books.map(({ name, count }) => ({name, count}))
    let finalArr = []
    newArr.forEach((item) => {
      if (finalArr.some((obj) => obj.name === item.name)) {
        for (let i = 0; i <finalArr.length; i++) {
          if (finalArr[i].name === item.name) {
            finalArr[i].count += item.count
          }
        }
      } else {
        let newObject = {}
        newObject.name = item.name;
        newObject.count = item.count;
      finalArr.push(newObject);
      }
    })
    finalArr.sort((a, b) => b.count - a.count)
    return finalArr.slice(0,5)
    //console.log(books)
    //console.log(finalArr)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
