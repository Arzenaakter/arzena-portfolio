import MotionComponent from "./MotionComponent";

type THead = {
  heading: string;
  subHeading: string;
};
const HeadingComponent = ({ heading, subHeading }: THead) => {
  return (
    <div className="text-center mb-16 animate-slide-up">
      <MotionComponent>
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-br from-primary via-cyan to-primary bg-clip-text text-transparent">
          {heading}
        </h2>
      </MotionComponent>

      <MotionComponent>
        <div className="w-24 h-1 bg-linear-to-r from-primary to-cyan mx-auto mb-6 rounded-full" />
      </MotionComponent>
      <MotionComponent>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {subHeading}
        </p>
      </MotionComponent>
    </div>
  );
};

export default HeadingComponent;
