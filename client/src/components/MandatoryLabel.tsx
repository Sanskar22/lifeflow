import React from 'react';

interface MandatoryLabelProps {
  label: string;
}

const MandatoryLabel: React.FC<MandatoryLabelProps> = ({ label }) => {
  return (
    <div className="flex items-center">
      <span className="font-bold">{label}</span>
      <span className="text-red-500 ml-1">*</span>
    </div>
  );
};

export default MandatoryLabel;
