"use client";

import { useEffect } from "react";

/**
 * Single IntersectionObserver for every `[data-reveal]` element.
 * A MutationObserver picks up nodes added after first paint (e.g. “See more”).
 */
export default function RevealRoot() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.setAttribute("data-reveal-ready", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    const watch = (node: ParentNode | Element) => {
      if (node instanceof Element && node.hasAttribute("data-reveal")) {
        observer.observe(node);
      }
      for (const target of node.querySelectorAll("[data-reveal]:not(.is-visible)")) {
        observer.observe(target);
      }
    };

    watch(document);

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const added of record.addedNodes) {
          if (added instanceof Element || added instanceof DocumentFragment) {
            watch(added);
          }
        }
      }
    });

    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.removeAttribute("data-reveal-ready");
    };
  }, []);

  return null;
}
