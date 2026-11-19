import React, { useState } from 'react';
import postsData from '../data/posts.json';
import BlogCard from '../components/BlogCard';
import { LayoutGrid, List, Search } from 'lucide-react';

export default function Blog() {
  var allPosts = Array.isArray(postsData) ? postsData : (postsData.posts || []);
  var [searchQuery, setSearchQuery] = useState('');
  var [selectedCategory, setSelectedCategory] = useState('All');
  var [viewMode, setViewMode] = useState('grid');
  var [currentPage, setCurrentPage] = useState(1);
  var postsPerPage = 6;

  var categories = ['All', ...new Set(allPosts.map(function (item) {
    return item.category;
  }))];

  var filteredPosts = allPosts.filter(function (post) {
    var matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    var matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  var totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">مدونة عدسة</h1>
        <p className="text-muted">ابحث وتصفح أحدث المقالات في فنون التصوير</p>
      </div>

      <div className="row g-3 align-items-center bg-light p-3 rounded mb-4 shadow-sm">
        <div className="col-md-5">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <Search size={18} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="ابحث عن تدوينة..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map(function (cat, idx) {
              return (
                <option key={idx} value={cat}>
                  {cat === 'All' ? 'جميع التصنيفات' : cat}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-3 d-flex justify-content-md-end gap-2">
          <button
            className={`btn ${viewMode === 'grid' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={function () { setViewMode('grid'); }}
            title="عرض شبكي"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            className={`btn ${viewMode === 'list' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={function () { setViewMode('list'); }}
            title="عرض قائمة"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {currentPosts.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-muted">لا توجد تدوينات تطابق بحثك حالياً.</h4>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'row' : 'd-flex flex-column'}>
          {currentPosts.map(function (post) {
            return <BlogCard key={post.id} post={post} viewMode={viewMode} />;
          })}
        </div>
      )}

      {totalPages > 1 && (
        <nav className="mt-4 d-flex justify-content-center">
          <ul className="pagination">
            {Array.from({ length: totalPages }, function (_, index) {
              var pageNumber = index + 1;
              return (
                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                  <button
                    className="page-link"
                    onClick={function () { setCurrentPage(pageNumber); }}
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}