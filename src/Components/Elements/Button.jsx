export function Button({children, onClick}){
    return(
        <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        onClick={() => onClick()}
      >
        {children}
      </button>
    );
}