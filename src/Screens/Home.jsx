import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return <div></div>;
}

export default Home;
