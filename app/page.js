"use client";

import React, { useEffect, useState } from "react";

import { Suspense, lazy } from "react";

const Home = lazy(() => import("./home/page"));

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Не рендерим на сервере

  return (
    <div >
      <Suspense fallback={<p className="w-[380px] mx-auto text-[18px] mt-[80px]">Загрузка...</p>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
