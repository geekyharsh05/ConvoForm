import { useEffect } from "react";
import NProgress from "nprogress";

export function TopProgressBar({ totalProgress }: { totalProgress: number }) {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  useEffect(() => {
    NProgress.set(totalProgress / 100);
  }, [totalProgress]);

  return null;
}