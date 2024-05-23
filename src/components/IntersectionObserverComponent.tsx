"use client";
import {useEffect} from "react";

export default function IntersectionObserverComponent({
  elements,
}: {
  elements: {id: string; className: string}[];
}) {
  useEffect(() => {
    const observers = elements.map(
      ({id, className}: {id: string; className: string}) => {
        const element = document.getElementById(id);

        if (!element) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              element.classList.add(className);
              observer.disconnect(); // Stop observing after the animation is applied
            }
          },
          {
            threshold: 0.1, // Trigger when 10% of the element is in view
          },
        );

        observer.observe(element);
        return observer;
      },
    );

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [elements]);

  return null;
}
