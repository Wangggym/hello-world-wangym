import helloTS from "./helloTS";

interface helloWorldType {
  name?: string;
}

function helloWorld({ name }: helloWorldType) {
  console.log(`hello world! ${name}`);
  helloTS(name);
};

export default helloWorld;
