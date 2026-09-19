'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-900/60 p-8 rounded-2xl border border-emerald-500/20 shadow-xl backdrop-blur-sm">
        <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
          <Compass className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold text-emerald-400">404</h1>
        <h2 className="text-xl font-semibold text-slate-200">الصفحة غير موجودة / Page Not Found</h2>
        <p className="text-sm text-slate-400">
          لم نتمكن من العثور على الصفحة المطلوبة. يمكنك العودة إلى الصفحة الرئيسية لمتابعة التعلم.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            العودة للرئيسية / Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
