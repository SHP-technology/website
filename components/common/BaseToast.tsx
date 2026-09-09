'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastProps {
  show: boolean;
  title: string;
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
  autoCloseDuration?: number;
}

export const BaseToast: React.FC<ToastProps> = ({
  show,
  title,
  message,
  type = 'success',
  onClose,
  autoCloseDuration = 5000
}) => {
  useEffect(() => {
    if (show && autoCloseDuration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [show, autoCloseDuration, onClose]);

  if (!show) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md w-full p-4 rounded-2xl bg-slate-900/95 text-white border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-fade-in-up flex items-start gap-3">
      <div className="mt-0.5 shrink-0">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-400" />
        )}
      </div>
      <div className="flex-1 pr-2">
        <h4 className="text-sm font-bold text-white">{title}</h4>
        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
