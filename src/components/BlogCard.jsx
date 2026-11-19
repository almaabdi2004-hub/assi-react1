import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';

export default function BlogCard({ post, viewMode }) {
  if (viewMode === 'list') {
    return (
      <div className="card mb-3 shadow-sm border-0 overflow-hidden">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid w-100"
              style={{ height: '220px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex gap-3 text-muted small mb-2">
                <span className="badge bg-warning text-dark d-flex align-items-center gap-1">
                  <Tag size={14} /> {post.category}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
              </div>
              <h5 className="card-title fw-bold">{post.title}</h5>
              <p className="card-text text-muted">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="btn btn-outline-dark btn-sm d-inline-flex align-items-center gap-1">
                اقرأ المزيد <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={post.image}
          className="card-img-top"
          alt={post.title}
          style={{ height: '210px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-warning text-dark">{post.category}</span>
            <small className="text-muted">{post.date}</small>
          </div>
          <h5 className="card-title fw-bold">{post.title}</h5>
          <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
          <Link to={`/blog/${post.id}`} className="btn btn-dark w-100 mt-3">
            قراءة المقال
          </Link>
        </div>
      </div>
    </div>
  );
}