import React from "react";
import './DashboardSideBar.css';


export default function SideBar(){
    return(
        <>
        <div className="Sidebar">

        {/*this box's class have to assigned by uique value which is in progress 
            and also more smoothness should be added in active div 
          */}

            <div className="Box">

                <svg width="31" height="31" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_23_71)">
                <path d="M9.625 5.27083C9.62658 5.87577 9.48524 6.47253 9.2125 7.0125C8.88912 7.65955 8.39197 8.20379 7.77675 8.58425C7.16153 8.96472 6.45253 9.16638 5.72917 9.16666C5.12423 9.16824 4.52747 9.0269 3.9875 8.75416L1.375 9.625L2.24583 7.0125C1.97309 6.47253 1.83176 5.87577 1.83333 5.27083C1.83361 4.54747 2.03528 3.83847 2.41575 3.22325C2.79621 2.60803 3.34045 2.11088 3.9875 1.7875C4.52747 1.51476 5.12423 1.37342 5.72917 1.375H5.95833C6.91366 1.4277 7.81598 1.83093 8.49252 2.50747C9.16907 3.18402 9.5723 4.08634 9.625 5.04166V5.27083Z" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_23_71">
                <rect width="11" height="11" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </div>
            <div className="Box">
                
                <svg width="31" height="31" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83337 8.93751C1.83337 8.63361 1.9541 8.34216 2.16898 8.12728C2.38387 7.91239 2.67531 7.79167 2.97921 7.79167H9.16671M1.83337 8.93751C1.83337 9.2414 1.9541 9.53285 2.16898 9.74773C2.38387 9.96262 2.67531 10.0833 2.97921 10.0833H9.16671V0.916672H2.97921C2.67531 0.916672 2.38387 1.03739 2.16898 1.25228C1.9541 1.46716 1.83337 1.75861 1.83337 2.06251V8.93751Z" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


            </div>

        </div>
        </>
    );
}