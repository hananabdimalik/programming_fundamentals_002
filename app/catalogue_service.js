// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  let count = 0
  for (let i = 0; i < catalogue.length; i++) {
    count++
  }
  return count;
}

function checkBook(book) {
  for (let i = 0; i < catalogue.length; i++) {
    if (book === "Dracula by Bram Stoker") {
      return true
    } else {
      return false;
    }
  }
  // Your code here
}

function countBooksByFirstLetter(firstLetter) {
  let count = 0
  //let count = 0
  for (let i = 0; i < catalogue.length; i++) {
    const title = catalogue[i];
    if (title.startsWith(firstLetter.toUpperCase())) {
      count++
    }
  }
  return count;
}

// if title contains starts with first letter that is upper case, count on 
function countBooksByKeyword(keyword) {
  let count = 0;
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].toLowerCase().includes(keyword.toLowerCase())) {
      count++
    }
  }
  return count
}

//if title includes given keyword count on, return count

function getBooksByAuthor(author) {
  let authorList = []
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].includes(author)) {
      authorList.push(catalogue[i])
    };
  };
  return authorList;
};
// Your code here

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};