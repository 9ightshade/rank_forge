import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  footer?: React.ReactNode;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = "",
  footer,
  hoverEffect = false,
}) => {
  const hoverStyles = hoverEffect
    ? "hover:shadow-lg hover:border-blue-300 transition-all"
    : "";

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ${hoverStyles} ${className}`}>
      {(title || subtitle) && (
        <div className="p-4 border-b border-gray-200">
          {title && (
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="p-4">{children}</div>

      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
