import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Outlet, useLocation } from "react-router";
import TailwindSiteHeader from "../components/TailwindSiteHeader";
import TailwindSiteFooter from "../components/TailwindSiteFooter";
import { useEffect, useState } from "react";

export function Root() {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      {/* <SiteHeader /> */}

      {location.pathname !== "/" ? <TailwindSiteHeader /> : ""}
      <main className="flex flex-col">
        <Outlet />
      </main>
      <TailwindSiteFooter />
    </div>
  );
}
