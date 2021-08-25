import React from "react";
import Navbar from "./Navbar";
import Explore from "./Home/Explore";
import BenefitDetails from "./Home/BenefitDetails";
import Capture from "./Images/Capture.PNG";
import Capture1 from "./Images/Capture1.PNG";
import Capture2 from "./Images/Capture2.PNG";
import Carousel from "react-elastic-carousel";
import Slider from "./Slider";
import Footer from './Footer';

const breakPoints = [
  { width: 1, SlidersToShow: 1 },
  { width: 550, SlidersToShow: 2 },
  { width: 768, SlidersToShow: 3 },
  { width: 1200, SlidersToShow: 4 },
];

var desc1 =
  "Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback. We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.";

var desc2 = 'Feel like home, with a "family of invisible friends".';

var desc3 =
  "Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises  /should be structured to deliver the maximum educational punch.";

function App() {

  return (
    <>
      <Navbar />

      <div className="quote">
        <p className="div_quote_1">A World of Knowledge at Your Fingertips</p>
      </div>

      <div className="container">
        <p className="about_us_para">About Us</p>
        <div className="container_div">
          <div className="container_quote">
            <p className="container_quote_para">
              Learning Together From the Comfort of Your Home
            </p>
            <button className="learn_more_btn">Learn More</button>
          </div>
          <div className="container_img">
            <img
              src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
              alt="Teen study group"
            />
          </div>
        </div>
      </div>

      <div className="parallax">
        <div className="parallax_div"></div>
      </div>

      <div className="explore">
        <Explore
          imgsrc="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1138,h_590,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp"
          title="Entrepreneurship made fun"
        />

        <Explore
          imgsrc="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_850,h_563,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp"
          title="Digital Marketing"
        />

        <Explore
          imgsrc="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_850,h_555,al_c,q_85,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp"
          title="Product Management like a pro"
        />
      </div>

      <div className="our_course_benifit">
        <p>Our Course Benefits</p>
      </div>

      <div className="benefit_details">
        <BenefitDetails src={Capture} title="Expert Teachers" desc={desc1} />
        <BenefitDetails src={Capture1} title="Online Community" desc={desc2} />
        <BenefitDetails
          src={Capture2}
          title="Flexible Curriculum"
          desc={desc3}
        />
      </div>

      <p className="testimonial">Testimonials</p>

      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Slider>
          <p>Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
          </Slider>
          <Slider>Two</Slider>
          <Slider>Three</Slider>
          <Slider>Four</Slider>
          <Slider>Five</Slider>
          <Slider>Six</Slider>
          <Slider>Seven</Slider>
          <Slider>Eight</Slider>
        </Carousel>
      </div>

      {/* <div className="bgmedia">
        <p>Power of TEN Consulting</p>
        <button>Explore here </button>
        <video muted="muted" className="video-background" id="vid" autoPlay>
          <source
            src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}

      {/* <Footer/> */}

      {/* <p class="copyright">&copy; 2020 Limitless Technologies - The Entrepreneurship Network</p> */}
    </>
  );
}

export default App;
