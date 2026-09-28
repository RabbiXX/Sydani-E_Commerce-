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
      <section className="bg-[#E8C6B5]">
        <div className="mx-auto max-w-5xl p-4 pt-9 flex justify-between">
          <div className="text-[#3d170f] text-2xl md:text-3xl">
            <p className="mb-10">Now stocking Olapex & <br /> Raegan Sinai!</p>
            <p className="font-bold">SHOP NOW</p>
          </div>
          <div className="bg-[#F7DED1] rounded-lg p-5 border-3 border-[#f4eae5] "><img className="h-35" src="/images/olapex.png" alt="" /></div>
        </div>
        <div className="outline-1 bg-[#f9eae2] pb-20 outline-[#f4eae5] w-full p-2">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center py-3 justify-between">
              <div>
                <a href="/home"><p className="text-gray-500 mb-4">Home <span className="text-black">/ All Categories</span></p></a>
                <p className="font-bold text-black text-4xl">Shop All</p>
                <small className="text-slate-800 font-bold">300 products</small>
              </div>
              <div>
                <button className="text-black p-2 rounded-lg bg-[#f4eae5]">Sort by: Featured</button>
              </div>
            </div>

            <hr className="mx-auto border-t-gray-600 pb-4" />

            <div className="grid grid-cols-3 md:grid-cols-4">
              <div className="hidden md:block md:col-span-1 text-[#3d170f]">
                <div className="mb-15">
                  <div className="flex pb-3 justify-between">
                    <p className=" text-xl">Category</p>
                    <p>^</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <input className="mr-1" type="checkbox" name="checkbox" id="checkbox" />
                      <p className="">Hair Essentials</p>
                    </div>
                    <div>65</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <input className="mr-1" type="checkbox" name="checkbox" id="checkbox" />
                      <p className="">Hair Tools</p>
                    </div>
                    <div>30</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <input className="mr-1" type="checkbox" name="checkbox" id="checkbox" />
                      <p className="">Bundled & Extensions</p>
                    </div>
                    <div>35</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <input className="mr-1" type="checkbox" name="checkbox" id="checkbox" />
                      <p className="">Care & Maintenance</p>
                    </div>
                    <div>30</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <input className="mr-1" type="checkbox" name="checkbox" id="checkbox" />
                      <p className="">Accessories</p>
                    </div>
                    <div>25</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <input className="mr-1" type="checkbox" name="checkbox" id="checkbox" />
                      <p className="">Wigs</p>
                    </div>
                    <div>15</div>
                  </div>
                </div>
                <div className="bg-pink-600 flex-col p-3 rounded-lg">
                  <p className="font-bold text-yellow-400 text-xl md:text-4xl leading-9 md:leading-13 pb-6 md:pb-15">Summer <br /> Seasonal <br />Sales!</p>
                  <p className="text-yellow-400 text-wrap md:text-nowrap text-center text-sm md:text-xl bg-amber-50 p-2 rounded-lg font-bold">Countdown: 5:32:00s</p>
                  <img src="/images/side-image.png" alt="" />
                </div>
              </div>

              <div className="col-span-3 md:pl-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category1.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/product-details"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category2.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category3.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category4.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category5.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category6.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category7.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category8.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                    <div className="bg-gray-100 rounded-t-lg relative">
                      <img className="h-40 mx-auto" src="/images/category3.png" alt="" />
                      <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                    </div>
                    <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                      <div className="flex justify-between">
                        <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                        <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                      </div>
                      <p className="text-black font-light">300</p>
                      <p className="font-bold text-green-700">$12.00</p>
                    </div>
                  </div>

                </div>
                <div className="flex justify-between pt-10 text-black cursor-pointer">
                  <div className="flex gap-1 hover:text-[#e06e34] transition duration-300">
                    <p>&#8592;</p>
                    <p>Previous</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <small className="bg-[#E8C6B5] p-1 px-2 rounded-sm">1</small>
                    <small>2</small>
                    <small>......</small>
                    <small>10</small>
                  </div>
                  <div className="flex gap-1 hover:text-[#e06e34] transition duration-300">
                    <p>Next</p>
                    <p>&#8594;</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="md:pl-10 py-10">
            <p className="pb-10 text-xl text-black font-bold">Explore more recommendations</p>
            <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-none snap-x snap-mandatory">
              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category10.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category11.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category12.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category4.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category7.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category5.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

              <div className="rounded-lg shadow-md min-w-[45%] md:min-w-[23%] shrink-0 snap-start">
                <div className="bg-gray-100 rounded-t-lg relative">
                  <img className="h-32 mx-auto" src="/images/category1.png" alt="" />
                  <img className="absolute top-5 right-5" src="/images/heart.png" alt="" />
                </div>
                <div className="p-2 cursor-pointer rounded-b-lg bg-white">
                  <div className="flex justify-between">
                    <p className="text-black font-bold w-4/5">Gisou Honey Infused Hair Oil</p>
                    <div className="w-1/5"><a href="/my-cart"><img className="h-8 border-2 border-black rounded-full p-1" src="/images/grocery-store.png" alt="" /></a></div>
                  </div>
                  <p className="text-black font-light">300</p>
                  <p className="font-bold text-green-700">$12.00</p>
                </div>
              </div>

            </div>

          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-black text-center font-bold text-xl pb-10">Shop by Brand</p>
            <div className="flex flex-col gap-8">
              <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                <img className="h-20 w-40 object-contain bg-white mx-auto p-3 rounded-sm" src="/images/brand1.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-1 rounded-sm" src="/images/brand2.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-3 rounded-sm" src="/images/brand3.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-3 rounded-sm" src="/images/brand4.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-3 rounded-sm" src="/images/brand5.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-3 rounded-sm" src="/images/brand6.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-3 rounded-sm" src="/images/brand7.png" alt="brand" />
                <img className="h-20 w-40 object-cover bg-white mx-auto p-3 rounded-sm" src="/images/brand8.png" alt="brand" />
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