import DynamicTitle from "../DynamicTitle/DynamicTitle";
import LoginForm from "../LoginForm/LoginForm";
import Map from "../Map/Map";

const Home = () => {
  return (
    <div>
      <DynamicTitle title={"Career Hub | Home"}></DynamicTitle>
      <Map></Map>

      <LoginForm></LoginForm>
    </div>
  );
};

export default Home;
