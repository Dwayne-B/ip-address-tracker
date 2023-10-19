import"./Form.scss"
import {FormEvent, useState} from 'react'
interface FormProps {

  setIpAddress: React.Dispatch<React.SetStateAction<string>>;
}
function Form({setIpAddress}: FormProps) {
  // when calling setInput use regex to sanitize input to look like 000.000.000.000
  
  const [input, setInput] = useState('');
  const [errorPlaceholder,setErrorPlaceholder] = useState("Search for any IP address or domain")
  const [placeholder] = useState("Search for any IP address or domain")
  const [error,setError] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault();
    // console.log('submit')
    const ip = input;
    const sanitizedIP = sanitizeIPAddress(ip)
    if (sanitizedIP !== null) {
      setError(prev=>!prev)
      // console.log(`Sanitized IP: ${sanitizedIP}`);
      setIpAddress(input);
    } else {
      setError(prev=>!prev)
      setErrorPlaceholder("Invalid IP format");
      // console.log("Invalid IP format");
    }
    setInput('');
  }
  function sanitizeIPAddress(ip:string) {
    // Define a regular expression for a valid IPv4 address
    const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  
    // Attempt to match the input against the regex
    const match = ip.match(ipv4Regex);
  
    if (match) {
      // Format the matched groups to create a valid IPv4 address
      const formattedIP = match.slice(1).map(segment => parseInt(segment, 10).toString()).join('.');
  
      return formattedIP;
    } else {
      // Return null if the input does not match the expected format
      return null;
    }
  }
  
  // Example usage:

  


  return (
    <form onSubmit={(e)=>{
     
      handleSubmit(e);
     
    }}>
      <input type="text" 
      placeholder={error?errorPlaceholder:placeholder}
      name="address" required value={input} onChange={(e)=>{
        setInput(e.target.value)

      }}/>
      <button type="submit" style={{ backgroundColor: '#000000' }}>
        <i className="fa-solid fa-chevron-right" style={{ color: '#ffffff' }} ></i>
      </button>
    </form>
  );
}

export default Form;
