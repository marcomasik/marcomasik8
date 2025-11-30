import "./works-section.scss";
import { WorkItem } from "@/components/WorkItem/WorkItem";

export const WorksSection = () => {
  return (
    <section id="works" className="section">
        <div className="works-container">
          <div className="works-container-inner">
            <div className="works-container-content">
              <h2>Full time jobs</h2>
              <div className="full-time-jobs-container">
                <WorkItem />
                <WorkItem />
              </div>
              <h2>Freelance website projects</h2>
            </div>
          </div>
        </div>
    </section>
  );
};
