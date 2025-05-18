import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, size = "md" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  };

  const modalClasses = `fixed inset-0 z-50 flex items-center justify-center p-4 ${
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  } transition-opacity duration-300`;

const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
};

  return (
    <div className={modalClasses} onClick={handleBackdropClick}>
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

      <div
        className={`relative bg-white rounded-lg shadow-xl transform transition-all ${sizes[size]} w-full`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Close">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto max-h-[70vh]">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
