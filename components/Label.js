const Label = ({ className, children }) => {
  return <label className={`font-bold text-sm ${className}`}>{children}</label>;
};

export default Label;
