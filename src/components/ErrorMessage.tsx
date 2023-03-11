interface ErrorMessageProps {
  error: string;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-center text-red-700">{error}</p>;
}

export default ErrorMessage;
