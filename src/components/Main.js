import logo from '../assets/Valtech-Logo-black.png';
import t1 from '../assets/teaser1.png';
import t2 from '../assets/teaser2.png';
import t3 from '../assets/teaser3.png';
import t4 from '../assets/teaser4.png';
import './App.css';
import UserList from './Contacts';
import * as showMenuMobile from '../helpers/additionalFunctions';

function Main() {
    return (
        <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <span><a className="app-link" href="#section1">Section one</a></span>
                <span><a className="app-link" href="#section2">Section two</a></span>
                <span><a className="app-link" href="#section3">Section three</a></span>
                <span><a className="app-link1" href="#section4">Section four</a></span>
                <input class="header-input" placeholder="Type text here..."/>
                <input type="button" class="header-button" value="SEARCH"/>

                <i className="fa fa-bars icon mobile" onClick={showMenuMobile} />
                <div className="topnav mobile">
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
                    <div className="background">
                        <div className="transbox">
                            <a href="/#" className="sec1-link">
                                <button className="sec1-button">CONTACT</button>
                            </a>
                            <p className="trasnsbox-text">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </section>

                <section id="section2">
                    <UserList/>
                </section>

                <section id="section3">
                    <div className="flexbox">
                        <article className="main">
                            <img src={t1} alt="t1"/>
                            <div className="art-body">
                                <h1>Teaser Title</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor
                                    rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus
                                    orci luctus et ultrices posuere cubilia curae</p>
                            </div>
                            <button className="art-button">Read more</button>
                        </article>

                        <article className="main">
                            <img src={t2} alt="t2"/>
                            <div className="art-body">
                                <h1>Teaser Title</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <button className="art-button">Read more</button>
                        </article>
                    </div>

                    <div className="flexbox">
                        <article className="main">
                            <img src={t3} alt="t3"/>
                            <div className="art-body">
                                <h1>Teaser Title</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor
                                    rhoncus massa non, congue dignissim sapien.</p>
                            </div>
                            <button className="art-button">Read more</button>
                        </article>

                        <article className="main">
                            <img src={t4} alt="t4"/>
                            <div className="art-body">
                                <h1>Teaser Title</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor
                                    rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus
                                    orci luctus et ultrices posuere cubilia curae <br/><br/>Vestibulum ante ipsum…</p>
                            </div>
                            <button className="art-button">Read more</button>
                        </article>
                    </div>
                </section>

                <section id="section4">
                    <div className="background2">
                        <div className="transbox2">
                            <div className="wrapper">
                                <div className="form">
                                    <h3>CONTACT US</h3>
                                    <form action="">
                                        <p>
                                            <label>First Name</label>
                                            <input type="text" required/>
                                        </p>
                                        <p>
                                            <label>Last Name</label>
                                            <input type="text" required/>
                                        </p>
                                        <p>
                                            <label>Email address</label>
                                            <input type="email" required/>
                                        </p>
                                        <p>
                                            <label>Phone Number</label>
                                            <input type="text" required/>
                                        </p>
                                        <p>
                                            <label>Your message</label>
                                            <textarea cols="30" rows="7" required/>
                                        </p>
                                        <p className="par_sub">
                                            <button type="submit">SEND</button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="app-footer">
                <div className="footer__headline">
                    <div><img src={logo} className="footer-logo" alt="logo"/></div>
                </div>
                <div>
                    <div className="footer__headline">Footer Section Title</div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                </div>
                <div>
                    <div className="footer__headline">Footer Section Title</div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                </div>
                <div>
                    <div className="footer__headline">Footer Section Title</div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                    <div className="footer-link"><a href="/#">Footer link</a></div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
