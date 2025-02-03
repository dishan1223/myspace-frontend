import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-dvh flex flex-col gap-4 items-center">
      <Navbar />
      <div className="w-5xl h-dvh m-auto">{children}</div>
    </div>
  );
};

// ✅ Add PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
