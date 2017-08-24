import BaseTransformer from './BaseTransformer';

class PaginationTransformer extends BaseTransformer {
  static fetch(pagination) {
    return {
      totalCount: pagination.total_count,
      totalPages: pagination.total_pages,
      currentPage: pagination.current_page,
      limit: pagination.limit,
    };
  }

  static send(pagination) {
    return {
      total_count: pagination.totalCount,
      total_pages: pagination.totalPages,
      current_page: pagination.currentPage,
      limit: pagination.limit,
    };
  }
}

export default PaginationTransformer;
