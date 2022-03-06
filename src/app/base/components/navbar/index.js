import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import NavBg from "../../assets/navBg.jpg";
import headerBg from "../../assets/headerBg.png";

import "./index.scss";

const dropDownList = [
  {
    title: "EN",
    icon: <ArrowDown />,
  },
  {
    title: "Company",
    icon: <ArrowDown />,
  },
  {
    title: "Partner Market Place",
    icon: <ArrowDown />,
  },
];

const serviceList = [
  {
    title: "Auto Homepage",
  },
  {
    title: "Sales",
  },
  {
    title: "CRM",
  },
  {
    title: "Electronic office",
  },
  {
    title: "Cloud ERP",
  },
  {
    title: "SSL",
  },
];

const homeList = [
  {
    icon: <Logo />,
  },
  {
    title: "Home",
    icon: <HomeIcon />,
  },
];

const partnerList = [
  {
    quantity: 32,
    title: "partners",
  },
  {
    quantity: 4,
    title: "countries",
  },
];

const NavBar = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <section className="navbar">
        <img className="navbar__left__bg" src={NavBg} />

        <div className="container">
          <div className="navbar__right__container">
            <div className="navbar__right__container__dropdown">
              {dropDownList.map((item) => {
                return (
                  <>
                    <div className="navbar__right__container__dropdown__text">
                      {item.title} {item.icon}
                    </div>
                  </>
                );
              })}
            </div>

            <div className="navbar__right__container__service">
              <div className="navbar__right__container__service__home">
                {homeList.map((item) => {
                  return (
                    <>
                      <div className="navbar__right__container__service__home__item">
                        {item?.icon} {item?.title}
                      </div>
                    </>
                  );
                })}
              </div>
              {serviceList.map((item) => {
                return (
                  <>
                    <div className="navbar__right__container__service__item">
                      {item?.icon} {item?.title}
                    </div>
                  </>
                );
              })}
            </div>

            <div className="navbar__right__container__info">
              <div className="navbar__right__container__info__title">
                Asia IT <br /> Market Place
              </div>

              <div className="navbar__right__container__info__partner">
                <div className="navbar__right__container__info__partner__date">
                  <div className="navbar__right__container__info__partner__date__now">
                    Now
                  </div>

                  <div className="navbar__right__container__info__partner__date__future">
                    Future
                  </div>
                </div>

                <div className="navbar__right__container__info__partner__number">
                  <>
                    <div className="navbar__right__container__info__partner__number__item">
                      <div className="navbar__right__container__info__partner__number__item__quantity">
                        6
                      </div>
                      <div className="navbar__right__container__info__partner__number__item__title">
                        different <br /> IT Software <br /> Networks
                      </div>
                    </div>
                  </>
                  {partnerList.map((item) => {
                    return (
                      <>
                        <div className="navbar__right__container__info__partner__number__item">
                          <div className="navbar__right__container__info__partner__number__item__quantity">
                            {item?.quantity}
                          </div>
                          <div className="navbar__right__container__info__partner__number__item__title">
                            {item?.title}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NavBar;
