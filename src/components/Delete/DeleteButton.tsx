import React from "react";

export const deleteButtonStyle: React.CSSProperties = {
  backgroundColor: "#e74c3c", 
  color: "#fff", 
  padding: "8px 16px", 
  border: "none", 
  borderRadius: "4px", 
  fontSize: "14px", 
  cursor: "pointer", 
  transition: "background-color 0.3s, transform 0.2s", 
  width: "100px",
  float: "right"
};

export const deleteButtonHoverStyle: React.CSSProperties = {
  backgroundColor: "#c0392b", 
  transform: "scale(1.05)",
};

interface DeleteButtonProps {
  onClick: () => void; 
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {

  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <button
      style={{
        ...deleteButtonStyle,
        ...(isHovered ? deleteButtonHoverStyle : {}),
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
