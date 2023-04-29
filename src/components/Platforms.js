import React from "react";
import platforms from "../assets/data/platforms";

const Platforms = () => {
  const tv = platforms[0];
  const streaming = platforms[1];
  const children = platforms[2];
  const download = platforms[3];
  return (
    <div className="platforms">
      {/* tv */}
      <article className="platform">
        <div className="platform__info">
          <h1 className="platform__title">{tv.title}</h1>
          <p className="platform__desc">{tv.desc}</p>
        </div>
        <img src={tv.img?.url} alt="platform-img" className="platform__img" />
      </article>
      {/* streaming */}
      <article className="platform">
        <div className="platform__info order-2">
          <h1 className="platform__title">{streaming.title}</h1>
          <p className="platform__desc ">{streaming.desc}</p>
        </div>
        <img
          src={streaming.img?.url}
          alt="platform-img"
          className="platform__img order-1"
        />
      </article>
      {/* children */}
      <article className="platform">
        <div className="platform__info">
          <h1 className="platform__title">{children.title}</h1>
          <p className="platform__desc">{children.desc}</p>
        </div>
        <img
          src={children.img?.url}
          alt="platform-img"
          className="platform__img"
        />
      </article>
      {/* download */}
      <article className="platform">
        <div className="platform__info order-2">
          <h1 className="platform__title">{download.title}</h1>
          <p className="platform__desc ">{download.desc}</p>
        </div>
        <img
          src={download.img?.url}
          alt="platform-img"
          className="platform__img order-1"
        />
      </article>
    </div>
  );
};

export default Platforms;
