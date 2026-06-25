export const colors = {
  bg: {
    primary: '#0D0D0B',
    surface: '#171715',
    elevated: '#20201C',
    overlay: 'rgba(13, 13, 11, 0.85)',
  },
  accent: {
    DEFAULT: '#C8A26A',
    hover: '#D8B483',
    muted: 'rgba(200, 162, 106, 0.12)',
    glow: 'rgba(200, 162, 106, 0.3)',
  },
  success: '#7FA88A',
  danger: '#C77C7C',
  warning: '#D4A574',
  text: {
    primary: '#F5F2EB',
    secondary: '#A8A39A',
    muted: '#6D675E',
    inverse: '#0D0D0B',
  },
  border: {
    light: '#2a2a27',
    subtle: '#1e1e1b',
  },
  mood: {
    cozy: '#C8A26A',
    dark: '#8B7355',
    hopeful: '#7FA88A',
    philosophical: '#8B8BC8',
    fantasy: '#A88BC8',
    historical: '#C8A88B',
    romance: '#C88B8B',
    classic: '#8BA8C8',
    thriller: '#C8A88B',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  sizes: {
    hero: '3rem',
    h1: '2.25rem',
    h2: '1.75rem',
    h3: '1.25rem',
    body: '1rem',
    small: '0.875rem',
    caption: '0.75rem',
  },
  lineHeight: {
    tight: '1.1',
    normal: '1.4',
    relaxed: '1.6',
  },
  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const radii = {
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  '2xl': '28px',
  full: '9999px',
} as const;

export const shadows = {
  card: '0 8px 32px rgba(0, 0, 0, 0.3)',
  cardHover: '0 16px 48px rgba(0, 0, 0, 0.4)',
  elevated: '0 4px 24px rgba(0, 0, 0, 0.2)',
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const glass = {
  background: 'rgba(23, 23, 21, 0.75)',
  backdrop: 'blur(20px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
} as const;
