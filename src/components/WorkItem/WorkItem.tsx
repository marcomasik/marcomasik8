import "./work-item.scss";

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
        
        {isExpanded && (
          <div className="work-item-expanded-content">
            <button onClick={(e) => { e.stopPropagation(); onClick(); }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};