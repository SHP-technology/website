'use client';

import { useState } from 'react';

export interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
}

export function useFormValidation<T extends Record<string, any>>(initialValues: T, rules: Record<keyof T, ValidationRules>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validateField = (name: keyof T, val: any): string => {
    const rule = rules[name];
    if (!rule) return '';

    if (rule.required && (!val || String(val).trim() === '')) {
      return 'This field is required';
    }

    if (rule.email && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(String(val))) {
        return 'Please enter a valid email address';
      }
    }

    if (rule.phone && val) {
      const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
      if (!phoneRegex.test(String(val)) || String(val).replace(/\D/g, '').length < 7) {
        return 'Please enter a valid phone number';
      }
    }

    if (rule.minLength && val && String(val).length < rule.minLength) {
      return `Must be at least ${rule.minLength} characters`;
    }

    return '';
  };

  const handleChange = (name: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (name: keyof T) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    for (const key in rules) {
      const errorMsg = validateField(key, values[key]);
      if (errorMsg) {
        newErrors[key] = errorMsg;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setValues
  };
}
