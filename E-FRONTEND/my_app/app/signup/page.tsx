export default function SignupPage() {
  return (
    <div className="w-full min-h-screen py-3 px-4 bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="mb-2 max-w-5xl p-4 mx-auto grid grid-cols-1 md:grid-cols-2 items-center rounded-3xl bg-[#5c2c05]/90">
        <div className="w-48 sm:w-64 md:w-80 aspect-square rounded-full  mx-auto flex justify-center items-center outline-2 outline-amber-900 bg-gray-100 border-2  border-gray-900">
          <div className="w-2/3 aspect-square"><img className="w-full h-full object-contain" src="/images/logo.jpg" alt="Logo" /></div>
        </div>

        <div className="mt-5 flex justify-center items-center text-white border-2 border-gray-700 bg-[#f3e2d5]/70 rounded-2xl ">
          <div className="w-75 mx-auto flex gap-4 flex-col py-5">
            <h2 className="text-4xl text-black text-center">Create Account</h2>
            <div className="w-full">
              <label htmlFor="name" className="text-lg text-[#281404]">Name</label>
              <input type="text" id="name" className="stuff w-full p-2 rounded-lg bg-[#603410]/80 text-white placeholder-white placeholder:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500" placeholder="Enter your name" />
            </div>
            <div className="w-full">
              <label  htmlFor="email"className="text-lg text-[#281404]">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded-lg bg-[#603410]/80 text-white placeholder-white placeholder:text-sm  focus:outline-hidden focus:ring-2 focus:ring-amber-500" placeholder="Enter your email"  />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="text-lg text-[#281404]">Passwod</label>
              <input type="password" id="password" className="w-full p-2 rounded-lg bg-[#603410]/80 text-white placeholder-white placeholder:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500" placeholder="Enter your password"  />
            </div>
            <div className="mt-3 ">
              <div className="w-full mb-3">
                <button className="w-full p-2 rounded-lg bg-[#603410] text-white hover:bg-[#311905] transition duration-300">Create Account</button>
              </div>
              <div className="w-full">
                <button className="w-full bg-white flex items-center justify-center p-2 rounded-lg text-black hover:bg-[#695547] transition duration-300">
                  <div className="mx-2 bg-white p-0.5 rounded-full"><img className="h-5 rounded-full" src="/images/google-logo.png" alt="" /></div>Sign up with Google
                </button>
              </div>
              <div className="w-full mt-3 flex justify-center">
                <a href="/login"><button className=" bg-[#957762] text-[#1f1004] flex flex-col items-center justify-center px-4 py-3 rounded-lg hover:bg-[#502d14] transition duration-300 hover:text-[#ae9c8e]">Already have an account?<span className="text-[#904407] ml-1.5"> Login here</span>
                </button></a>
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


