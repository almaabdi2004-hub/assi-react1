import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="bg-dark text-white py-5 text-center min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <h1 className="display-4 fw-bold mb-3">اكتشف عالم التصوير الفوتوغرافي</h1>
        <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '650px' }}>
          مقالات متخصصة، دروس احترافية، ومراجعات لأحدث المعدات لمساعدتك على التقاط صور استثنائية.
        </p>
        <Link to="/blog" className="btn btn-warning btn-lg fw-bold px-4">
          تصفح جميع المقالات
        </Link>
      </div>
    </section>
  );
}