import React from "react";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <img className={s.avatar} src={avatar} alt={`${name}`} width="48" />
        <p className={s.name}>{name}</p>
        <p className={isOnline ? s.online : s.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
