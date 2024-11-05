import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-full text-[#4F7641] pt-28 flex flex-col text-2xl text-center [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] leading-loose">
      <p className="">We couldn't find the page you were looking for.</p>
      <p className="pt-3 px-44">
        There may be an error in the URL entered into your web browser. Please
        check the URL and try again.
      </p>
      <p className="pt-3">
        You can return to the homepage by clicking{" "}
        <span className="relative group">
          <Link href="/">here.</Link>
          <span className="absolute left-1/2 bottom-[-2px] w-0 h-[2px] bg-[#4F7641] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
