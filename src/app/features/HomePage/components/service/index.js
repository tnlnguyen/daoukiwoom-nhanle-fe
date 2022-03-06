import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";

const data = [
  {
    title: "Free Test",
    description: "Organize across all apps by hand",
    price: "0",
    symbol: "$",
  },
  {
    title: "Low Price",
    description: "Monthly Fixed Amount",
    price: "200.000",
    symbol: "$",
  },
  {
    title: "Easy Using Methods",
    description: "Various Manuals",
    price: "200.000",
    symbol: "$",
    style: "service__content__item--border-styled",
  },
  {
    title: "Verified IT Service",
    description: "On sale in 4 countries",
    price: "300.000",
    symbol: "VND",
    style: "service__content__item--bg-styled",
    textColor: "--text-styled",
  },
];

const Service = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <section className="service">
        <div className="container">
          <div className="service__content">
            {data.map((item) => {
              return (
                <>
                  <div className={`service__content__item ${item?.style}`}>
                    <div
                      className={`service__content__item__title service__content__item__title${item?.textColor}`}
                    >
                      {item.title}
                    </div>
                    <div
                      className={`service__content__item__description service__content__item__description${item?.textColor}`}
                    >
                      {item.description}
                    </div>
                    <div className="service__content__item__price">
                      <div
                        className={
                          item.price == 0
                            ? `service__content__item__price__number--zero service__content__item__price__number${item?.textColor}`
                            : `service__content__item__price__number service__content__item__price__number${item?.textColor}`
                        }
                      >
                        {item.price}
                      </div>
                      <div className="service__content__item__price__unit">
                        <div
                          className={`service__content__item__price__unit__symbol service__content__item__price__unit__symbol${item?.textColor}`}
                        >
                          {item.symbol}
                        </div>
                        <div
                          className={`service__content__item__price__unit__text service__content__item__price__unit__text${item?.textColor}`}
                        >
                          Per month
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
