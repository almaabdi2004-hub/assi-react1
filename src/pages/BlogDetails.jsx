import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/posts.json';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export default function BlogDetails() {
  var { id } = useParams();
  var post = postsData.find(function (item) {
    return String(item.id) === String(id);
  });

  if (!post) {
    return (
      <div className="container text-center my-5 py-5">
        <h2>التدوينة غير موجودة!</h2>
        <Link to="/blog" className="btn btn-dark mt-3">العودة للمدونة</Link>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: '850px' }}>
      <Link to="/blog" className="btn btn-outline-secondary mb-4 d-inline-flex align-items-center gap-2">
        <ArrowRight size={18} /> العودة إلى المدونة
      </Link>

      <article className="bg-white p-4 p-md-5 rounded shadow-sm">
        <span className="badge bg-warning text-dark mb-3 fs-6">
          <Tag size={15} className="ms-1" /> {post.category}
        </span>
        <h1 className="fw-bold mb-3">{post.title}</h1>

        <div className="d-flex gap-4 text-muted mb-4 border-bottom pb-3">
          {post.author && (
            <span className="d-flex align-items-center gap-1">
              <User size={16} /> {post.author}
            </span>
          )}
          <span className="d-flex align-items-center gap-1">
            <Calendar size={16} /> {post.date}
          </span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="img-fluid rounded w-100 mb-4"
          style={{ maxHeight: '450px', objectFit: 'cover' }}
        />

        <div className="fs-5 lh-lg text-dark">
          <p>{post.content || post.excerpt}</p>
        </div>
      </article>
    </div>
  );
}