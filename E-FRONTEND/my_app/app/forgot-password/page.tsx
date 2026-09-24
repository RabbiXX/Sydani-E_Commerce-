export default function ForgotPasswordPage() {
  return (
    <div className="w-full min-h-screen py-3 px-4 flex flex-col items-center justify-between bg-[url('/images/hairbundle.jpg')] bg-cover bg-center">
      <div className="max-w-md ">
        <div className="hidden md:block h-10"></div>
        <div className="  text-white border-2 pb-10 px-10 border-gray-700 bg-[#f3e2d5]/70 rounded-2xl ">
          <div className="w-55 md:w-75 mx-auto flex gap-4 flex-col py-10">
            <h2 className="text-2xl text-black text-center leading-none">Forgot your password?<br /><span className="text-sm">Follow the instructions to reset your password</span></h2>

            <div className="w-full">
              <label htmlFor="email" className="text-base text-[#281404]">Email or mobile phone number</label>
              <input type="email" id="email" className="w-full p-2 rounded-lg bg-white/80 text-black   focus:outline-hidden focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="mt-3 ">
              <div className="w-full mb-3">
                <button className="w-full p-2 rounded-lg bg-[#603410] text-white hover:bg-[#311905] transition duration-300">Continue</button>
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