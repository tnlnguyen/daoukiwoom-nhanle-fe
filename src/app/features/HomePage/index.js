import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from '../../base/components/navbar';
import Footer from '../../base/components/footer';
import Industry from './components/industry';
import Service from './components/service';

const HomePage = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      history?.replace("/login");
      return;
    }

  }, []);

  return (
    <>
      <Navbar/>

      <Industry/>

      <Service/>

      <Footer/>
    </>
  );
};
export default HomePage;
