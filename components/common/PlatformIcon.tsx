import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa6';
import { SiIndeed } from 'react-icons/si';

export type PlatformType =
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'x'
  | 'indeed'
  | 'whatsapp'
  | 'github'
  | 'email'
  | 'phone';

interface PlatformIconProps {
  platform: PlatformType | string;
  className?: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, className = 'w-5 h-5' }) => {
  const normalized = platform.toLowerCase().trim();

  switch (normalized) {
    case 'linkedin':
      return <FaLinkedin className={className} aria-hidden="true" />;

    case 'instagram':
      return <FaInstagram className={className} aria-hidden="true" />;

    case 'facebook':
      return <FaFacebook className={className} aria-hidden="true" />;

    case 'twitter':
    case 'x':
      return <FaXTwitter className={className} aria-hidden="true" />;

    case 'indeed':
    case 'indeed careers':
      return <SiIndeed className={className} aria-hidden="true" />;

    case 'whatsapp':
      return <FaWhatsapp className={className} aria-hidden="true" />;

    case 'github':
      return <FaGithub className={className} aria-hidden="true" />;

    case 'email':
    case 'mail':
      return <FaEnvelope className={className} aria-hidden="true" />;

    case 'phone':
    case 'call':
      return <FaPhone className={className} aria-hidden="true" />;

    default:
      return null;
  }
};
