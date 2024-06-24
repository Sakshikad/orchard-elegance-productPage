const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <nav className="my-4" aria-label="Pagination">
        <ul className="flex justify-center list-none p-0">
          <li className={`mx-1 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}>
            <button
              className={`block px-3 py-1 text-gray-500 bg-white border border-gray-300 rounded-full ${currentPage === 1 ? 'opacity-50' : 'hover:bg-gray-200'}`}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page} className="mx-1">
              <button
                className={`block px-3 py-1 ${currentPage === page ? 'text-white bg-organicGreen-300 border-organicGreen-200' : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-200'} rounded-full`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li className={`mx-1 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}>
            <button
              className={`block px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded-full ${currentPage === totalPages ? 'opacity-50' : 'hover:bg-gray-200'}`}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;