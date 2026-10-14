import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects, localize } from "../constants";
import { textVariant, staggerContainer } from "../utils/motion";
import { useTranslation } from "react-i18next";
import ProjectGridCard from "./ProjectGridCard";

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div variants={staggerContainer()}>
      {projects.length > 0 && (
        <div className="">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>
              {t("projects.case-studies")}
            </p>
            <h2 className={`${styles.sectionHeadTextLight}`}>
              {t("projects.projects")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectGridCard
                key={project.id}
                project={{
                  ...project,
                  description: localize(project.description, i18n.language),
                }}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");
