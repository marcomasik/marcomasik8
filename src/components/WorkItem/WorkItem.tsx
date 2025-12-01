import "./work-item.scss";

interface WorkItemProps {
  size: 'big' | 'small';
  color: string;
  image?: string;
}

export const WorkItem = ({ size, color, image }: WorkItemProps) => {
  return (
    <div 
      className={`work-item work-item--${size}`}
      style={{ backgroundColor: color }}
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
      </div>
    </div>
  );
};