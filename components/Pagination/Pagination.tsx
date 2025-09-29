import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (number: number) => void;
  total_pages: number;
}

const Pagination = ({
  currentPage,
  total_pages,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <>
      <ReactPaginate
        pageCount={total_pages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
      />
    </>
  );
};

export default Pagination;
