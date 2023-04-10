import { useEffect, useRef, useState } from "react";
import "../typings.d.ts";

function App() {
  const loading = useRef(false);
  const [data, setData] = useState<fetchResponse | null>(null);

  useEffect(() => {
    if (!loading.current) {
      loading.current = true;
      const fetchData = async () => {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        const [res] = await response.json();

        setData(res);
      };

      fetchData();
    }
  });

  return (
    <div>
      <img src={data?.url} />
    </div>
  );
}

export default App;
