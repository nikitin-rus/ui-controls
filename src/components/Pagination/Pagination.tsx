import { Button } from "../Button";
import * as S from "./Pagination.styled";

export interface PaginationProps {
  pagesCount?: number;
  currentPage?: number;
  onNavigate?: (page: number) => void;
}

interface PagesInfo {
  isPlain: boolean;
  pages: number[];
}

function getPages(currentPage: number, pagesCount: number): PagesInfo {
  if (pagesCount <= 5) {
    const result = [];

    for (let i = 0; i < pagesCount; i++) {
      result.push(i + 1);
    }

    return {
      isPlain: true,
      pages: result,
    };
  }

  if (currentPage <= 3) {
    return {
      isPlain: false,
      pages: [1, 2, 3, 4, pagesCount],
    };
  }

  if (currentPage >= pagesCount - 2) {
    return {
      isPlain: false,
      pages: [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount],
    };
  }

  return {
    isPlain: false,
    pages: [1, currentPage - 1, currentPage, currentPage + 1, pagesCount],
  };
}

export function Pagination({
  pagesCount = 0,
  currentPage = -1,
  onNavigate = () => {},
}: PaginationProps) {
  const { isPlain, pages } = getPages(currentPage, pagesCount);

  const pageButtons = [];

  for (let i = 0; i < pages.length; i++) {
    const isCurrent = currentPage === pages[i];

    pageButtons.push(
      <Button
        key={i}
        variant={isCurrent ? "primary" : "secondary"}
        onClick={() => onNavigate(pages[i])}
        size="small"
      >
        {pages[i]}
      </Button>
    );
  }

  return (
    <S.PaginationContainer>
      <Button
        size="small"
        onClick={() => onNavigate(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Prev
      </Button>

      {isPlain ? (
        <S.PaginationPages>{pageButtons}</S.PaginationPages>
      ) : (
        <S.PaginationPagesContainer>
          {pageButtons[0]}

          {currentPage > 3 && <S.PaginationEllipsis>...</S.PaginationEllipsis>}

          <S.PaginationPages>
            {pageButtons.slice(1, pageButtons.length - 1)}
          </S.PaginationPages>

          {pagesCount - currentPage > 2 && (
            <S.PaginationEllipsis>...</S.PaginationEllipsis>
          )}

          {pageButtons[pageButtons.length - 1]}
        </S.PaginationPagesContainer>
      )}

      <Button
        size="small"
        onClick={() => onNavigate(currentPage + 1)}
        disabled={currentPage >= pagesCount}
      >
        Next
      </Button>
    </S.PaginationContainer>
  );
}
