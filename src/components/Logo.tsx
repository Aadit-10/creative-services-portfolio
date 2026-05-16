// Simple geometric SVG logo for Creative Services
const Logo = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="#06b6d4" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="20" r="12" stroke="#0f172a" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="20" r="6" fill="#06b6d4"/>
      <path d="M20 2L20 8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 32L20 38" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 20L8 20" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 20L38 20" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default Logo
