import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-full transition-all duration-300 relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-light text-dark hover:shadow-lg hover:shadow-primary/50 hover:scale-105',
    secondary: 'bg-gradient-to-r from-gold to-gold-light text-dark hover:shadow-lg hover:shadow-gold/50 hover:scale-105',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-dark'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  )
}
