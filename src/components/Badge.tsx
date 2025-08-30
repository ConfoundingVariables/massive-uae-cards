interface BadgeProps {
  variant: 'new' | 'sale' | 'limited';
  children?: string;
}

export const Badge = ({ variant, children }: BadgeProps) => {
  const variants = {
    new: 'bg-accent-500 text-white',
    sale: 'bg-destructive text-white',
    limited: 'bg-accent-400 text-white'
  };

  const labels = {
    new: 'New',
    sale: 'Sale',
    limited: 'Limited'
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children || labels[variant]}
    </span>
  );
};