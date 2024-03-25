import React from "react";
import SuggestionForYou from "./SuggestionForYou";
import LatestActivities from "./LatestActivities";
import OnlineFriends from "./OnlineFriends";

const Right = () => {
  return (
    <div>
      <h1>Right Bar</h1>
      <SuggestionForYou />
      <LatestActivities />
      <OnlineFriends />
    </div>
  );
};

export default Right;
