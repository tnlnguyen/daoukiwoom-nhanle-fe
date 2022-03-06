import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Asset } from "../../../../base/assets/asset.svg";
import { ReactComponent as Accounting } from "../../../../base/assets/accounting.svg";
import { ReactComponent as HR } from "../../../../base/assets/hr.svg";
import { ReactComponent as Sales } from "../../../../base/assets/sales.svg";
import { ReactComponent as Customer } from "../../../../base/assets/customer.svg";
import { ReactComponent as Security } from "../../../../base/assets/security.svg";

import "./index.scss";

const values = [
  {
    image: <Asset />,
    data: {
      title: "Assets",
      detail: [
        {
          description: "Inventory Management",
          key: "G-Book",
        },
      ],
    },
  },
  {
    image: <Accounting />,
    data: {
      title: "Accounting",
      detail: [
        {
          description: "Accounting",
          key: "G-Book",
        },
      ],
    },
  },
  {
    image: <HR />,
    data: {
      title: "HR & Admin",
      detail: [
        {
          description: "Webmail",
          key: "E-office",
        },
        {
          description: "E-Apporval",
          key: "E-office",
        },
        {
          description: "E-Document",
          key: "E-office",
        },
        {
          description: "E-Check in.out",
          key: "E-office",
        },
        {
          description: "Co-work/Project",
          key: "E-office",
        },
      ],
    },
  },
  {
    image: <Sales />,
    data: {
      title: "Sales",
      detail: [
        {
          description: "Create Homepage Youtube & Instagram",
          key: "Fieldmake",
        },
      ],
    },
  },
  {
    image: <Customer />,
    data: {
      title: "Customer",
      detail: [
        {
          description: "Customer Request Management",
          key: "OQUFIE",
        },
      ],
    },
  },
  {
    image: <Security />,
    data: {
      title: "Security",
      detail: [
        {
          description: "SSL server",
          key: "SECTIGO",
        },
      ],
    },
  },
];

const Industry = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <section className="industry">
        <div className="industry__notification">
          You are now viewing an <b>IT Software</b> that has been verified by{" "}
          <b>over 1 million users</b>.
        </div>

        <div className="industry__content">
          <div className="industry__content__title">
            IT CLOUD SEA'S IT SERVICE
          </div>

          <div className="industry__content__values">
            {values.map((item) => {
              return (
                <div className="industry__content__values__item">
                  <div className="industry__content__values__item__image">
                    {item.image}
                  </div>

                  <div className="industry__content__values__item__content">
                    <div className="industry__content__values__item__content__title">
                      {item.data.title}
                    </div>
                    <div className="industry__content__values__item__content__detail">
                      {item.data.detail.map((subItem) => {
                        return (
                          <>
                            <div className="industry__content__values__item__content__detail__sub-item">
                              <div className="industry__content__values__item__content__detail__sub-item__description">
                                {subItem.description}
                              </div>
                              <div className="industry__content__values__item__content__detail__sub-item__key">
                                {subItem.key}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Industry;
