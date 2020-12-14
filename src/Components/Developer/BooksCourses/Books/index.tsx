import React, { memo } from "react";
import * as Styled from "./styled";

interface BookProps {
  title: string;
  author: string;
  logo: string;
}

interface BooksProps {
  books: BookProps[]
}

export const Books = memo(({ books }: BooksProps) => {
  return (
    <Styled.Container>
      {books.map((book: BookProps ) => (
        <Styled.Book key={book.title}>
          <Styled.Logo src={book.logo} />
          <Styled.Info>
            <Styled.Position>{book.title}</Styled.Position>
            <Styled.CompanyName>{book.author}</Styled.CompanyName>
          </Styled.Info>
        </Styled.Book>
      ))}
    </Styled.Container>
  );
});
