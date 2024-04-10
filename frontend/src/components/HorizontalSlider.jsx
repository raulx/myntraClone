/* eslint-disable react/prop-types */
function HorizontalSlider({ children }) {
  return (
    <div className="hide-scroll scroll flex gap-2 px-2 overflow-x-scroll scroll-smooth">
      {children}
    </div>
  );
}

export default HorizontalSlider;
