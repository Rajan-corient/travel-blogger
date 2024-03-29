import React from "react";
import UsersList from "../components/UsersList";
import profile_1 from "./../../assets/users/travel_profile_1.png";
import profile_2 from "./../../assets/users/travel_profile_2.png";
import profile_3 from "./../../assets/users/travel_profile_3.png";
import profile_4 from "./../../assets/users/travel_profile_4.png";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lavin",
      img: profile_1,
      places: 4,
    },
    {
      id: "u2",
      name: "Aviral",
      img: profile_2,
      places: 2,
    },
    {
      id: "u3",
      name: "Aarav",
      img: profile_3,
      places: 6,
    },
    {
      id: "u4",
      name: "Aarav",
      img: profile_4,
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
