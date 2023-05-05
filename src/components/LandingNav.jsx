import React from 'react'
import { ReactComponent as Searchicon } from "../icons/Search.svg";
import { ReactComponent as Caretdown } from "../icons/CaretDown.svg";
import { ReactComponent as Logoicon } from "../icons/Logo.svg";
const LandingNav = () => {
  return (

    <div className="landingnav col-md-11">
        <div className="row">
           <div className="col-md-7">
              <ul>
                <li>
                  <i>
                    <Logoicon />
                  </i>
                  <p>EdTech</p>
                </li>
                <li>
                  <p>Browse</p>
                  <i>
                    <Caretdown />
                  </i>
                </li>
                <li>
                  <p>Teach on Edtech</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <i>
                    <Searchicon/>
                  </i>
                </li>
                <li>
                  <button>
                    Sign In
                  </button>
                </li>
                <li>
                <button>
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
    </div>
    </div>
  )
}

export default LandingNav