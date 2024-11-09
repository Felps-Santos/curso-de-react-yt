function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );

  // OU PODE SÓ COLOCAR NO INPUT {...PROPS} ASSIM ELE JÁ FAZ DE TODOS DE UMA VEZ QUE TEM LÁ
}

export default Input;
