import React from 'react'

const RequestAQuote = () => {
  return (
    <section class="requestAQuoteBg  ">
      <div class="mx-auto    max-w-screen-2xl py-8 sm:py-16">
        <div className='flex px-6   items-center gap-3 sm:gap-6 sm:justify-center flex-row sm:ml-0'>
      <div className='sm:w-1/2 hidden sm:block relative items-end    right-0 px-4  '> </div>
            <div className='lg:w-1/2   text-center sm:text-left  relative items-end    right-0 px-16   '>
                <h1 className='text-normalWhite text-3xl font-sans font-bold'>Request A Quote</h1>
                <p className='text-normalWhite text-sm my-8'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='grid grid-flow-row sm:grid-cols-2 grid-cols-1'>
                    <input className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='text' placeholder='First Name'/>
                    <input className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='text' placeholder='First Name'/>
                    <input className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='email' placeholder='First Name'/>
                    <input className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='number' placeholder='First Name'/>
                    <input className='bg-trans border-b mx-2 my-4 text-normalWhite active:border-b p-2 border-normalWhite' type='text' placeholder='First Name'/>
                    <button className='inline-block rounded-md mx-2 text-normalWhite w-fit h-fit bg-btnColor px-5 py-4 text-sm font-medium text-lightBg-n transition   capitalize'>Request a Quote for query</button>
                </div>
            </div>
      </div>
      </div>
    </section>
  )
}

export default RequestAQuote