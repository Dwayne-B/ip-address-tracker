import"./Form.scss"
function Form() {
  return (
    <form action="">
      <input type="text" 
      placeholder="Search for any IP address or domain"
      name="address" required />
      <button type="submit" style={{ backgroundColor: '#000000' }}>
        <i className="fa-solid fa-chevron-right" style={{ color: '#ffffff' }}></i>
      </button>
    </form>
  );
}

export default Form;
