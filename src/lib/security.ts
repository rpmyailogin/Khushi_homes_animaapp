import DOMPurify from 'dompurify';

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'hr',
      'b', 'strong', 'i', 'em', 'u', 's', 'strike',
      'ul', 'ol', 'li',
      'a', 'blockquote',
      'span', 'div',
      'img',
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'style', 'src', 'alt'],
    ALLOW_DATA_ATTR: false,
  });
}

export function sanitizeText(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim()) && email.trim().length <= 254;
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return true;
  const cleaned = phone.replace(/[\s\-().+]/g, '');
  return /^\d{7,15}$/.test(cleaned);
}

export function isValidName(name: string): boolean {
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
}

export function isValidMessage(message: string): boolean {
  const trimmed = message.trim();
  return trimmed.length >= 10 && trimmed.length <= 5000;
}

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const ALLOWED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'File size must be less than 5MB' };
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return { valid: false, error: 'Only JPEG, PNG, and WebP images are allowed' };
  }

  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  if (!ALLOWED_IMAGE_EXTENSIONS.includes(ext)) {
    return { valid: false, error: 'Invalid file extension. Allowed: .jpg, .jpeg, .png, .webp' };
  }

  return { valid: true };
}

export function sanitizeFileName(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() || 'jpg';
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${timestamp}-${random}.${ext.replace(/[^a-z0-9]/g, '')}`;
}

const rateLimitMap = new Map<string, number[]>();

export function checkRateLimit(key: string, maxAttempts: number, windowMs: number): boolean {
  const now = Date.now();
  const attempts = rateLimitMap.get(key) || [];
  const recent = attempts.filter(t => now - t < windowMs);
  rateLimitMap.set(key, recent);
  if (recent.length >= maxAttempts) {
    return false;
  }
  recent.push(now);
  rateLimitMap.set(key, recent);
  return true;
}
