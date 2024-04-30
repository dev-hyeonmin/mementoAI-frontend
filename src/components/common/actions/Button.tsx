interface ButtonProps {
  label: string;
  type?: 'button' | 'submit';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  skin?: 'default' | 'primary';
  priority?: "primary" | "secondary";
}

const colorVariants: Record<string, any> = {
  "primary": {
    "primary": "bg-primary text-white",
    "secondary": "bg-secondary text-primary"
  },
  "default": {
    "secondary": "border border-gray-light text-black-light"
  }
}

const sizeVariants: Record<string, string> = {
  'tiny': '',
  'small': '',
  'medium': 'w-24 h-9',
  'large': ''
}

export default function Button({
  label,
  size = 'medium',
  skin = 'default',
  priority = 'secondary',
}: ButtonProps) {
  const style = [
    colorVariants[skin][priority],
    sizeVariants[size]
  ].join(' ');

  return (
    <button
      className={`font-bold rounded-md ${style}`}>
      {label}
    </button>
  )
}