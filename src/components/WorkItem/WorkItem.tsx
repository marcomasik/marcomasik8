import "./work-item.scss";

interface WorkItemProps {
  size: 'big' | 'small';
  color: string;
}

export const WorkItem = ({ size, color }: WorkItemProps) => {
  return (
    <div 
      className={`work-item work-item--${size}`}
      style={{ backgroundColor: color }}
    >
      <div className="work-item-content">
        <h3 className="work-item-title"></h3>
      </div>
    </div>
  );
};