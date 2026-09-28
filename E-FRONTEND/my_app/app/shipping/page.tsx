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
        
        <div className="mx-auto pt-2 invert brightness-200 md:hidden"><a href="/home"><img src="/images/straight-logo.png" alt="" /></a></div>


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
        <div className="max-w-6xl mx-auto py-2 px-3 flex items-center justify-between">
          <a href="/shipping-address"><div className="text-black text-3xl">&#8592;</div></a>
          <img className="mx-auto" src="/images/status3.png" alt="" />
        </div>
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 p-2 md:p-3 mx-auto">
          <div className="flex flex-col gap-5 md:col-span-2">

            <div className="w-full p-3 rounded-xl bg-[#F7F3EA]" >

              <div className="p-3 w-full">
                <p className="text-black font-bold text-xl">SHIPPING ADDRESS</p>
                <div className="w-full mt-3">
                  <input className="w-full mb-5 p-3 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" type="text" name="" placeholder="Email" id="" />
                  <div className="mb-5 flex">
                    <input className="p-3 w-1/2 mr-4 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Full Name" type="text" name="" id="" />
                    <input className="p-3 w-1/2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Last Name" type="text" name="" id="" />
                  </div>
                  <input className="w-full mb-5 p-3 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Company(Optional)" type="text" name="" id="" />
                  <div className="mb-5 flex">
                    <input className="p-3 w-1/2 mr-4 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="State" type="text" name="" id="" />
                    <input className="p-3 w-1/2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Address" type="text" name="" id="" />
                  </div>
                  <input className="w-full mb-5 p-3 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Country" type="text" name="" id="" />
                  <div className="flex">
                    <input className="p-3 w-1/2 mr-4 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Postal Code" type="text" name="" id="" />
                    <input className="p-3 w-1/2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] placeholder:text-sm" placeholder="Telephone" type="text" name="" id="" />
                  </div>
                </div>
              </div>

            </div>

            <div className="w-full flex cursor-pointer items-center rounded-3xl p-9 bg-[#F7F3EA]">
              <div className="w-full">
                <p className="font-bold text-black text-xl p-2">Payment Method</p>
                <div className="flex gap-5">
                  <div className="outline-2 outline-[#330c04] p-5 rounded-xl w-25 "><img className="mx-auto" src="/images/card.png" alt="" /></div>
                  <div className="outline-1 outline-[#5c352d] p-5 rounded-xl w-25 "><img className="mx-auto" src="images/transfer.png" alt="" /></div>
                  <div className="outline-1 outline-[#5c352d] p-5 rounded-xl w-25 "><img className="mx-auto" src="/images/bank.png" alt="" /></div>
                </div>
                <div className="mt-3 w-full">
                  <p className="font-bold text-black">Name on Card</p>
                  <input className="w-full p-2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] text-[#330c04] focus:ring-2 focus:ring-amber-400 placeholder:text-sm px-3" placeholder="Name" type="text" name="" id="" />
                </div>
                <div className="mt-3 w-full">
                  <p className="font-bold text-black">Card Number</p>
                  <input className="w-full p-2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] text-[#330c04] focus:ring-2 focus:ring-amber-400 placeholder:text-sm px-3" placeholder="0000  0000 0000 0000" type="text" name="" id="" />
                </div>
                <div className="flex gap-5 mt-5 w-full">
                  <input className="w-full p-2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] text-[#330c04] focus:ring-2 focus:ring-amber-400 placeholder:text-sm px-3" placeholder="MM" type="month" name="" id="" />
                  <input className="w-full p-2 rounded-xl outline-1 outline-[#330c04] focus:outline-none bg-transparent placeholder:text-[#330c04] text-[#330c04] focus:ring-2 focus:ring-amber-400 placeholder:text-sm px-3" placeholder="CVV" type="text" name="" id="" />
                </div>
                <a href="/payment"><button className="text-white mb-3 mt-5 w-full bg-[#330c04] hover:bg-[#81483c] transition duration-300 rounded-3xl p-2">Pay</button></a>
              </div>
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