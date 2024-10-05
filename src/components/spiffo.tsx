import Image from "next/image";
import * as React from "react";

type SpiffoProps = React.HTMLAttributes<HTMLImageElement>;

const height = 100;
const width = 100;

export const Spiffo = {
  404: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/404.png"
        alt="Spiffo the red raccoon holding a 404 sign"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  birthday: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/birthday.png"
        alt="Spiffo the red raccoon holding a birthday cake"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  computer: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/computer.png"
        alt="Spiffo the red raccoon sitting at a computer"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  fighter: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/fighter.png"
        alt="Spiffo the red raccoon in a fighting stance"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  globe: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/globe.png"
        alt="Spiffo the red raccoon holding a globe"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  guard: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/guard.png"
        alt="Spiffo the red raccoon in a guard stance"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  halloween: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/halloween.png"
        alt="Spiffo the red raccoon in a Halloween costume"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  inamelon: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/in-a-melon.png"
        alt="Spiffo the red raccoon inside a watermelon"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  judge: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/judge.png"
        alt="Spiffo the red raccoon in a judge's robe"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  jumping: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/jumping.png"
        alt="Spiffo the red raccoon jumping"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  nametag: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/name-tag.png"
        alt="Spiffo the red raccoon with a nametag"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  no: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/no.png"
        alt="Spiffo the red raccoon shaking his head"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  poorlydrawn: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/poorly-drawn.png"
        alt="Spiffo the red raccoon poorly drawn"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  surfer: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/surfer.png"
        alt="Spiffo the red raccoon surfing"
        width={100}
        height={100}
        {...props}
      />
    );
  },
  teacher: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/teacher.png"
        alt="Spiffo the red raccoon in a teacher's robe"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  thinker: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/thinker.png"
        alt="Spiffo the red raccoon thinking"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  umbrella: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/umbrella.png"
        alt="Spiffo the red raccoon holding an umbrella"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  warning: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/warning.png"
        alt="Spiffo the red raccoon holding a warning sign"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  waving: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/waving.png"
        alt="Spiffo the red raccoon waving"
        height={height}
        width={width}
        {...props}
      />
    );
  },
  yes: (props: SpiffoProps) => {
    return (
      <Image
        src="/spiffo/yes.png"
        alt="Spiffo the red raccoon nodding his head"
        height={height}
        width={width}
        {...props}
      />
    );
  },
};
