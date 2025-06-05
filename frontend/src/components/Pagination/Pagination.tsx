import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ArrowButton, PageNumber, PaginationContainer } from "./styles";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          isActive={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageNumber>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <ArrowButton onClick={handlePrevious} disabled={currentPage === 1}>
        <AiOutlineLeft />
      </ArrowButton>
      {renderPageNumbers()}
      <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
        <AiOutlineRight />
      </ArrowButton>
    </PaginationContainer>
  );
};
