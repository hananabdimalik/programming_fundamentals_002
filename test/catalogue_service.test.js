const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
  describe("catalogueService", () => {
    describe("catalogueService.checkBook", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });
    test("return true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("return the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
    test("return 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });
  describe("catalogueService.countBooksByKeyword", () => {
    test("return the number of books with given keyword", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("return the list of books by given author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens"
      ]);
    });
  });
});