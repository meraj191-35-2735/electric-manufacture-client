import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLightbulb,
  faPeopleGroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const BusinessSummary = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Why You Can Trust!
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faGlobe} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  <p>Countries: </p>
                  {isVisible ? (
                    <h2 class="text-center text-4xl font-bold ">
                      <CountUp
                        start={1}
                        end={8}
                        duration={2}
                        separator=" "
                        decimals={1}
                        decimal=""
                      ></CountUp>
                    </h2>
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faLightbulb} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  <p>Products: </p>
                  {isVisible ? (
                    <h2 class="text-center text-4xl font-bold ">
                      <CountUp
                        start={1}
                        end={2}
                        duration={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      ></CountUp>
                    </h2>
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  <p>Customers: </p>
                  {isVisible ? (
                    <h2 class="text-center text-4xl font-bold ">
                      <CountUp
                        start={1}
                        end={10}
                        duration={2}
                        separator=" "
                        decimals={3}
                        decimal=","
                      ></CountUp>
                    </h2>
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faThumbsUp} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  <p>Reviews: </p>
                  {isVisible ? (
                    <h2 class="text-center text-4xl font-bold ">
                      <CountUp
                        start={1}
                        end={5}
                        duration={2}
                        separator=" "
                        decimals={2}
                        decimal=""
                      ></CountUp>
                    </h2>
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
