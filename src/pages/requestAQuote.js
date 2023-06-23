'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
import { useState } from "react";
import axios from "axios";
const RequestAQuote = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const showToastMessage =async () => {
    const data={
      device_number:"Device 15",
      name,
      email ,
      phone ,
      subject,
      message
    }
    if(!name || !email ||   !phone || !subject || !message){
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    
    const sendData = await axios.post("https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",data)
    console.log(sendData.data.success)
    if(sendData.data.success){
    toast.success("Message Sent Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
    }
  else{
    toast.error("Somthing went wrong.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  };
  return (
    <section id="contact" class="requestAQuoteBg  ">
    
      <div class="mx-auto    max-w-screen-2xl py-8 sm:py-16">
        <div className='flex px-6   items-center gap-3 sm:gap-6 sm:justify-center flex-row sm:ml-0'>
      <div className='sm:w-1/2 hidden sm:block relative items-end    right-0 px-4  '> </div>
            <div className='lg:w-1/2   text-center sm:text-left  relative items-end    right-0 px-16   '>
                <h1 className='text-normalWhite text-3xl font-sans font-bold'>Request A Quote</h1>
                <p className='text-normalWhite text-sm my-8'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='grid grid-flow-row sm:grid-cols-2 grid-cols-1'>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className='bg-trans border-b mx-2 my-4 text-normalWhite  active:border-b p-2 border-normalWhite' type='text' placeholder='Full name'/>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='email' placeholder='Email Id'/>
                    <input onChange={(e)=>setPhone(e.target.value)} value={phone} className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='number' placeholder='Mobile Number'/>
                    <input onChange={(e)=>setSubject(e.target.value)} value={subject} className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='text' placeholder='Subject'/>
                </div>
                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} rows={4} className='bg-trans border-b w-full mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='text'  placeholder='Message'/>
                    <button onClick={showToastMessage} className='inline-block rounded-md mx-2 text-normalWhite w-fit h-fit bg-btnColor px-5 py-4 text-sm font-medium text-lightBg-n transition   capitalize'>Request a Quote for query</button>
                    <ToastContainer/>
            </div>
      </div>
      </div>
    </section>
  )
}

export default RequestAQuote