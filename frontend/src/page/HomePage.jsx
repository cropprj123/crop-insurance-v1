// import StickyDemo from "../components/aceternity/StickyDemo";
import { AuroraBackground } from "../components/ui/aurora-background";
import { FeaturesSectionDemo } from "../components/ui/feature-selection"; // Import the named export
import { CompareDemo } from "../components/aceternity/CompareDemo";
function HomePage() {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <AuroraBackground>
        <p className="text-center mt-4 text-2xl text-gray-700 dark:text-gray-300">
          Experience transparency and trust in crop insurance with blockchain
          and AI.
        </p>
        <p className="text-center mt-4 text-1xl text-gray-700 dark:text-gray-300">
          Transparent, Secure, and Smarter Insurance for a Thriving Agriculture
          Future.
        </p>
      </AuroraBackground>
      <h1 className="mt-4 text-6xl font-bold dark:text-white  text-center">
        Why choose us?
      </h1>
      <p className="text-center mt-4 text-2xl text-gray-700  dark:text-gray-300">
        Key Features That Set Us Apart
      </p>
      <hr />

      <FeaturesSectionDemo />
      <h1 className="mt-4 mb-8 text-6xl font-bold dark:text-white  text-center">
        How it works?
      </h1>

      <CompareDemo />

      {/* <StickyDemo /> */}
    </div>
  );
}

export default HomePage;
//143
{
  /* <StickyDemo />; */
}
