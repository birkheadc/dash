import { Book } from "../../../../src/types/book/book";
import { Paginated } from "../../../../src/types/paginated/paginated";

const getPage = async (
  paginationToken?: string | undefined,
): Promise<Paginated<Book>> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  const startIndex = parseInt(paginationToken ?? "0");

  const books: Book[] = [];
  for (let i = 0; i < 10; i++) {
    const index = i + startIndex;
    const id = index.toString().padStart(4, "0");
    books.push({
      id: id,
      title: `Test Book ${id}`,
      author: `Test Author ${id}`,
      pages: index * 17,
    });
  }

  return {
    values: books,
    paginationToken: (startIndex + 10).toString(),
  };
};

export default getPage;
