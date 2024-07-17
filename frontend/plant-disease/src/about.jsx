import React from 'react'
import './about.css'

const about = () => {
  return (
    <section class = "aboutUsSection">
            <div class = "image">
            </div>

            <div class = "content">
                <h2>About Us</h2>
                <span>

                </span>

                <p>
                At SeedSync AI, our mission is to offer agriculturalists a superior experience and greatly enhance their potential for higher yields.

We assist them in identifying plant diseases in the following crops:
                </p>

                <ul class = "links">
                    <li><a href = "#">Potato</a></li>

                    <div class = "vertical-line"></div>

                    <li><a href = "#">Tomato</a></li>

                    <div class = "vertical-line"></div>
                    
                    <li><a href = "#">Bell Paper</a></li>
                </ul>

                <ul class = "icons">
                    <li>
                        <i class = "fa fa-envelope"></i>
                        <span>
                            seedsyncai@gmail.com
                        </span>
                    </li>
                </ul>
            </div>
        </section>
  )
}

export default about
