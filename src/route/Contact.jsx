import React, { useEffect, useState } from 'react'
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {

  const [Shake, setShake] = useState(false)
  const [Namee, setName] = useState('')
  const [email, setemail] = useState('')
  const [messege, setmessege] = useState('')
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Your messege is sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "3503e0f4-fe1b-4ab2-9d43-613d84938884");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setplane(true)
      setTimeout(() => setplane(false), 1000); 
      setName('')
      setemail('')
      setmessege('')
      setResult("Your messege has been sent. We will reach out to you soon!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.messege);
    }

    if (!Namee || !email || !messege) {
      setShake(true); 
      setTimeout(() => setShake(false), 500); 
      return;
    }
  };

  const [NameLetter, setNameLetter] = useState(false)

  useEffect(() => {
    if(Namee.length > 40){
      setNameLetter(true)
    }else{
      setNameLetter(false)
    }
  }, [Namee])
  const [plane, setplane] = useState(false)  


  return (
    <div className='w-full flex text-white overflow-hidden flex-col items-center justify-center gap-9 h-screen '>
      <h1 className='text-3xl font-extrabold'>Hello! {Namee} <span className="wave"><img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f44b.svg" alt="" /></span></h1>
     
      <form onSubmit={onSubmit} className="w-full h-[60%] flex flex-col items-center justify-center gap-9">
        <input type="hidden" name="Name" value={Namee}/>
        <input
          type="text"
          value={Namee} required
          maxLength={41}
          onChange={(e) => setName(e.target.value)}
          className={`border-b-3 border-white text-white bg-transparent focus:outline-none !p-2 w-[90%]  md:w-[50%] ${
            Shake && !Namee ? "Shake" : ""
          }`}
          placeholder="Your Name*"
          name="Name"
        />
         {NameLetter &&  <span className='text-red-500 '>Name should be less then 40 letters</span>}
        <input
          type="email" required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className={`border-b-3 border-white text-white focus:outline-none !p-2 w-[90%]  md:w-[50%] ${
            Shake && !email ? "Shake" : ""
          }`}
          placeholder="Your Email*"
          name="email"
        />

        <textarea
          value={messege} required
          onChange={(e) => setmessege(e.target.value)}
          className={`w-[90%]  md:w-[50%] border-b-3 !p-3 resize-none !pb-4 focus:outline-none overflow-hidden ${
            Shake && !messege ? "Shake" : ""
          }`}
          placeholder="Your messege*"
          name="messege"
          onInput={(e) => {
            e.target.style.height = "20px";
            e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
          }}
        ></textarea>
          <button 
            type="submit" 
            className="bg-zinc-700 flex items-center justify-center gap-3 shadow-2xl rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer text-white w-[120px] h-[40px]"
          >
            Submit <FaRegPaperPlane className={plane ? 'plane' : ''} />
          </button>
        <span className='w-[90%]'>{result}</span>
      </form>
    </div>
    
  )
}

export default Contact