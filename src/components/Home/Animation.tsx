import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../../../public/animation/animation2.json";

export default function MyAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
