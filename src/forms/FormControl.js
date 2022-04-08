function FormControl(props) {
    return (
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <input
          id={props.id}
          className="form-control"
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          min={props.min}
          max={props.max}
        />
      </div>
    );
  }
  
  export default FormControl;
  