export default function PaymentPage() {
  return (
    <main>
      <div className="w-full bg-[#4A2E28] text-white overflow-hidden py-2 border-b border-white/10">

        <div className="flex whitespace-nowrap animate-banner gap-12 text-xs font-medium tracking-wide uppercase">
          <span>✨ New shipping supply! ✨</span>
          <span>🔥 100% great deals! 🔥</span>
          <span>⚡ New premium extensions added to the collection! ⚡</span>

          <span>✨ New shipping supply! ✨</span>
          <span>🔥 100% great deals! 🔥</span>
          <span>⚡ New premium extensions added to the collection! ⚡</span>
        </div>

      </div>

      <nav className="flex flex-col bg-[#5A3A33]">

        <div className="flex justify-between max-w-6xl w-full mx-auto items-center p-3 ">
          <div>
            <img className="hidden md:block" src="/images/stacked-logo.png" alt="" />
          </div>

          <div className="flex items-center flex-1 p-1 md:max-w-3xl">
            <img className="h-6 mr-3 invert brightness-200 md:hidden" src="/images/user-icon.svg" alt="" />
            <div className="flex flex-1 md:max-w-3xl mx-auto overflow-hidden bg-white rounded-full shadow-sm h-10 items-center">
              <img className="h-5 pl-2 opacity-60 mr-2 bg-white rounded-s-4xl" src="/images/search.svg" alt="" />
              <input className="bg-transparent text-slate-800 focus:outline-none w-full" type="input" placeholder="Search for extensions" />
            </div>

          </div>

          <div className="flex gap-5 invert-brightness-200">
            <a href="/empty-cart"><img className="hidden md:block h-6 invert brightness-200" src="/images/user-icon.svg" alt="" /></a>
            <a href=""><img className="h-6 invert brightness-200" src="/images/grocery-store.png" alt="" /></a>
            <a href=""><img className="h-6 invert brightness-200" src="/images/world-icon.svg" alt="" /></a>
          </div>
        </div>
      </nav>

      <section className="bg-[#F1B08F]">
        <div className="max-w-6xl mx-auto py-2 px-3 flex-col md:flex items-center justify-between">
          <img className="mx-auto" src="/images/status3.png" alt="" />
        </div>

        <div className="max-w-4xl grid grid-cols-1 gap-5 p-2 md:p-3 mx-auto">
          <div className="flex flex-col gap-5 md:col-span-2">

            <div className="w-full flex cursor-pointer items-center rounded-3xl p-9 bg-[#F7F3EA]">
              <div className="w-full">
                <div className="flex justify-between p-2">
                  <a href="/shipping"><div className="text-black text-3xl">&#8592;</div></a>
                  <img src="/images/opay.png" alt="" />
                </div>
                <div className="px-5">
                  <p className="font-bold text-black text-xl mb-3">Payment details</p>
                  <p className="text-slate-800 mb-2">Merchant Name: Hair Haven</p>
                  <p className="text-slate-800 mb-4">Total Amount: <span className="font-bold">$16,119.20</span></p>
                  <div className="flex gap-2 text-black items-center">
                    <p className="bg-slate-500/30 p-2 rounded-lg">05m:</p>
                    <p className="bg-slate-500/30 p-2 rounded-lg">43s</p>
                    <p className="font-bold text-lg">Left</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full p-3 rounded-xl bg-[#F7F3EA]" >
              <div className="p-3 w-full">
                <p className="text-black font-bold text-xl">Pay with Opay</p>
                <div className="mt-3 w-full">
                  <p className="font-bold text-black">Phone Number</p>
                  <input className="w-full p-2 rounded-md outline-1 outline-gray-700 focus:outline-none bg-white placeholder:text-gray-700 text-[#330c04] focus:ring-2 focus:ring-amber-400 placeholder:text-sm px-3" placeholder="Name" type="text" name="" id="" />
                </div>
                <div className="mt-3 w-full">
                  <p className="font-bold text-black">Opay Password</p>
                  <input className="w-full p-2 rounded-md outline-1 outline-gray-700 focus:outline-none bg-white placeholder:text-gray-700 text-[#330c04] focus:ring-2 focus:ring-amber-400 placeholder:text-sm px-3" placeholder="Enter your 6-digit login password" type="text" name="" id="" />
                </div>
                <a href="/payment-success"><button className="text-white mb-3 mt-5 w-full bg-[#11d399] hover:bg-[#0e3b22] transition duration-300 rounded-md font-bold p-2">Place Order</button></a>
                <a href="/my-cart"><button className="text-[#11d399] mb-3 mt-5 w-full bg-white hover:bg-[#11d399] hover:text-white transition duration-300 rounded-md font-bold outline-1 outline-[#11d399] p-2">Cancel</button></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-[#3d170f]">
        <div className="underline text-center p-2 text-lg cursor-pointer">Learn More</div>
        <div className="grid grid-cols-2 gap-5 md:flex justify-between p-5">
          <div>
            <img src="/images/stacked-logo.png" alt="logo" />
            <a href=""><div className="text-sm p-1 text-center md:p-3 md:text-base md:w-full rounded-3xl bg-amber-900 hover:bg-amber-500 transition duration-300">DOWNLOAD THE APP</div></a>
          </div>
          <div className="cursor-pointer">
            <p className="mb-2">HELP & INFORMATION</p>
            <p>Help</p>
            <p>Track Order</p>
            <p>Delivery & Returns</p>
            <p>Sitemap</p>
          </div>
          <div className="cursor-pointer">
            <p className="mb-2">ABOUT</p>
            <p>About Us</p>
            <p>Corporate Responsibility</p>
            <p>Careers at Hair Haven</p>
          </div>
          <div className="cursor-pointer">
            <p className="mb-2">MORE FROM HAIR HAVEN</p>
            <p>Hair Haven App</p>
            <p>Gift vouchers</p>
            <p>Black Friday</p>
          </div>
          <div className="cursor-pointer">
            <p className="mb-2">SHOPPING FROM:</p>
            <div className="flex">
              <p className="mr-1">You're in</p>
              <img className="h-5" src="/images/country5.svg" alt="" />
              <p className="ml-2">|CHANGE</p>

            </div>

            <p>Some other countries:</p>
            <div className="flex gap-2 flex-col">
              <div className="flex mt-2 gap-2">
                <img className="h-5" src="/images/country1.svg" alt="" />
                <img className="h-5" src="/images/country1.svg" alt="" />
                <img className="h-5" src="/images/country2.svg" alt="" />
                <img className="h-5" src="/images/country3.svg" alt="" />
              </div>
              <div className="flex gap-2">
                <img className="h-5" src="/images/country4.svg" alt="" />
                <img className="h-5" src="/images/country6.svg" alt="" />
                <img className="h-5" src="/images/country7.svg" alt="" />
                <img className="h-5" src="/images/country8.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-nowrap p-1 text-md cursor-pointer">&#169; Hair Haven. All rights reserved</div>
      </footer>
    </main>
  );
}