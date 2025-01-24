import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const DynamicTitle = ({ title }) => {
  console.log(title);
  return (
    <div>
      <Helmet>
        <title>{title ? `${title}` : "Default React Title"}</title>
      </Helmet>
    </div>
  );
};

export default DynamicTitle;
