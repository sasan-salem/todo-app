export default function TodoItem({ item, removeFromList }) {
  return (
    <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {item.title}
      <div className="d-grid gap-2 d-md-flex">
        <button type="button" className="btn btn-outline-primary btn-sm">
          <i className="bi bi-pencil text-info"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() => removeFromList(item.id)}
        >
          <i className="bi bi-trash text-info"></i>
        </button>
      </div>
    </li>
  );
}
