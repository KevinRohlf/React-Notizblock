export default function Textarea({ ...props }: React.ComponentProps<"textarea">) {
  return <textarea {...props} className="border border-gray-300 text-background rounded p-2" />;
}