"use client";

import "./works-section.scss";
import { WorkItem } from "@/components/WorkItem/WorkItem";
import { useState } from "react";

export const WorksSection = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="works" className="section">
        <div className="works-container">
          <div className="works-container-inner">
            <div className="works-container-content">
              <h2>Full time jobs</h2>
              <div className="work-items-container">
                <WorkItem 
                  id="idealo"
                  size="big" 
                  backgroundColor="#0a3761" 
                  image="/images/logos/idealo.png"
                  isExpanded={expandedItem === "idealo"}
                  onClick={() => handleItemClick("idealo")}
                />
                <WorkItem 
                  id="miles"
                  size="big" 
                  backgroundColor="#000000" 
                  image="/images/logos/miles.png"
                  isExpanded={expandedItem === "miles"}
                  onClick={() => handleItemClick("miles")}
                />
              </div>
              <h2>Freelance website projects</h2>
              <div className="work-items-container">
                <WorkItem 
                  id="muskinn"
                  size="small" 
                  backgroundColor="#FFFFF0"
                  image="/images/logos/muskinn_logo.png"
                  isExpanded={expandedItem === "muskinn"}
                  onClick={() => handleItemClick("muskinn")}
                />
                {/* muskinn red:    #ed3424*/}
                <WorkItem 
                  id="freelance2"
                  size="small" 
                  backgroundColor="lightblue"
                  isExpanded={expandedItem === "freelance2"}
                  onClick={() => handleItemClick("freelance2")}
                />
                <WorkItem 
                  id="freelance3"
                  size="small" 
                  backgroundColor="lightblue"
                  isExpanded={expandedItem === "freelance3"}
                  onClick={() => handleItemClick("freelance3")}
                />
                <WorkItem 
                  id="freelance4"
                  size="small" 
                  backgroundColor="lightblue"
                  isExpanded={expandedItem === "freelance4"}
                  onClick={() => handleItemClick("freelance4")}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
