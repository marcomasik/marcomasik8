import "./works-section.scss";
import { WorkItem } from "@/components/WorkItem/WorkItem";

export const WorksSection = () => {
  return (
    <section id="works" className="section">
        <div className="works-container">
          <div className="works-container-inner">
            <div className="works-container-content">
              <h2>Full time jobs</h2>
              <div className="work-items-container">
                <WorkItem size="big" color="#0a3761" />
                <WorkItem size="big" color="aquamarine" />
                
              </div>
              <h2>Freelance website projects</h2>
              <div className="work-items-container">
              <WorkItem size="small" color="lightblue" />
              <WorkItem size="small" color="lightblue" />
              <WorkItem size="small" color="lightblue" />
              <WorkItem size="small" color="lightblue" />
              </div>

            </div>
          </div>
        </div>
    </section>
  );
};
