import "./work-item.scss";

import { getWorkItemContent } from './content';

interface WorkItemProps {
  id: string;
  size: 'big' | 'small';
  color: string;
  image?: string;
  isExpanded: boolean;
  onClick: () => void;
}

export const WorkItem = ({ id, size, color, image, isExpanded, onClick }: WorkItemProps) => {
  return (
    <div 
      className={`work-item work-item--${size} ${isExpanded ? 'work-item--expanded' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className="work-item-content">
        {image && (
          <img 
            src={image} 
            alt="Company logo" 
            className="work-item-logo"
          />
        )}
        <h3 className="work-item-title"></h3>

        {isExpanded && (() => {
            const ContentComponent = getWorkItemContent(id);
            return ContentComponent ? <ContentComponent /> : (
                <div className="work-item-expanded-content">
                <h4>Expanded Content for {id}</h4>
                <p>Default content</p>
                <button onClick={(e) => { e.stopPropagation(); onClick(); }}>
                    Close
                </button>
                </div>
            );
        })()}

      </div>
    </div>
  );
};