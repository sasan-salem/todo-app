export function IconButton({children, onClick}){
    return(
        <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={() => onClick()}
      >
        {children}
      </button>
    );
}