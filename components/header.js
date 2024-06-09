import Link from "next/link"
import { useRouter} from 'next/router'
import React,{useState} from 'react'
export default function Header() {

    const[toggle,setToggle] = useState(false);
    const ToggleAction = () =>{
      setToggle(!toggle);
    }
    const[resourceDrop,setResourceDrop] = useState(false);
    const ToggleResourceDrop = () => {
      setResourceDrop(!resourceDrop);
    }

    const closeResourceDrop = () => {
      setResourceDrop(false);
      // setToggle(false);
      
    };

    return (
      <header>
        <div className="contain">
          <div className="logo">
              <Link href="/">
                  <img src="/images/logo.svg" alt="" />
              </Link>
          </div>
          <div className={toggle ? "toggle active" : "toggle"} onClick={ToggleAction}><span></span></div>
          <nav id="nav" className={toggle ? "active" : ""}>
            <ul>
                <li><Link href="/pricing" onClick={ToggleAction}>Pricing</Link></li>
                <li><Link href="/about" onClick={ToggleAction}>About Us</Link></li>
                <li
                  className={`drop ${resourceDrop ? "open" : ""}`}
                  onMouseEnter={ToggleResourceDrop}
                  onMouseLeave={closeResourceDrop}
                  onClick={ToggleResourceDrop}
                >
                  <div className="drop_btn">Products</div>
                  <ul className={resourceDrop ? "sub sm active" : "sub sm"}>
                    <li onClick={ToggleAction}>
                      <Link href="/real-time-ai-pricing" onClick={closeResourceDrop}>
                      Real-Time AI Pricing
                      </Link>
                    </li>
                    <li onClick={ToggleAction}>
                      <Link href="/price-sensitivity-report" onClick={closeResourceDrop}>
                      Price Sensitivity Report
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="show_cell_lnk"><Link href="/login" onClick={ToggleAction}>Login</Link></li>
              <li className="show_cell_lnk"><Link href="/signup" className="site_btn" onClick={ToggleAction}>Signup</Link></li>
            </ul>
          </nav>
          <div className="login_btns">
              <ul>
                <li><Link href="/login" onClick={ToggleAction}>Login</Link></li>
                <li className="btn_blk"><Link href="/signup" className="site_btn" onClick={ToggleAction}>Signup</Link></li>
              </ul>
            </div>
          <div className="clearfix"></div>
        </div>
      </header>
    )
  }