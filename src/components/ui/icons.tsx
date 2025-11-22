type IconProps = {
  className?: string
}

export function GithubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.79.61-3.38-1.34-3.38-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 .1-2.7 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.28.7.09 1.6.05 2.7 0 3.85-2.34 4.7-4.57 4.95.37.32.7.94.7 1.9v2.81c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function ExternalLinkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M5 10v9h9" />
    </svg>
  )
}
