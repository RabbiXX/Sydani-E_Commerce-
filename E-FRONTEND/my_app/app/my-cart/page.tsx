export default function MyCartPage() {
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
        <div className="max-w-6xl mx-auto py-2 px-3 flex-col md:flex items-center justify-between">
          <p className="text-2xl mb-1 text-center md:text-4xl italic font-bold text-[#330c04]">My Cart Page <span className="text-lg text-[#330c04]">&#40; 3 items &#41;</span></p>
          <img className="mx-auto" src="/images/status1.png" alt="" />     
        </div>
        <div className="max-w-6xl grid grid-rows md:grid-cols-3 gap-5 p-2 md:p-3 mx-auto">
          <div className="flex flex-col gap-5 md:col-span-2">

            <div className="w-full p-5 rounded-xl bg-[#F7F3EA]" >

              <div className="p-3 flex gap-3 flex-col">

                <div className="p-3 grid-cols-2 md:grid-cols-3 gap-3 flex rounded-xl cursor-pointer justify-between bg-[#ead6cc]">
                  <div className="col-span-1"><img className="mid:h-20 w-35 object-cover rounded-lg" src="/images/accessory1.jpg" alt="" /></div>
                  <div className="grid col-span-2 md:col-span-1 text-small md:text-base">
                    <div className="mr-7">
                      <p className="text-[#330c04]">1pc/3pcs multicolor Synthetic Hair Extensions, Sew-In</p>
                      <small className="text-[#433f3c]">Seller: Fajiahstore</small>
                    </div>
                    <div><input className="focus:outline-hidden text-center rounded-2xl w-10 outline-2 outline-[#ef9364] bg-[#F1B08F] text-black placeholder:text-black" type="number" name="amount" placeholder="1" /></div>
                    <div className="md:hidden flex justify-between">
                      <p className="text-[#330c04]">$3.99</p>
                      <img className="h-4 w-5 mx-auto" src="/images/trash-2.png" alt="" />
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col col-span-1 justify-between">
                    <p className="text-[#330c04]">$3.99</p>
                    <img className="h-4 w-5 mx-auto" src="/images/trash-2.png" alt="" />
                  </div>
                </div>

                <div className="p-3 grid-cols-2 md:grid-cols-3 gap-3 flex rounded-xl cursor-pointer justify-between bg-[#ead6cc]">
                  <div className="col-span-1"><img className="mid:h-30 w-35 object-cover rounded-lg" src="/images/accessory2.jpg" alt="" /></div>
                  <div className="grid col-span-2 md:col-span-1 text-small md:text-base">
                    <div className="mr-7">
                      <p className="text-[#330c04]">1pc/3pcs multicolor Synthetic Hair Extensions, Sew-In</p>
                      <small className="text-[#433f3c]">Seller: Fajiahstore</small>
                    </div>
                    <div><input className="focus:outline-hidden text-center rounded-2xl w-10 outline-2 outline-[#ef9364] bg-[#F1B08F] text-black placeholder:text-black" type="number" name="amount" placeholder="1" /></div>
                    <div className="md:hidden flex justify-between">
                      <p className="text-[#330c04]">$3.99</p>
                      <img className="h-4 w-5 mx-auto" src="/images/trash-2.png" alt="" />
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col col-span-1 justify-between">
                    <p className="text-[#330c04]">$3.99</p>
                    <img className="h-4 w-5 mx-auto" src="/images/trash-2.png" alt="" />
                  </div>
                </div>

                <div className="p-3 grid-cols-2 md:grid-cols-3 gap-3 flex rounded-xl cursor-pointer justify-between bg-[#ead6cc]">
                  <div className="col-span-1"><img className="mid:h-30 w-35 object-cover rounded-lg" src="/images/accessory3.jpg" alt="" /></div>
                  <div className="grid col-span-2 md:col-span-1 text-small md:text-base">
                    <div className="mr-7">
                      <p className="text-[#330c04]">1pc/3pcs multicolor Synthetic Hair Extensions, Sew-In</p>
                      <small className="text-[#433f3c]">Seller: Fajiahstore</small>
                    </div>
                    <div><input className="focus:outline-hidden text-center rounded-2xl w-10 outline-2 outline-[#ef9364] bg-[#F1B08F] text-black placeholder:text-black" type="number" name="amount" placeholder="1" /></div>
                    <div className="md:hidden flex justify-between">
                      <p className="text-[#330c04]">$3.99</p>
                      <img className="h-4 w-5 mx-auto" src="/images/trash-2.png" alt="" />
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col col-span-1 justify-between">
                    <p className="text-[#330c04]">$3.99</p>
                    <img className="h-4 w-5 mx-auto" src="/images/trash-2.png" alt="" />
                  </div>
                </div>

              </div>

            </div>

            <div className="w-full flex justify-center cursor-pointer items-center rounded-xl py-3 p-2 bg-[#F7F3EA] hover:bg-[#c26454] transition duration-300">
              <div className="flex">
                <img className="mr-2" src="/images/plus-circle.png" alt="" />
                <p className="text-[#330c04] font-bold" >Add Another Item</p>
              </div>
            </div>

          </div>

          <div className="w-full md:col-span-1">
            <div className="text-black w-full p-3 mb-5 rounded-xl bg-[#F7F3EA]">
              <p className="font-bold text-xl">Summary</p>
              <div className="flex justify-between text-[#330c04]">
                <p>Subtotal</p>
                <p>$13,003.87</p>
              </div>
              <div className="flex justify-between text-[#330c04]">
                <p>Saved</p>
                <p>-$4,203.17</p>
              </div>
              <div className="flex justify-between text-[#330c04]">
                <p>Promo</p>
                <p>Entry</p>
              </div>
              <div className="flex justify-between text-[#330c04]">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <div className="flex pt-3 justify-between text-[#330c04]">
                <p className="font-bold">Total</p>
                <p className="font-bold">$8,451.76</p>
              </div>
              <a href="/shipping-address"><button className="text-white mb-3 mt-5 w-full bg-[#330c04] hover:bg-[#81483c] transition duration-300 rounded-3xl p-1">Place Order</button></a>
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