import React from "react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <p className="mr-3 text-red-400">Protesters were seen carrying out furniture from the prime minister's residence.</p>
        <p className="mr-3 text-red-500">Ms Hasina, 76, fled the country, reportedly landing in India on Monday.</p>
        <p className="mr-3 text-red-600">Euphoria in Bangladesh after PM Sheikh Hasina flees country.</p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
