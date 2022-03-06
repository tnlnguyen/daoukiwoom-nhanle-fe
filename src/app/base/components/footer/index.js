import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";

const data = [
  {
    title: "Vietnam Office",
    address: "14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city",
    businessRegistration: "Business resigtration: 0315421202",
    tel: "Tel: 028-3520-2367",
    website: "sales@dkinno.com",
    copyright: "Copyright 2021 DaouKiwoom Innocation C0., Ltd",
  },
  {
    title: "Indonesia Office",
    address:
      "Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia",
    tel: "Tel: +62-21-5082-0038",
  },
  {
    title: "Korea Office",
    address:
      "5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea",
  },
];

const Footer = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__content">
            {data.map((item) => {
              return (
                <>
                  <div className="footer__content__item">
                    <div className="footer__content__item__title">{item.title}</div>
                    <div className="footer__content__item__address">{item.address}</div>
                    <div className="footer__content__item__business">{item?.businessRegistration}</div>
                    <div className="footer__content__item__tel-web">
                      <div className="footer__content__item__tel-web__tel">{item?.tel}</div>
                      <div className="footer__content__item__tel-web__website">{item?.website}</div>
                    </div>
                    <div className="footer__content__item__copyright">{item?.copyright}</div>
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
export default Footer;
