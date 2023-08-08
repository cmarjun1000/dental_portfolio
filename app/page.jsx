import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="cyan_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Dental Portfolio - A place where a dentist&apos;s works can be uploaded
        and viewed
      </p>
      <Feed />
    </section>
  );
};

export default Home;
