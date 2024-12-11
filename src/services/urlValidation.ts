import { ALLOWED_PROTOCOLS, MIN_URL_LENGTH, MAX_URL_LENGTH } from '../constants/security';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateUrl(url: string): ValidationResult {
  if (!url || url.length < MIN_URL_LENGTH) {
    return { isValid: false, error: 'Please enter a URL' };
  }

  if (url.length > MAX_URL_LENGTH) {
    return { isValid: false, error: 'URL is too long' };
  }

  try {
    const urlObj = new URL(url);
    if (!ALLOWED_PROTOCOLS.includes(urlObj.protocol as any)) {
      return { isValid: false, error: 'Only HTTP and HTTPS URLs are allowed' };
    }
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Please enter a valid URL' };
  }
}