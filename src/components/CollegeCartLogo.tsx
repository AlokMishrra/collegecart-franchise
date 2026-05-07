export default function CollegeCartLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold text-xl tracking-tight ${className}`}>
      <span className="text-navy">COLLEGE</span>
      <span className="text-gold">CART</span>
    </span>
  );
}
