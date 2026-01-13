export default function Chip(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, ...rest } = props;
  return (
    <div className="bg-gray-100 rounded-full px-2 py-1 text-sm text-gray-500" {...rest}>
      {children}
    </div>
  )
}
