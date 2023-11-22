export function InputComponenet({ placeholder, value, password }: { placeholder: string, value?: string, password?: boolean }) {
  return (
    <input
      className="mt-4 h-11 w-96 rounded-lg border border-slate-300 pl-4"
      type="text"
      placeholder={placeholder}
	  value={value}
	  type={password ? "password" : "text"}
    />
  );
}
