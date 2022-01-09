const Filter = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          ></input>
    )
}

export default Filter;