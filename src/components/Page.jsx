import PropTypes from "prop-types";

const Page = ({ children, title }) => {
  return (
    <div className="bg-neutral-50 h-screen p-6">
      <header className="w-full mb-9">
        <img className="h-10 w-10 mb-6" src="/public/assets/logo.png" />
        <h1 className="text-stone-950 text-4xl font-bold font-mundial">
          {title}
        </h1>
      </header>
      <section>{children}</section>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Page;
