export default function PasswordResetPage() {
  return (
    <div className="w-full min-h-screen py-3 px-4 flex flex-col items-center justify-between bg-[url('/images/hairbundle.jpg')] bg-cover bg-center">
      <div className="max-w-md ">
        <div className="hidden md:block h-10"></div>
        <div className="  text-white border-2 pb-10 px-10 border-gray-700 bg-[#f3e2d5]/70 rounded-2xl ">
          <div className="w-55 md:w-75 mx-auto flex gap-4 flex-col py-10">
            <h2 className="text-2xl text-black text-center leading-none">Reset Password<br /><span className="text-sm">We've sent the code to @userinput.com or +123456789</span></h2>

            <div className="w-full">
              <label htmlFor="email" className="text-base text-[#281404]">Email or mobile phone number</label>
              <div className="flex gap-3 mt-2 h-12 ">
                <input type="text" className="w-full outline-1 outline-slate-800 p-2 rounded-lg bg-white/80 text-black text-center focus:outline-hidden focus:ring-2 focus:ring-amber-500" />
                <input type="text" className="w-full p-2 outline-1 outline-slate-800 rounded-lg bg-white/80 text-black text-center  focus:outline-hidden focus:ring-2 focus:ring-amber-500" />
                <input type="text" className="w-full p-2 outline-1 outline-slate-800 rounded-lg bg-white/80 text-black text-center  focus:outline-hidden focus:ring-2 focus:ring-amber-500" />
                <input type="text" className="w-full p-2 outline-1 outline-slate-800 rounded-lg bg-white/80 text-black text-center  focus:outline-hidden focus:ring-2 focus:ring-amber-500" />
              </div>
            </div>
            <div className="mt-3 ">
              <div className="w-full mb-3">
                <a href="/new-password"><button className="w-full p-2 rounded-lg bg-[#603410] text-white hover:bg-[#311905] transition duration-300">Continue</button></a>
              </div>
              <div className="w-full mt-3 flex justify-center">
                <p className="text-[#311905]">Didn't receive a code?<a href="#" className="text-sky-700 ml-1.5">Resend</a></p>
                
              </div>
              <div className="w-full mt-3 flex justify-center">
                <a href="/login" className="text-slate-700">&#8592; Back to login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full mt-auto bg-[#603410]/40 text-white backdrop-blur-xs py-2">
        <div className="max-w-full mx-auto text-center px-6">
          <p className="text-center text-black">
            &copy; HairHaven, All rights Reserved
          </p>
        </div>
      </footer>
    </div>

  );
}