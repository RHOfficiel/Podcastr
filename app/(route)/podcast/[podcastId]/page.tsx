import React from "react";

const PodcastDetails = ({
  params: { podcastId },
}: {
  params: { podcastId: string };
}) => {
  return <div className="text-white-1">PodcastDetails for {podcastId} </div>;
};

export default PodcastDetails;
