"use client";

import "./works-section.scss";
import { WorkItem } from "@/components/WorkItem/WorkItem";
import { useState, useEffect, useRef } from "react";

export const WorksSection = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const packeryInstance = useRef<any>(null);
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    // Dynamically import Packery only on client side
    const initPackery = async () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        const Packery = (await import('packery')).default;
        const freelanceContainer = document.getElementById('freelance-projects');
        if (freelanceContainer) {
          packeryInstance.current = new Packery(freelanceContainer, {
            itemSelector: '.work-item',
            gutter: 16,
            transitionDuration: 0 // Disable Packery transitions, use CSS instead
          });
        }
      }
    };

    initPackery();

    // Cleanup on unmount
    return () => {
      if (packeryInstance.current) {
        packeryInstance.current.destroy();
      }
    };
  }, []);

  const handleItemClick = (itemId: string) => {
    const isExpanding = expandedItem !== itemId;
    
    if (isExpanding) {
      // Save current scroll position when expanding
      scrollPositionRef.current = window.scrollY;
    } else {
      // Start scroll immediately when collapsing (parallel with transition)
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'smooth'
      });
    }
    
    setExpandedItem(expandedItem === itemId ? null : itemId);

    // Trigger layout after transition completes
    setTimeout(() => {
      if (packeryInstance.current) {
        packeryInstance.current.layout();
      }
    }, 250); // 0.2s transition + 50ms buffer
  };

  return (
    <section id="works" className="section">
        <div className="works-container">
          <div className="works-container-inner">
            <div className="works-container-content">
              <h2>Full time jobs</h2>
              <div className="work-items-container" id="full-time-jobs">
                <WorkItem 
                  id="idealo"
                  size="big" 
                  backgroundColor="#0a3761" 
                  fontColor="#ffffff"
                  image="/images/logos/idealo.png"
                  isExpanded={expandedItem === "idealo"}
                  onClick={() => handleItemClick("idealo")}
                />
                <WorkItem 
                  id="miles"
                  size="big" 
                  backgroundColor="#000000"
                  fontColor="#ffffff"
                  image="/images/logos/miles.png"
                  isExpanded={expandedItem === "miles"}
                  onClick={() => handleItemClick("miles")}
                />
              </div>
              <h2>Freelance website projects</h2>
              <div className="work-items-container" id="freelance-projects">
              <WorkItem 
                  id="muhely"
                  size="small" 
                  backgroundColor="#2D1B69"
                  fontColor="#ffffff"
                  image="/images/logos/muhely_logo.png"
                  isExpanded={expandedItem === "muhely"}
                  onClick={() => handleItemClick("muhely")}
                />
                <WorkItem 
                  id="borneo"
                  size="small" 
                  backgroundColor="#EDE8D0"
                  fontColor="#000000"
                  image="/images/logos/borneo_logo.png"
                  isExpanded={expandedItem === "borneo"}
                  onClick={() => handleItemClick("borneo")}
                />
                {/* muskinn red:    #ed3424*/}
                <WorkItem 
                  id="swarm"
                  size="small" 
                  backgroundColor="#000000"
                  fontColor="#ffffff"
                  image="/images/logos/swarm.png"
                  isExpanded={expandedItem === "swarm"}
                  onClick={() => handleItemClick("swarm")}
                />
                <WorkItem 
                  id="muskinn"
                  size="small" 
                  backgroundColor="#FFFFF0"
                  fontColor="#000000"
                  image="/images/logos/muskinn_logo.png"
                  isExpanded={expandedItem === "muskinn"}
                  onClick={() => handleItemClick("muskinn")}
                />
                <WorkItem 
                  id="kmonitor"
                  size="small" 
                  backgroundColor="#EAECF5"
                  fontColor="#000000"
                  image="/images/logos/k-monitor.jpg"
                  isExpanded={expandedItem === "kmonitor"}
                  onClick={() => handleItemClick("kmonitor")}
                />

                <WorkItem 
                  id="golem"
                  size="small" 
                  backgroundColor="#7FFFD4"
                  fontColor="#000000"
                  image="/images/logos/golem_logo.png"
                  isExpanded={expandedItem === "golem"}
                  onClick={() => handleItemClick("golem")}
                />
                <WorkItem 
                  id="momentum"
                  size="small" 
                  backgroundColor="#8563c3"
                  fontColor="#ffffff"
                  image="/images/logos/momentum_logo.png"
                  isExpanded={expandedItem === "momentum"}
                  onClick={() => handleItemClick("momentum")}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
