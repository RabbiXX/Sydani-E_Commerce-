import styles from "./product.module.css";
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
            <a href="/home">
              <img
                className="hidden md:block"
                src="/images/stacked-logo.png"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center flex-1 p-1 md:max-w-3xl">
            <img
              className="h-6 mr-3 invert brightness-200 md:hidden"
              src="/images/user-icon.svg"
              alt=""
            />
            <div className="flex flex-1 md:max-w-3xl mx-auto overflow-hidden bg-white rounded-full shadow-sm h-10 items-center">
              <img
                className="h-5 pl-2 opacity-60 mr-2 bg-white rounded-s-4xl"
                src="/images/search.svg"
                alt=""
              />
              <input
                className="bg-transparent text-slate-800 focus:outline-none w-full"
                type="input"
                placeholder="Search for extensions"
              />
            </div>
          </div>

          <div className="flex gap-5 invert-brightness-200">
            <a href="/empty-cart">
              <img
                className="hidden md:block h-6 invert brightness-200"
                src="/images/user-icon.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="h-6 invert brightness-200"
                src="/images/grocery-store.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="h-6 invert brightness-200"
                src="/images/world-icon.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
      {/* 
      <main className="container">
        <section className="product-main">
          <div className={styles['product-gallery']}>
            <div className={styles['main-image']}>
              <img  src="images/main-image.jpg" alt="" />
              <span className="heart-icon"></span>
            </div>
          </div>
        </section>
      </main>  */}

      <main className={styles["page-container"]}>
        <section className={styles["product-main"]}>
          <div className={styles["gallery-container"]}>
            <div className={styles["thumbnails"]}>
              <div className={styles["thumb"]}>
                <img src="images/side-image 1.jpg" alt="" />
              </div>
              <div className={styles["thumb"]}>
                <img src="images/side-image 2.jpg" alt="" />
              </div>
              <div className={styles["thumb"]}>
                <img src="images/side-image 3.jpg" alt="" />
              </div>
              <div className={styles["thumb"]}>
                <img src="images/side-image 4.jpg" alt="" />
              </div>
              <div className={styles["thumb"]}>
                <img src="images/side-image 5.jpg" alt="" />
              </div>
              
            </div>
            
          </div>
          <div className={styles["main-image"]}>
            <div>
              {" "}
              <img src="images/main-image.jpg" alt="" />
               <button>
              {" "}
              <a href="">Add to cart</a>
            </button>
            <div className={styles["wishlist-heart-btn"]}>
              {" "}
              <a href="">
                {" "}
                ♡Add to wishlist<i className={styles["far fa-heart"]}></i>
              </a>
            </div>
            </div>
           
          </div>

          <div className={styles["product-details"]}>
            <h1 className={styles["product-title"]}>
              Gisou Honey Infused Hair Oil <br />
              <span className={styles["volume"]}>(0.7 FL Oz)</span>
            </h1>
            <p className={styles["product-description"]}>
              Intense hydration,long-lasting frizz control,up to 450F heat
              protection,glossy shine, suitable for all hair types.
            </p>
            <div className={styles["rating-row"]}>
              <span className={styles["rating-num"]}>5.0</span>
              <span className={styles["stars"]}>★★★★★</span>
              <span className={styles["reviews-count"]}>(100)</span>
            </div>
            <div className={styles["brand-link"]}>
              Brand: Gisou | <a href="#">Search for similar products</a>
            </div>
            <div className={styles["tax-info"]}>
              Tax inclusive $50.00 Tax exclusive $48.00
            </div>
            <div className={styles["price"]}>$50.00</div>
            <div className={styles["purchase-actions"]}>
              <div className={styles["quantity-selector"]}>
                <a href="" className={styles["hero-btn"]}>
                  - 1 +
                </a>
                {/* <input type="number" value="1" min="1" />  */}
              </div>
            </div>
            <div className={styles["pickup-info"]}>
              <p>✓ Pickup available at Hair Haven HQ IDU</p>
              <a href="#">See more on delivery details below</a>
            </div>
          </div>
        </section>

        <section className="prod1-main">
          <div className={styles["prod-main"]}>
            <div className={styles["checkout-summary"]}>
              <h3>Shipping address</h3>
              <div className={styles["summary-line"]}>
                <span>Subtotal</span>
                <span>$13,003.87</span>
              </div>
              <div className={styles["summary-line text-green"]}>
                <span>saved</span>
                <span>-$4,552.11</span>
              </div>
              <div className={styles["summary-line"]}>
                <span>Promo code</span>
                <span className={styles["badge"]}>Entry</span>
              </div>
              <div className={styles["summary-line"]}>
                <span>Shipping fee</span>
                <span className={styles["text-green"]}>Free</span>
              </div>
              <hr className={styles["hr"]} />
              <div className={styles["summary-line"]}>
                <span>Total</span>
                <span>$8,451.76</span>
              </div>
              <a href="" className={styles["hero1-btn"]}>
                Place Order
              </a>
              <p className={styles["terms-text"]}>
                Upon clicking 'place order', I confirm I have read and
                acknowledged <br /> all{" "}
                <span className={styles["text-blue"]}>terms and policies</span>.
              </p>
            </div>
          </div>

          <div className={styles["reviews-section "]}>
            <h2>Customer Reviews (+100)</h2>
            <div className={styles["reviews-layout"]}>
              <div className={styles["reviews-summary-box"]}>
                <div className={styles["big-rating"]}>
                  5.0 <span className={styles["stars-small"]}>★★★★★</span>
                </div>
                <a href="#" className={styles["review-policy"]}>
                  Review Policy
                </a>
                <div className={styles["tags-container"]}>
                  <span className={styles["tag "]}>Tags: Great smell</span>
                  <span className={styles["tag"]}>Nice gift</span>
                  <span className={styles["tag"]}>Good packaging</span>
                  <span className={styles["tag"]}>Elegant</span>
                  <span className={styles["tag"]}>Nice</span>
                  <span className={styles["tag"]}>Really pretty</span>
                </div>
              </div>
              <div className={styles["reviews-list"]}>
                <div className={styles["review-item"]}>
                  <div className={styles["review-meta"]}>
                    tina***** | 19 Sept 2026
                  </div>
                  <div className={styles["stars-small"]}>★★★★★</div>
                  <p>Good quality product</p>
                </div>
                <hr />
                <div className={styles["review-item"]}>
                  <div className={styles["review-meta"]}>
                    e***k | 19 Sept 2026
                  </div>
                  <div className={styles["stars-small"]}>★★★★★</div>
                  <p>
                    Would definitely buy again. It smells so nice and fragrant!
                  </p>
                </div>
                <hr />
                <div className={styles["review-item"]}>
                  <div className={styles["review-meta"]}>
                    husb**** | 19 Sept 2026
                  </div>
                  <div className={styles["stars-small"]}>★★★★★</div>
                  <p>This brand can take all my money o</p>
                </div>
                <hr />
                <div className={styles["review-item"]}>
                  <div className={styles["review-meta"]}>
                    husb**** | 19 Sept 2026
                  </div>
                  <div className={styles["stars-small"]}>★★★★★</div>
                  <p>This brand can take all my money o</p>
                </div>
                <a href="" className={styles["hero3-btn"]}>
                  View more reviews
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["recommendations-section"]}>
          <div className={styles["container-recommendations"]}>
            <h2 className={styles['text-rec']}>You may also like:</h2>
            <div className={styles["product-row"]}>
              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec1.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Olaplex No. 3 Hair Perfector 🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(100)</span>
                  <p className={styles["card-price"]}>$28.00</p>
                </div>
              </div>

              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec2.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Moroccanoil Treatment  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(200)</span>
                  <p className={styles["card-price"]}>$44.00</p>
                </div>
              </div>

              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec3.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Gisou Honey Infused Hair Oil  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(300)</span>
                  <p className={styles["card-price"]}>$12.02</p>
                </div>
              </div>

              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec3.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Gisou Honey Infused Hair Oil  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(300)</span>
                  <p className={styles["card-price"]}>$12.02</p>
                </div>
              </div>
              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec3.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Gisou Honey Infused Hair Oil  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(300)</span>
                  <p className={styles["card-price"]}>$12.02</p>
                </div>
              </div>

              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec3.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Gisou Honey Infused Hair Oil  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(300)</span>
                  <p className={styles["card-price"]}>$12.02</p>
                </div>
              </div>
              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec3.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Gisou Honey Infused Hair Oil  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(300)</span>
                  <p className={styles["card-price"]}>$12.02</p>
                </div>
              </div>

              <div className={styles["product-card"]}>
                <button className={styles["card-heart"]}>
                  <i className={styles["far fa-heart"]}></i>
                </button>
                <img src="images/rec3.png" alt="Product" />
                <div className={styles["card-info"]}>
                  <h4 className={styles["card-title"]}>
                    Gisou Honey Infused Hair Oil  🛒
                  </h4>
                  <span className={styles["card-reviews"]}>(300)</span>
                  <p className={styles["card-price"]}>$12.02</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

