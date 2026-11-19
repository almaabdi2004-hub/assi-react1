import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="display-1 fw-bold text-warning">404</h1>
      <h2 className="mb-3">عذراً، الصفحة غير موجودة</h2>
      <p className="text-muted mb-4">الرابط الذي تحاول الوصول إليه غير صحيح أو تم نقله.</p>
      <Link to="/" className="btn btn-dark px-4 py-2">
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}