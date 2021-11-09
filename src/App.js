import logo from './Valtech-Logo-black.png';
import t1 from './large-emerging technologies (2).png';
import t2 from './large-emerging technologies.png';
import t3 from './large-emerging technologies (4).png';
import t4 from './large-emerging technologies (3).png';
import './App.css';
import './UserList';
import UserList from './UserList';
import * as myFunction from "./myFunction.js";

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <span><a class="App-link" href="#section1">Section one</a></span>
        <span><a class="App-link" href="#section2">Section two</a></span>
        <span><a class="App-link" href="#section3">Section three</a></span>
        <span><a class="App-link1" href="#section4">Section four</a></span>
        <input class="header-input" placeholder="Type text here..."/>
        <input type="button" class="header-button" value="SEARCH"/>

        {/* MOBILE */}
        <i class="fa fa-bars icon mobile" onClick={myFunction}></i>
        <div class="topnav mobile">
        <div id="myLinks">
       <a href="#section1">Section one</a>
    <a href="#section2">Section two</a>
    <a href="#section3">Section three</a>
    <a href="#section3">Section four</a>
  </div>
</div>
        </header>


      <main>
    <section id="section1">
    <div class="background">
    <div class="transbox">

    {/* USING HEX CODE FOR EACH CHARACTER */}
<a class="sec1-link" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#107;&#46;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#118;&#97;&#108;&#116;&#101;&#99;&#104;&#46;&#99;&#111;&#109;">
<button class="sec1-button">
CONTACT
</button>
</a>
    <p>Lorem ipsum dolor sit amet, consectetur</p>
    </div>
</div>
</section>

<section id="section2">
<UserList/>
</section>


<section id="section3">
<div class="flexbox">
  <article class="main">
  <img src={t1}/>
  <div class="art-body">
    <h1>Teaser Title</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
  </div>
  <button class="art-button">Read more</button>
  </article>
  <article class="main">
  <img src={t2}/>
  <div class="art-body">
    <h1>Teaser Title</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    </div>
    <button class="art-button">Read more</button>
  </article>
  </div>

  <div class="flexbox">
  <article class="main">
  <img src={t3}/>
  <div class="art-body">
    <h1>Teaser Title</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. 
    </p> </div>
  <button class="art-button">Read more</button>
  </article>
  <article class="main">
  <img src={t4}/>
  <div class="art-body">
    <h1>Teaser Title</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae <br/><br/>Vestibulum ante ipsum…
    </p>
    </div>
    <button class="art-button">Read more</button>
  </article>
  </div>
</section>


<section id="section4">
<div class="background2">
    <div class="transbox2">
      <div class="wrapper">
    <div class="form">
      <h3>CONTACT US</h3>
      <form action="">
        <p>
          <label for="">First Name</label>
          <input type="text" required/>
        </p>
        <p>
          <label for="">Last Name</label>
          <input type="text" required/>
        </p>
        <p>
          <label for="">Email address</label>
          <input type="email" required/>
        </p>
        <p>
          <label for="">Phone Number</label>
          <input type="text" required/>
        </p>
        <p>
          <label for="">Your message</label>
          <textarea name="" id="" cols="30" rows="7" required></textarea>
        </p>
        <p class="par_sub">
          <button type="submit">SEND</button>
        </p>
      </form>
    </div>
    </div>
    </div>
</div>
</section>
      </main>
<footer class="App-footer">
<div class="footer__headline">
    <div><img src={logo} class="footer-logo" alt="logo" />
</div>
  </div>
  <div>
    <div class="footer__headline">Footer Section Title</div>
    <div class="footer-link"><a href="#">Footer link</a></div>
    <div class="footer-link"><a href="#">Footer link</a></div>
    <div class="footer-link"><a href="#">Footer link</a></div>
  </div>
  <div>
    <div class="footer__headline">Footer Section Title</div>
    <div class="footer-link"><a href="#">Footer link</a></div>
    <div class="footer-link"><a href="#">Footer link</a></div>
    <div class="footer-link"><a href="#">Footer link</a></div>
  </div>
  <div>
    <div class="footer__headline">Footer Section Title</div>
    <div class="footer-link"><a href="#">Footer link</a></div>
    <div class="footer-link"><a href="#">Footer link</a></div>
    <div class="footer-link"><a href="#">Footer link</a></div>
  </div>
</footer>

    </div>
  );
}

export default App;