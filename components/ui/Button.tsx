'use client';

import { T } from '@/lib/tokens';

interface ButtonProps {
  children:   React.ReactNode;
  onClick?:   () => void;
  href?:      string;
  type?:      'button' | 'submit' | 'reset';
  disabled?:  boolean;
  fullWidth?: boolean;
  className?: string;
}

/** Crimson filled button — primary CTA */
export function CrimsonBtn({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const style: React.CSSProperties = {
    display:         'inline-flex',
    alignItems:      'center',
    justifyContent:  'center',
    background:      T.crimson,
    border:          'none',
    color:           T.ivory,
    cursor:          disabled ? 'not-allowed' : 'pointer',
    padding:         '14px 32px',
    fontFamily:      `'EB Garamond', serif`,
    fontSize:        '11px',
    letterSpacing:   '2.5px',
    textTransform:   'uppercase',
    transition:      `all 400ms ${T.ease}`,
    opacity:         disabled ? 0.5 : 1,
    width:           fullWidth ? '100%' : 'auto',
    textDecoration:  'none',
  };

  const hoverStyle = { background: T.crimsonD, letterSpacing: '3.5px' };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!disabled) {
      Object.assign((e.currentTarget as HTMLElement).style, hoverStyle);
    }
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    (e.currentTarget as HTMLElement).style.background      = T.crimson;
    (e.currentTarget as HTMLElement).style.letterSpacing   = '2.5px';
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

/** Ghost button — transparent + crimson border */
export function GhostBtn({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const style: React.CSSProperties = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    background:     'transparent',
    border:         `1px solid ${T.borderD}`,
    color:          T.ink,
    cursor:         disabled ? 'not-allowed' : 'pointer',
    padding:        '13px 31px',
    fontFamily:     `'EB Garamond', serif`,
    fontSize:       '11px',
    letterSpacing:  '2.5px',
    textTransform:  'uppercase',
    transition:     `all 400ms ${T.ease}`,
    opacity:        disabled ? 0.5 : 1,
    width:          fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!disabled) {
      (e.currentTarget as HTMLElement).style.borderColor    = T.crimson;
      (e.currentTarget as HTMLElement).style.color          = T.crimson;
      (e.currentTarget as HTMLElement).style.letterSpacing  = '3.5px';
    }
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor   = T.borderD;
    (e.currentTarget as HTMLElement).style.color         = T.ink;
    (e.currentTarget as HTMLElement).style.letterSpacing = '2.5px';
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

/** Ghost ivory — transparent + ivory border (for dark backgrounds) */
export function GhostIvoryBtn({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const style: React.CSSProperties = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    background:     'transparent',
    border:         `1px solid rgba(245,237,216,0.45)`,
    color:          '#F5EDD8',
    cursor:         disabled ? 'not-allowed' : 'pointer',
    padding:        '13px 31px',
    fontFamily:     `'EB Garamond', serif`,
    fontSize:       '11px',
    letterSpacing:  '2.5px',
    textTransform:  'uppercase',
    transition:     `all 400ms ${T.ease}`,
    opacity:        disabled ? 0.5 : 1,
    width:          fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!disabled) {
      (e.currentTarget as HTMLElement).style.borderColor    = '#F5EDD8';
      (e.currentTarget as HTMLElement).style.background     = 'rgba(245,237,216,0.08)';
    }
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,237,216,0.45)';
    (e.currentTarget as HTMLElement).style.background  = 'transparent';
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
