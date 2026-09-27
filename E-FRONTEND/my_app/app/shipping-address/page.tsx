export default function ShippingPage() {
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
            <a href="/home"><img className="hidden md:block" src="/images/stacked-logo.png" alt="" /></a>
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
        <div className="max-w-6xl mx-auto py-2 px-3 md:flex items-center justify-between">
          <a href="/my-cart"><div className="text-black text-3xl">&#8592;</div></a>
          <img className="mx-auto" src="/images/status2.png" alt="" />
        </div>

        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 p-2 md:p-3 mx-auto">
          <div className="flex flex-col gap-5 md:col-span-2">

            <div className="w-full p-3 rounded-xl bg-[#F7F3EA]" >
              <p className="text-black font-bold text-xl">SHIPPING ADDRESS</p>
              <small><a href="/shipping" className="text-blue-600">+ Add new Address</a></small>
            </div>

            <div className="w-full flex cursor-pointer items-center rounded-3xl p-3 bg-[#F7F3EA]">
              <div className="w-full">
                <p className="font-bold text-black text-xl p-2">Payment Method</p>
                <div className="flex mb-5 text-black">
                  <input className="mr-2" type="checkbox" />
                  <img  className="mr-1" src="/images/opay-logo.png" alt="" />
                  <p>Opay</p>
                </div>
                <div className="flex mb-5 text-black">
                  <input className="mr-2" type="checkbox" />
                  <div>
                    <p>Add a new card</p>
                    <img src="/images/credit-cards.png" alt="" />
                  </div>
                </div>
                <div className="flex text-black">
                  <input className="mr-2" type="checkbox" />
                  <img src="/images/paypal.png" alt="" />
                  <p>Paypal</p>
                </div>
              </div>
            </div>
            <div className="w-full flex ">
              <button className="w-20 ms-auto p-2 bg-[#330c04] rounded-lg "><a href="/shipping">Proceed</a></button>
            </div>
            
          </div>

          <div className="w-full md:col-span-1">
            <div className="text-black w-full p-3 mb-5 rounded-xl bg-[#F7F3EA]">
              <p className="font-bold text-xl">Shipping Address</p>
              <div className="flex justify-between text-[#330c04]">
                <p>Country</p>
                <p>Nigeria</p>
              </div>
              <div className="flex justify-between text-[#330c04]">
                <p>State</p>
                <p>FCT</p>
              </div>
              <div className="flex justify-between text-[#330c04]">
                <p>Address</p>
                <p>ABC, street QRS</p>
              </div>
              <div className="flex justify-between text-[#330c04]">
                <p>Telephone</p>
                <p>1234567</p>
              </div>
              <div className="flex pt-3 justify-between text-[#330c04]">
                <p className="font-bold">Total</p>
                <p className="font-bold">$8,451.76</p>
              </div>
              <small className="text-slate-800">Upon clicking 'place order', I confirm i have read and
                acknowledge <span className="text-sky-800">all terms and policies</span></small>
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