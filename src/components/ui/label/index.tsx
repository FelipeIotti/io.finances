interface LabelProps {
  text?: string;
}

export function Label({ text }: LabelProps) {
  return text && <p className="text-gray1 text-sm font-bold">{text}</p>;
}
