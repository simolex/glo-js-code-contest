import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const slider = () => {
  const swiper = new Swiper("", {
    modules: [Navigation],
  });
};

export default slider;
