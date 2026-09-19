'use client';

import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 bg-slate-900/60 p-8 rounded-2xl border border-rose-500/20 shadow-xl backdrop-blur-sm">
          <div className="inline-flex p-4 rounded-full bg-rose-500/10 text-rose-400 mb-2">
            <AlertTriangle className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-rose-400">حدث خطأ ما</h1>
          <p className="text-sm text-slate-400">
            حدث خطأ غير متوقع أثناء تحميل الصفحة. يرجى المحاولة مرة أخرى.
          </p>
          <div>
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة المحاولة
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
