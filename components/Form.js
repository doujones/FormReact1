import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [inputFirstName, setInputFirstName] =  useState('')
  const [inputLastName, setInputLastName] = useState('')
  const [email, setEmail] =  useState('')
  const [phone, setPhone] =  useState('')


  const onSubmit = data => console.log(data);


  const inputFirstName = (event) => {
    setState({username: event.target.value});
  }
  

 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" 
      defaultValue="first name" 
      ref={register} 
      value={inputFirstName}    
      /> <br/>
      <input name="example" defaultValue="test" ref={register} /><br/>
      <input name="exampleRequired" ref={register({ required: true })} /><br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}