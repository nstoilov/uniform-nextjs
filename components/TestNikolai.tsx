import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";

type TestNikolaiProps = ComponentProps<{
  testParam: string;
  entry?: string;
}>;

const TestNikolai: React.FC<TestNikolaiProps> = ({
  testParam,
  entry,
}: TestNikolaiProps) => {
  console.log("entry", entry);
  return (
    <div>
      <h1 className="title">{testParam}</h1>
    </div>
  );
};

registerUniformComponent({
  type: "testNikolai",
  component: TestNikolai,
});

export default TestNikolai;
