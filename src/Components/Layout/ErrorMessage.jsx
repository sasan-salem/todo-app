export default function ErrorMessage({ errorMessage }) {
    
  const m = !/^\s*$/.test(errorMessage) ? (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  ) : null;

  return m;
}
