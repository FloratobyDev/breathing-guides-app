import React from "react";
import Wind from "../../svgs/Wind";
import Feature from "../components/Feature";

function Features() {
  return (
    <div className="py-11 flex flex-row flex-wrap gap-y-8 lg:gap-y-20">
      <Feature
        label="Feature 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        svgComponent={<Wind />}
      />
      <Feature
        label="Feature 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        svgComponent={<Wind />}
      />
      <Feature
        label="Feature 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        svgComponent={<Wind />}
      />
      <Feature
        label="Feature 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        svgComponent={<Wind />}
      />
      <Feature
        label="Feature 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        svgComponent={<Wind />}
      />
      <Feature
        label="Feature 1"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        svgComponent={<Wind />}
      />
    </div>
  );
}

export default Features;
