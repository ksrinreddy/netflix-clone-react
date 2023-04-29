import React from "react";
import AccountBanner from "../components/AccountBanner";
import Row from "../components/Row";
import requests from "../requests";

const Account = () => {
  return (
    <section className="account-page">
      <AccountBanner />
      <Row rowID="1" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID="2" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row rowID="3" title="TopRated" fetchUrl={requests.requestTopRated} />
      <Row rowID="4" title="NowPlaying" fetchUrl={requests.requestNowPlaying} />
    </section>
  );
};

export default Account;
