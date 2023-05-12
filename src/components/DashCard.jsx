import React from 'react'
import {ReactComponent as Path} from "../icons/Path.svg";

function DashCard({
    icon, titleHead, titleContent,className
}) {
    return (
                <div className=" dash-card-main">
                    <ul>
                        <li className={`dash-icon ${className}`}>
                            <i>
                                {icon}
                            </i>
                        </li>
                        <li>
                            <h5>
                                {titleHead}
                            </h5>
                            <p>
                                {titleContent}
                            </p>
                        </li>
                    </ul>
                </div>

    );
}

export default DashCard