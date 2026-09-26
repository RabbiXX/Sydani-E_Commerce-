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
            <a href=""><img className="hidden md:block h-6 invert brightness-200" src="/images/user-icon.svg" alt="" /></a>
            <a href="/empty-cart"><img className="h-6 invert brightness-200" src="/images/grocery-store.png" alt="" /></a>
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
        <div className="max-w-6xl p-2 md:p-5 mx-auto">
          <div className="flex flex-col items-center justify-center relative">
            <div className="absolute left-10 md:left-18 top-22 z-10">
              <p className="text-black md:text-3xl p-1 md:p-2 rounded-3xl bg-[#E19BA7]">Hot Tools, Hot Deals 🔥</p>
              <p className="text-black md:text-3xl md:mt-5 font-bold">Save up to 30% off</p>
              <small className="text-black md:text-lg">On selected hair equipment</small>
              <p className="text-white hidden p-2 md:block w-30 bg-black mt-4">Shop the deal</p>
            </div>
            <p className="text-[#5A3A33] text-xl md:text-2xl font-bold pt-3">Everything Hair. All in One Place</p>

            <div className="p-4 w-full relative overflow-hidden">

              <div className="w-full overflow-hidden rounded-4xl border-2 border-white">

                <div className="flex w-full animate-auto-slide">

                  <div className="w-full shrink-0 h-64 md:h-150">
                    <img className="w-full h-full object-cover" src="/images/hair-tools-bg.jpg" alt="Slide 1" />
                  </div>

                  <div className="w-full shrink-0 h-64 md:h-150">
                    <img className="w-full h-full object-cover" src="/images/wig-bg.jpg" alt="Slide 2" />
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="">
            {/* row one */}
            <div>
              <p className="text-xl text-[#330c04] font-semibold p-2">Trending Deals &#8594;</p>
              <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-4 ">

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/trending1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] transition duration-250">5*5 200% Brown Density Body wave</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$27.89</p>
                      <div className="w-27 px-1 flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">55% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/trending2.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1 Pack Black Afro Kinkys Bulk Hair 12/16 Inch</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$17.89</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">59% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/trending3.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc/3pcs multicolor Synthetic Hair Extensions, Sew-In</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$1.39</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">57% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/trending4.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc Adjustable  Hair Curler Rotatable Power</div>
                    <p className="text-white w-22 px-1 bg-[#FF806D]/70">Best Seller</p>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$12.49</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* row two */}
            <div>
              <p className="text-xl mb-2 text-[#330c04] font-semibold p-2">Wigs &#8594;</p>
              <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-4  ">

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/wigs1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">5*5 200% Brown Density Body wave</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$27.89</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">25% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/wigs2.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1 Pack Black Afro Kinkys Bulk Hair 12/16 Inch</div>
                    <p className="text-white w-22 px-1 bg-[#FF806D]/70">Best Seller</p>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$30.89</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">11% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/wigs3.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc/3pcs multicolor Synthetic Hair Extensions, Sew-In</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$47.59</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">15% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/wigs4.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc Adjustable  Hair Curler Rotatable Power</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$12.99</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* row three */}
            <div>
              <p className="text-xl mb-2 text-[#330c04] font-semibold p-2">Hair Accessories &#8594;</p>
              <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-4  ">

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">17% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/accessory1.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">5*5 200% Brown Density Body wave</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$15.89</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">21% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/accessory2.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc Adjustable  Hair Curler Rotatable Power</div>
                    <p className="text-white w-22 px-1 bg-[#FF806D]/70">Best Seller</p>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$7.50</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">40% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/accessory3.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc Adjustable  Hair Curler Rotatable Power</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$15.29</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-xl pb-3 flex-col p-1 md:p-2 bg-white md:rounded-3xl  text-black outline-1 outline-[#98746b]">
                  <div className="relative">
                    <div className="absolute right-0 top-4 bg-[#F1B08F]/70 text-black px-5 py-1 font-bold">41% OFF!</div>
                    <img className="h-65 rounded-xl md:rounded-3xl md:h-80 w-full object-cover" src="/images/accessory4.jpg" alt="" />
                  </div>
                  <div className="pt-3 px-2">
                    <div className="text-lg font hover:text-[#c63316] cursor-pointer transition duration-250">1pc/3pcs multicolor Synthetic Hair Extensions, Sew-In</div>
                    <div className="flex flex-col justify-between pt-3">
                      <p className="text-xl mb-2 font-semibold cursor-pointer">$21.39</p>
                      <div className="w-27 px-1 md:full flex justify-between p-1 border-2 rounded-4xl cursor-pointer hover:bg-[#c63316] hover:border-[#c63316] transition-all duration-300">
                        <a href=""><p className="pr-2 text-sm">Add to cart</p></a>
                        <img className="h-5" src="/images/grocery-store.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </section>

      <footer className="bg-[#3d170f]">
        <div className="underline text-center p-2 text-xl cursor-pointer">Learn More</div>
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