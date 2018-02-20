import Link from 'next/link'
import { connect } from 'react-redux'
// OLD STUFF
  // import Clock from './Clock'
  // import AddCount from './AddCount'
  // <div>
  //   <h1>{title}</h1>
  //   <Clock lastUpdate={lastUpdate} light={light} />
  //   <AddCount />
  //   <Link href={linkTo}><a>Navigate</a></Link>
  // </div>

export default connect(state => state)(({ }) => {
  return (
    <div>
      <div>
        <nav>
          <aside>
            <ul>
              <li><a href="/"></a></li>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/company">Our Company</a></li>
              <li><a href="/community">Our Community</a></li>
            </ul>
          </aside>
          <main>
            <ul>
              <li><a href="https://spankchain.com/static/whitepaper.bbff96f5.pdf">Whitepaper</a></li>
              <li><a href="/token">
                  <button>
                    <p>Token</p>
                  </button></a></li>
            </ul>
          </main>
        </nav>
        <nav>
          <div><a href="/"></a>
            <nav>
              <div>
                <button></button>
              </div>
            </nav>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <div>
            <aside>
              <h1>Adult Entertainment on the Blockchain</h1>
              <p>A cryptoeconomic powered adult entertainment ecosystem built on the Ethereum network.</p>
              <div><a href="https://discord.gg/S42CBSg" target="_blank">
                  <p>Join our Discord</p></a><a href="products/#kaydenKross" target="_blank">
                  <p>Learn More</p></a></div>
            </aside>
            <div>
              <img src="/static/newBg.90e6c8fb.png"/>
            </div>
            <div></div>
          </div>
          <section>
            <section></section>
            <section>
              <p>Why you'll love us</p>
            </section>
            <div>
              <div>
                <p>Lowest Fees</p>
                <p>Proprietary in-browser micropayment processor</p>
              </div>
              <div>
                <p>No Chargebacks</p>
                <p>A new financial ecosystem on the blockchain</p>
              </div>
              <div>
                <p>Anonymous</p>
                <p>Completely anonymous user profiles and payments</p>
              </div>
              <div>
                <p>Safe &amp; Secure</p>
                <p>Decentralized platforms can't freeze your account</p>
              </div>
            </div>
            <div>
              <a href="/products">
                <section>
                  <header>
                    <p>Our Products</p>
                    <p>Micropayment technology</p>
                  </header>
                  <div><img src="/static/micropayments.7e585ac0.svg"/></div>
                </section></a><a href="/community">
                <section>
                  <header>
                    <p>Our Community</p>
                    <p>Become a model</p>
                  </header>
                  <div><img src="/static/model.06d62776.png"/></div>
                </section></a><a href="/token">
                <section>
                  <header>
                    <p>Our Token</p>
                    <p>Tokenomics</p>
                  </header>
                  <div><img src="/static/tokenomics.6e68ac8b.svg"/></div>
                </section>
              </a>
            </div>
            <hr/>
            <div>
              <div>
                <section>
                  <p>Questions or Comments?</p>
                </section>
                <section>
                  <h1>Get in Contact with us today.</h1>
                  <div><a href="https://discord.gg/S42CBSg" target="_blank">
                      <button>
                        <p>Join our Discord</p>
                      </button></a><a href="https://spankchain.typeform.com/to/FGfdB8">
                      <p>Contact Us</p></a></div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <a target="_blank" href="https://www.huffingtonpost.com/entry/an-untouched-space-desperately-in-need-of-blockchain_us_59f031aae4b04809c050124b">
              <img/>
            </a>
            <a target="_blank" href="http://www.ibtimes.com/beyond-bitcoin-blockchain-tokens-sex-industry-2601252">
              <img/>
            </a>
            <a target="_blank" href="https://www.forbes.com/sites/zarastone/2017/10/25/how-spankchain-an-x-rated-blockchain-plans-to-provide-pornstars-with-better-payment-plans/#62cf0b4a3659">
              <img/>
            </a>
            <a target="_blank" href="https://www.criptonoticias.com/aplicaciones/pronto-lanzaran-mercado-descentralizado-entretenimiento-adultos-basado-blockchain/">
              <img/>
            </a>
          </div>
          <div></div>
        </div>
        <section>
          <footer>
            <aside>
              <label for="newsletter">
                <p>Sign up for our Newsletter</p>
              </label>
              <form action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post">
                <input type="text" name="email"/>
                <br/>
                <input type="hidden" name="thankyou_url" value="https://spankchain.com"/>
                <input type="hidden" name="campaign_token" value="4Rjkh"/>
                <button type="submit" value="Subscribe"></button>
              </form>
            </aside>
            <main>
              <ul>
                <li><a href="/products">Products</a></li>
                <li><a href="/products/#payment">Payments</a></li>
                <li><a href="/products/#stream">Live Streaming</a></li>
              </ul>
              <ul>
                <li><a href="/company">Company</a></li>
                <li><a href="/company/#whoWeAre">About Us</a></li>
                <li><a href="/company/#meetTeam">The Team</a></li>
                <li><a href="/company/#ourPartners">Partners</a></li>
              </ul>
              <ul>
                <li><a href="/community">Community</a></li>
                <li><a href="/community/#becomeModel">Performers</a></li>
                <li><a href="/community/#early"> Early Access</a></li>
                <li><a href="/community/#blog">Our Blog</a></li>
              </ul>
              <ul>
                <li><a href="/token">Resources</a></li>
                <li><a href="/withdraw/">Withdraw</a></li>
                <li><a href="/token/#faqs">FAQs</a></li>
                <li><a href="https://spankchain.com/static/whitepaper.13abf6d4.pdf">Whitepaper</a></li>
                <li><a href="https://discord.gg/S42CBSg">Discord</a></li>
              </ul>
            </main>
          </footer>
        </section>
      </div>
      <div>
        <aside>
          <ul>
            <li>All Rights Reserved © Spankchain 2018</li>
          </ul>
        </aside>
        <main>
          <a href="https://www.facebook.com/spankchain" target="_blank"></a>
          <a href="https://github.com/spankchain" target="_blank"></a>
          <a href="https://twitter.com/spankchain" target="_blank"></a>
          <a href="https://www.youtube.com/channel/UCRonD1SJuucnq9GJCJL_crQ" target="_blank"></a>
          <a href="https://medium.com/@spankchain" target="_blank"></a>
          <a href="https://discord.gg/Rz48YYy" target="_blank"></a>
        </main>
      </div>
    </div>
  )
})
