export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white font-inter px-4 py-2 rounded-md hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  )
}
