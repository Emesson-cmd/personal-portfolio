import PropTypes from 'prop-types';
import { github, pineapple } from '../assets';

const ProjectGridCard = ({ project }) => {
  const { name, description, image, repo, demo } = project;

  return (
    <div className="group relative rounded-xl overflow-hidden bg-jetLight card-shadow h-full flex flex-col">
      <a href={demo} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={name}
          className="h-[220px] w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </a>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-beckman uppercase text-timberWolf">
          {name}
        </h3>

        <p className="mt-2 text-sm text-silver line-clamp-3 flex-1">
          {description}
        </p>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => window.open(repo, '_blank')}
            className="p-2 rounded-full bg-night hover:opacity-80"
          >
            <img src={github} className="w-4 h-4" />
          </button>

          <button
            onClick={() => window.open(demo, '_blank')}
            className="p-2 rounded-full bg-battleGray hover:bg-gray-300"
          >
            <img src={pineapple} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectGridCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectGridCard;