<section>
<head><link rel="stylesheet" href="https://cloudflare.com" /></head>
  <div className={styles['icon-container']}>
    
    <a href="#" className={styles['icon-item']} aria-label="Facebook"><img src="images/facebook.jpg" alt="Facebook"/></a>
    <a href="#" className={styles['icon-item']} aria-label="Twitter"><img src="images/twitter.png" alt="Twitter"/></a>
    <a href="#" className={styles['icon-item']} aria-label="LinkedIn"><img src="https://img.magnific.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?semt=ais_hybrid&w=740&q=80" alt="LinkedIn"/></a>
    <a href="#" className={styles['icon-item']} aria-label="Instagram"><img src="data:image/jpeg;base64,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" alt="Instagram"/></a>

    
    <div className={styles['icon-item']}><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwQMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAECBAP/xABGEAABAwMBBAYFBwkHBQAAAAABAAIDBAURBgcSIUETFDFRYYEVInGRoRdCcoKSk6IjJDKUsbLC0dIWM1JVYmXBRVNjw+H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAJhEAAgICAQUAAgIDAAAAAAAAAAECAwQREhMhMUFRIjJhcRRCUv/aAAwDAQACEQMRAD8AvFERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBFQc+1fWNNM6CpiooZm/pRy0b2Ob7QXZC6fK5qvvtv6s7+taP8aZHki/0VCQbX9UMla6WO2ysB9ZhgcMj2h/BW5ovVNLqyziup4zDKx3R1EDnZMb8Z7eYIIIP7CCBCdM4LbPVJMz6IiqPQigW1HWtXpcUNNaugNZUF0j+lZvBsY4dmRxJPD6JUC+VnVP+3fq7v6lfDHnOPJEHNJ6L6RVLoXXWqNSalprfJ1EUwDpahzICCI293rcyWjzU517fJtO6YqbhSCM1LXMZEJBluXOAOR7MnyUZUyjNQ9s9Uk1skKKh/lY1R/t/wCrn+pZHTu0fVF2v1vt56hu1FQxj92nIO5n1iPW7d3JVrxLEtkeqi50RY2+3222Cj61dalsLCcMb2ukPc1o4lZkm3pFm9GSRU/etrtbK9zLJb4oI88Jar13kfRBAafNyjM2vtVTvJfeZWg/NjjjaB7mrXHCtfnsVO6KNhkWu8euNURnLb3U5/1NY79rVmrdtWv1Jjr0dLWxgcS5nRvPm3h+FevAtXjTPFfEu5F8aOZ9RRwTSxdE+SNr3R5zuEjJGeeF9liLgi+FbVwUNHNV1TxHBAwySOPJoGSqiuW1e7zVLjbKWlp6YH1BMwveR3kggD2Ds7yrqced36kJ2Rh5LkRUh8qGpu+g/Vz/AFKU7O9b3O/3qWguvVsdXMkZijLeILQR2nkfgrZ4VsIuT9EI3Rk9FjIiLIXGOvVitd9pur3ehhqo/m77fWZ4tcOLT4gha+bQ9KjSd+6tA98lFUM6Wne/tAzgsPeRw49xC2UVY7d7b09hoLk1uX0lR0bj3MkH9TWe9aMebUteiMl2KSVn7B63o75c6Ek/nFK2UDl+Tdj/ANnwVYKWbLK40Wu7Wc4ZO58D/EOYcfiDVstW4NEF5Nj0RRXaZfPQWkauWN+5U1I6tTkHBDn5yR4hu87yXNjFyaSLX2KS1ze/7Qaprq9jt6Df6Gn7ujZwBHgTl31lgguo4AY4L22e3TXe60ltpsiWqlbGCPmg9rvIZPkuwkorXwzPuXFsUsfUrFPdpmETV78R5HZEwkD3u3j4jdXk261wbQWm3A8ZZnznHcxu6M/efBWXQ0kNBRQUdKzcggjbHG3ua0YCo7bNXda1l1dr8to6ZkZb3POXn4OasNL6l/Itl2hogym+x2h63rSOdzSW0dPJMDyDjhg+Dz7lCFbuwmhApbtcSOL5WU7fDdG8f3x7lsyJcamUwW5IsS/3ensVnqrnV5MVOze3R2vd2NaPEkgea1yvt6rr/cpa+4yb8r+DWg+rG3k1o5AfHtPFWjtyqnstFspGuIbNUOkcBzDG4x73g+Sp0KvCrShz9slbLvo7L0UlFWVgJoqOpqQ04PQQukwfILJ6JoaO5arttHciOqyykPaTgPIaS1ufFwA88LY6GKKCJkMEbI4mDDWMaAGjuAHYrL8npNLWyMK+RrFU26vpGF9XQVdOwdrpqd7APMhfSx0Yud5oKIAPbUVDI3DPzS4b3wytnFi36ds77pBc/R0Da6BxcyaNu47JBHHH6XAntyqVn9ntEuh/JlERFzTQV1tlvPV7VT2iJ35Srd0koHKNp4Dzdj7JVQLM6zvXp7UtZXMdvQb3R0/d0beAI9vF31liIY3zTRwxNLpJHBjGjm4nAHvX0GNX0qkjBZLlLZwFn9BVnUdY2qUuw183Qu8d8Fg+JHuWGraZ9FW1FJLjpKeV8T8dmWkg/sXzjlfTyMnh/vInB7PpA5HxCuklODX0rT09m0KKLf27s3/eH2gi+d6Vnw6PJfSUrBa5thvGkbrQsaHSPp3OiB5yN9Zn4mhZ1FBPT2SNQ2kOaCOwjIXqttZ6PuVHXcfzWojn4c9xwd/wvVqe3eiNSXO3Boa2nqXtjaOTCcs/CWrGEZGDzXWWmik26BDgCDkHiCqN22Xvr2oobVE/MNvjzIAe2V4B+Dd37RVnafvsTNntFe6x2WQ25ss5bzcxnrAeOQQtcq6rmuFbUVtUcz1ErpZMdm845OPDiseNX+bb9E5vsfMK0th1j6aurL5M31KcdXp8/wCMjLz5N3R9YqrWBznBrGue4nDWtGS4nkFs7o+yt09puhtowZIo8zOHzpDxefeTjwwr8mfGGvpCC2zMrWDVVcblqe61uQ4S1Um4e9gO638IC2O1FX+irBca/nTU0kjR3kNJA9+Fq2xoYxrR2AYVeFHzI9tfo7hbCbKqHqWh7fvAB9RvzuxzDnEt/DurXtrHyERxNLpHndY0cyewLam20jKC3UtFEAI6eFkTQO5oAH7FPNl+KRGpd9kI2z2qWt03FXQNLnUE2/IB29G4YcfI7pPgCqRW1j2NkY5kjQ5jhhzXDII7iqX1zs1q7dLLXaeifU0Jy51M31pIfojtc34jx7V5iXxS4SFsG+6K9BIIIJBHEEclYeldqdfb2spr7G6vpxwE7SBM0eOeD/PB8Sq7HaRzBwVyt0642LUkUqTj4Nm7JfLbfqTrNqqmTxjg4Dg5h7nNPEH2rIrV613KstNbHW26ofBUM7Ht5juI5jwKv3Q2qodVWozbjYqyAhlTCDwaT2OH+k4OPYRyXMyMV1fku6NELOXZkkUU2l3r0NpWo6N+7U1f5vDg8RvA7x8mg8e/Clao3a1evSWpupxOzBb29GMdhkOC8/ut9rSo4tfUtXxHtsuMSFDgplsqtPpLVcU0jcw0LDO7PZv9jB7yXfVUNV3bIbT1DTJrpG4lr5Ok8ejbwaP3j9ZdTLs4VP8AnsZao8porzaXRmi1pX8MMn3J2exzQD+IOUYVk7bKPcuFrrg3+9ifC530SHNH43KtgrMWXKmLI2rU2ebqY/xn3IvSi08mU8UbRoiL5U6xQ23C29U1ZDXNaAyvpgSe+SP1XfhMar1Xnt0t3WdLU9e0etRVLd44+Y/1SPtFnuVGLpUS3BFcl3JfLqfGzGk07E/8q6uk6Uf+IOEg973j7DlEguFyrYpLwRZNdkljF41dFPKzeprc0VD8jgX5xGPfl31FsIoTsisXojSUVRKzdqbgesPz2hpHqD7ODjvcVNlz8ifKf9FkVpEG2y14pNFSQBxD6yojhbjwO+fgwjzVCK1NvFfvVVptzXDDGSVEjfaQ1h+D1VYW3Fjqv+yqzyZ/QVD6R1nZ6cgloqRK72Rgv/hx5rZVUjsPoen1LW1p4tpaXd+s93A+5jverrmkZDC+WQ4Yxpc49wCzZct2a+E612O6KA6f2rWK5RxtuYktlQ4DIlBfHnweBw+sAplRXa218YkobhS1DD86GZrh8Cs865w/ZE1JPwYfU+iLLqMOkqafoKw9lVBhr/rcneefDCpDVem63S9z6lWlsjXt34Z2DDZW9+ORHMcvMFbE1lyoKGEzVtbT08Q7XyytaPiqQ2o6oo9SXWlZbSX0tEx7RMQR0jnFucA8hujB58eWCdmHOzlx9FVqjrfshinGx6rkp9YNga49HUwPY5vIkesD5bp95UHU+2M0D6nVMtZu/kqSndl3c95w0e4P9y25GulLZTD9kW5qS7R2Ox1lykwegjJY0nG888Gt8yQFrXJJJNI+WZ5fLI4ve89rnE5J96s/bVesyUdjhdwH5zUY8wwfvHH0VVqrwa+NfJ+z26W5aOzQHEBzi1pOC4DJA78c1c9JtN0xR0sNLTwV7YYY2xxtELeDQMAfpdwVLrlaLaI265eiuE3DwWLtC1lZtTWaGmomVbaiGoErTJGACMEEZz4/BV6uAuVOquNUeMSM5OT2zlFwitIG0iIi+XOoYnVdsN501c7c0AvqKZ7Y88n4y0+TsFasMcHta4dhGQtvVTty2N1tTcqyoprtSxwTTySRxuhdljXOJDe3kDhaseyMU1IjJbKmWa0fZDqLUlDbCCYpZN6cjlE3i72ZAxnvIU2+RW5/5zR/cu/mpjs50C7SVTWVdZVRVVTMxscbo4y3o2Zy4ce87v2Qr55EFF8X3IqLJy1oa0NaAGgYAHJcoi5xYa8bV67r2uq8draVsdO055Bu8fxPcoirXueyS63C51la+8UgdU1EkxBidw3nF2O3lnC83yM3P/OKT7l3811IXVRilspcZNmf2HUHQadra5wG9VVW6097GAAfiL1I9o9d1DRF2lyQZIOgGO3MhDP4l7dI2Uad07R2rpGyOga7fe0YDnOcXE+8ld9S2Gj1Ja3W64OmbEXB4dC/dcCOw8wfYQQsMpp3cn42WJPjo1jXUsa79JoPtCta47G52uc62Xhj2/NjqYSD5uaf4VhZNk+qGHh6Pk8WVDv+WhdOORU/9jO4S+EFaxjTlrGg+AXcKbxbKNUPPH0fH4vqHf8ADSs/atjvrtfd7tlvOKkjwftu/pXryal7POnJ+itLbQVd0rYqK3wPnqZT6rG/tPcBzJ4LYDSNhptHaddHNKwvAM9ZUcsgcfqgDh7+a99i0/atP05gtNIyAO/Tfxc9/wBJx4lfHV9qrL3Yai20FTHTPqMNfI8E+pnJHDv7PYSsN2R1mo+Il0K+K37Nfr7dJL1eay5TAh1TKXBp7Wt7GjyaAPJeFWQNj9yH/V6T7p3819KfZBWdYi61dKZ8G+3pWtjcC5meIBz24yt6yaEtJlDqm/R79K7NbVW6eoay69ZFVUR9K4RyboAdxaMY7d0jPjlZb5K9Od9b98P5KbtAa0NaAABgAclyuXLJtb3yNKrjrwQf5K9Od9b9/wD/ABU/eqI228V1DxxT1D4257S0E4PmMFbMKuNV7Nqm9agqrlS18ELKjdJjfGSQQ0NPZ7FpxcpqT6kuxVbVtfiiokVjfJFcf81pfunfzXK3/wCXR/0UdKfwt1ERcA3hERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==" alt="Visa"/></div>
    <div className={styles['icon-item']} ><img src="data:image/png;base64,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" alt="Shop Pay"/></div>
    <div className={styles['icon-item']}><img src="data:image/png;base64,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" alt="Mastercard"/></div>
    <div className={styles['icon-item']}><img src="data:image/png;base64,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" alt="Apple Pay"/></div>
    <div className={styles['icon-item']}><img src="data:image/png;base64,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" alt="Google Pay"/></div>
  </div>
</section>





      <footer className="bg-[#3d170f]">
        <div className="underline text-center p-2 text-lg cursor-pointer">
          Learn More
        </div>
        <div className="grid grid-cols-2 gap-5 md:flex justify-between p-5">
          <div>
            <img src="/images/stacked-logo.png" alt="logo" />
            <a href="">
              <div className="text-sm p-1 text-center md:p-3 md:text-base md:w-full rounded-3xl bg-amber-900 hover:bg-amber-500 transition duration-300">
                DOWNLOAD THE APP
              </div>
            </a>
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
        <div className="text-center text-nowrap p-1 text-md cursor-pointer">
          &#169; Hair Haven. All rights reserved
        </div>
      </footer>
    </main>
  );
}
