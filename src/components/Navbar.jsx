import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-400">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web <span className="text-blue-600">Dev</span>
        </h2>
        <div className="flex-grow"></div>{" "}
        <div className="flex gap-x-9">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-blue-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
