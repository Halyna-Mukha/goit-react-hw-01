import s from "./Profile.module.css";
import React from "react";

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.name}>{username}</p>
        <p className={s.mail}>@{tag}</p>
        <p className={s.country}>{location}</p>
      </div>

      <ul className={s.menu__list}>
        <li className={s.menu__list__item}>
          <span>Followers </span>
          <span className={s.menu__list__item__span}>{stats.followers}</span>
        </li>
        <li className={s.menu__list__item}>
          <span>Views </span>
          <span className={s.menu__list__item__span}>{stats.views}</span>
        </li>
        <li className={s.menu__list__item}>
          <span>Likes </span>
          <span className={s.menu__list__item__span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
