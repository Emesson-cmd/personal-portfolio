import PropTypes from "prop-types";
import { techIcons } from "../constants";

const TechTag = ({ tag }) => {
  const icon = techIcons[tag];

  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-full 
      bg-black/30 backdrop-blur-sm border border-white/10
      text-xs text-timberWolf hover:bg-black/40 transition"
    >
      {icon && <img src={icon} alt={tag} className="w-4 h-4 object-contain" />}
      <span className="capitalize">{tag}</span>
    </div>
  );
};

TechTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default TechTag;
