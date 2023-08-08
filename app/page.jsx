import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        My Portfolio
        <br />
        <span className="cyan_gradient text-center">Healthy Smiles</span>
      </h1>
      <p className="desc text-center">
        Dental Portfolio - A platform designed for the upload and viewing of a dentist&apos;s professional works.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
