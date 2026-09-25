export default function PasswordResetPage() {
  return (
    <main>
      {/* Top Announcement Moving Banner Wrapper */}
      <div className="w-full bg-[#4A2E28] text-white overflow-hidden py-2 border-b border-white/10">

        {/* The Moving Track */}
        <div className="flex whitespace-nowrap animate-banner gap-12 text-xs font-medium tracking-wide uppercase">
          <span>✨ New shipping supply! ✨</span>
          <span>🔥 100% great deals! 🔥</span>
          <span>⚡ New premium extensions added to the collection! ⚡</span>

          {/* Duplicate the text here to create a seamless loop effect */}
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
            <img className="hidden md:block h-6 invert brightness-200" src="/images/user-icon.svg" alt="" />
            <img className="h-6 invert brightness-200" src="/images/grocery-store.png" alt="" />
            <img className="h-6 invert brightness-200" src="/images/world-icon.svg" alt="" />
          </div>
        </div>

        <div className="flex justify-between px-4 p-2 bg-[#3d170f] border-t-2 border-t-[#330c04]">
          <a className="active:text-[#F1B08F] text-[#F1B08F] text-md font-medium tracking-wide uppercase" href="#">All Categories</a>
          <a className="text-md font-medium tracking-wide uppercase hidden md:block md:hover:text-[#F1B08F] " href="#">Hair Extensions</a>
          <a className="text-md font-medium tracking-wide uppercase md:hover:text-[#F1B08F] " href="#">Hair Tools</a>
          <a className="text-md font-medium tracking-wide uppercase hidden md:block md:hover:text-[#F1B08F] " href="#">Accessories</a>
          <a className="text-md font-medium tracking-wide uppercase md:hover:text-[#F1B08F] " href="#">Wigs</a>
          <a className="text-md font-medium tracking-wide uppercase hidden md:block md:hover:text-[#F1B08F] " href="#">Oils</a>
          <a className="text-md font-medium tracking-wide uppercase md:hover:text-[#F1B08F] " href="#">More</a>
        </div>
      </nav>
      <section className="bg-[#F1B08F]">
        <div className="max-w-6xl p-5 mx-auto">
          <div className="flex flex-col items-center justify-center relative">
            <div className="absolute left-10 md:left-18 top-22">
              <p className="text-black md:text-3xl p-1 md:p-2 rounded-3xl bg-[#E19BA7]">Hot Tools, Hot Deals 🔥</p>
              <p className="text-black md:text-3xl md:mt-5 font-bold">Save up to 30% off</p>
              <small className="text-black md:text-lg">On selected hair equipment</small>
              <p className="text-white hidden p-2 md:block w-30 bg-black mt-4">Shop the deal</p>
            </div>
            <p className="text-[#5A3A33] text-xl md:text-2xl font-bold pt-3">Everything Hair. All in One Place</p>
            <div className="p-4 md:w-full">
              <img className="border-2 w-full border-white rounded-4xl " src="/images/hair-tools-bg.jpg" alt="" />
            </div>
          </div>

          <div className="">
            {/* row one */}
            <div>
              <p className="text-xl text-[#330c04] font-semibold p-2">Trending Deals &#8594;</p>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4 ">

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* row two */}
            <div>
              <p className="text-xl text-[#330c04] font-semibold p-2">Trending Deals &#8594;</p>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4 ">

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* row three */}
            <div>
              <p className="text-xl text-[#330c04] font-semibold p-2">Trending Deals &#8594;</p>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4 ">

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-2 bg-white rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="rounded-3xl h-80 w-full object-cover" src="/images/product1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font">5*5 200% Brown Density Body wave</div>
                    <div className="flex w-full justify-between">
                      <p className="text-xl font-semibold">$27.89</p>
                      <img className="h-6" src="/images/grocery-store.png" alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </section>
    </main>
  );
}