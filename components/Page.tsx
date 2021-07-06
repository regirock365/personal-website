import Meta from "./Meta";

const Page = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Page;
