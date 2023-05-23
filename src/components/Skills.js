import python_3_logo from "../assets/img/python_3_logo.png";
import c_logo from "../assets/img/c++_logo.png";
import react_logo from "../assets/img/react_logo.png";
import web_development_logo from "../assets/img/web_development_logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have learned different programming languages.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python_3_logo} alt="Image" />
                                <h5>Python 3</h5>
                            </div>
                            <div className="item">
                                <img src={c_logo} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={react_logo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={web_development_logo} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                        <p>I have the most experience in Python 3, while C++ is my most favorite programming language.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
