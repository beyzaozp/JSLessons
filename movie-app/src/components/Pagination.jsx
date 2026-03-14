export default function Pagination({
  currentPage,
  totalPages,
  onCurrentPage,
  onPreviousPage,
}) {
  return (
    <nav>
      <ul className="pagination d-flex justify-content-between">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <a className="page-link" href="#" onClick={onPreviousPage}>
            Geri
          </a>
        </li>
        <p>
          {currentPage}/{totalPages}
        </p>
        <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
          <a className="page-link" href="#" onClick={onCurrentPage}>
            İleri
          </a>
        </li>
      </ul>
    </nav>
  );
}
