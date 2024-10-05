import Image from "next/image";
import * as React from "react";

type SpiffoProps = React.HTMLAttributes<HTMLImageElement>;

export const Spiffo = {
  404: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/404.png"
        alt="Spiffo the red raccoon holding a 404 sign"
        {...props}
      />
    );
  },
  surfer: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/surfer.png"
        alt="Spiffo the red raccoon surfing"
        {...props}
      />
    );
  },
};
