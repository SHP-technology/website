'use client';

import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi';

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
    <div className="fixed bottom-6 left-6 z-50 max-w-md w-full p-4 rounded-2xl bg-surface-card text-primaryText border border-surface-border shadow-2xl  animate-fade-in-up flex items-start gap-3">
      <div className="mt-0.5 shrink-0">
        {isSuccess ? (
          <FiCheckCircle className="w-5 h-5 text-brand-primary" />
        ) : (
          <FiAlertCircle className="w-5 h-5 text-rose-400" />
        )}
      </div>
      <div className="flex-1 pr-2">
        <h4 className="text-sm font-bold text-primaryText">{title}</h4>
        <p className="text-xs text-secondaryText mt-0.5 leading-relaxed">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-mutedText hover:text-primaryText hover:bg-surface-subtle transition-colors"
        aria-label="Close notification"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
  );
};
