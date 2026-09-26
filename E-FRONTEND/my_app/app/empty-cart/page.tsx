export default function PasswordResetPage() {
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
        <div className="max-w-6xl grid grid-rows md:grid-cols-3 gap-2 p-2 md:p-5 mx-auto">
          <div className="flex flex-col gap-5 md:col-span-2">
            <div className="w-full p-5 bg-[#F7F3EA] rounded-xl">
              <p className="text-black font-bold text-lg">Cart</p>
              <div className="w-full rounded-xl bg-[#5A3A33] flex justify-between text-sm md:text-base p-2">
                NEW SEASON SALE Ends:Aug 26, 23:59 WAT
                <div>&#8250;</div>
              </div>
            </div>
            <div className="w-full p-5 rounded-xl bg-[#F7F3EA]">
              <div className="flex w-full gap-3 justify-center items-center flex-col">
                <img className="h-20 w-20" src="/images/hair-cart.jpg" alt="" />
                <p className="font-semibold text-black">Your Cart is empty</p>
                <a href="/login"><button className="bg-[#E7C6B5] hover:bg-[#4e4b49] transition duration-300 rounded-3xl px-3 p-1">Sign in</button></a>
                <a href="/home"><button className="bg-[#330c04] hover:bg-[#771904] transition duration-300 rounded-3xl px-3 p-1">Explore items</button></a>
              </div>
            </div>
          </div>
          <div className="w-full md:col-span-1">
            <div className="text-black w-full p-3 mb-5 rounded-xl bg-[#F7F3EA]">
              <p>Summary</p>
              <div className="flex justify-between">
                <p>Estimated total</p>
                <p>$0</p>
              </div>
              <button className="text-white mt-5 w-full bg-[#330c04] rounded-3xl p-1">Checkout &#40;0&#41;</button>
            </div>
            <div className="text-black w-full p-3 rounded-xl bg-[#F7F3EA]">
              <p className="font-semibold">Buyer protection</p>
              <div className="flex gap-2">
                <img className="h-5 my-auto" src="/images/security-check.png" alt="" />
                <p>Get a full refund if the item is not as described or not delivered</p>
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