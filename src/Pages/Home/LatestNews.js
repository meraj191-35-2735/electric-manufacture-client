import React from "react";
import news1 from "../../assets/News/01.jpg";
import news2 from "../../assets/News/02.jpg";
import news3 from "../../assets/News/03.jpg";

const LatestNews = () => {
  return (
    <div>
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Latest Tools News
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        <div class="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img src={news1} alt="Shoes" />
          </figure>
          <div class="card-body ">
            <h2 class="text-white text-3xl">
              Bosch Gbm 350 Professional Rotary Drill
            </h2>
            <p className="text-white">
              Drilling or Hammering mode provides the power and speed to drill
              into masonry, steel and wood Variable speed for ultimate finger
              tip control for all drilling applications. Reverse brush system
              for full torque and power in forward and reverse, lock on button
              for continuous use Ergonomic reversible hammer drill design with
              optimal grip positions, light weight and insulated shock proof
              plastic body, easy to change bits The product supports wood,
              concrete and metal drilling.
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://timesofindia.indiatimes.com/topic/drill-machine"
                class="btn btn-primary btn-xs"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img src={news2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-white text-3xl">
              Coming Marson HP2 3/16" Hand Riveter
            </h2>
            <p className="text-white">
              The HP-2 is the number one selling hand rivet in the industry.
              Know and trusted for durability, quality and performance, The HP-2
              is often copied but never duplicated. Its square shoulder fulcrum
              pin of cold-formed heat-treated steel prevents pin rotation that
              can elongate the engaging holes and cause premture tool failure in
              imitation tools.he HP-2 sets-up to3/16'' steel rivets and comes
              with four mounted nosepieces (3/32'', 1/8'', 5/32'' and 3/16'')
              and a service wrench.
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://www.accufastinc.com/product-page/marson-hp2-3-16-hand-riveter"
                class="btn btn-primary btn-xs"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img src={news3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-white text-3xl">
              New Rupes LHR21ES Deluxe Bigfoot Polisher
            </h2>

            <ul>
              <li className="mb-5 text-white font-bold">New Features:</li>
              <li className="mb-2 text-white ">1.Unflappable quality</li>
              <li className="mb-2 text-white ">
                2. Operates smoothly with minimal vibration
              </li>
              <li className="mb-2 text-white ">
                3. Larger 21 mm orbit diameter is best in class
              </li>
              <li className="mb-2 text-white s">
                4. Unflappable quality Efficient cutting power for effortless
                polishing
              </li>
            </ul>
            <div class="card-actions justify-end">
              <a
                href="https://www.prepmycar.com/best-dual-action-polishers/"
                class="btn btn-primary btn-xs"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
