import { useEffect, useMemo, useRef, useState } from "react";
import { Howl } from "howler";

// maps node sizes to CSS values
const nodeSizes = {
  large: "timeline-node--large",
  medium: "timeline-node--medium",
  small: "timeline-node--small",
};

export default function Timeline({ nodes = [] }) {
// activeId is the id of the currently open node, or null if no node is open
  const [activeId, setActiveId] = useState(null);
  const soundRef = useRef(null);

// activeNode is the node object corresponding to the activeId, or null if no node is open
  const activeNode = useMemo(
    () => nodes.find((node) => node.id === activeId) ?? null,
    [activeId, nodes],
  );

// useEffect to listen if escape key is pressed, closes the overlay if it is pressed.
// also locks scrolling of the background while a node is open, only restores scrolling
// when the overlay is closed.
  useEffect(() => {
    if (!activeNode) return undefined;

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeNode]);

  // useEffect to clean up the sound when the component unmounts, stops and unloads
  useEffect(
    () => () => {
      soundRef.current?.stop();
      soundRef.current?.unload();
      soundRef.current = null;
    },
    [],
  );
  // function to play the sound of a node
  // stops and unloads any previous sound before playing the new one
  function playNodeSound(src) {
    if (!src) return;

    soundRef.current?.stop();
    soundRef.current?.unload();

    // creates a new howl instance for the new sound
    const sound = new Howl({
      src: [src],
      html5: true,  
      preload: true, // preloads the sound to reduce latency
      onend: () => { // unloads sound when it ends
        sound.unload();
        if (soundRef.current === sound) { // clears reference to sound if current sound
          soundRef.current = null;
        }
      },
      onstop: () => { // unloads sound when it stops
        sound.unload();
        if (soundRef.current === sound) {
          soundRef.current = null;
        }
      },
      onloaderror: () => { // unloads sound if error when loading
        if (soundRef.current === sound) {
          soundRef.current = null;
        }
      },
      onplayerror: () => { // unloads sound if error when playing
        if (soundRef.current === sound) {
          soundRef.current = null;
        }
      },
    });

    soundRef.current = sound;
    sound.play();
  }


  // renders the actual timeline + nodes + overlay if a node is open
  return (
    <section className="timeline-shell" aria-label="timeline">
      <div className="timeline-track">
        {/* renders each node in the timeline. */}
        {nodes.map((node, index) => {
          // determines the size and side of the node based on its index and size property
          const sizeClass = nodeSizes[node.size] ?? nodeSizes.medium;
          // alternate sides for each node
          const sideClass = index % 2 === 0 ? "timeline-item--left" : "timeline-item--right";
          // summary of the node, or a placeholder if none is provided
          const shortDescription = node.summary ?? "Short description placeholder.";

          return (
            // renders a single node in the timeline
            <div key={node.id} className={`timeline-item ${sideClass}`}>
              {/* renders the summary of the node, hidden from screen readers */}
              <aside className="timeline-summary" aria-hidden="true">
                <p>{shortDescription}</p>
              </aside>

              <button
                type="button"
                className={`timeline-node ${sizeClass}`}
                onClick={() => {
                  playNodeSound(node.soundSrc);
                  setActiveId(node.id);
                }}
                // below are accessibility attributes for nodes that open the overlay.
                aria-label={`Open details for ${node.title}`}
                aria-haspopup="overlay"
                aria-expanded={activeNode?.id === node.id}
                aria-controls={`timeline-overlay-${node.id}`}
              >
                <span
                  className={`timeline-node__dot ${node.imageSrc ? "timeline-node__dot--with-image" : ""}`}
                  aria-hidden="true"
                >
                  {/* renders the image inside the node, if provided */}
                  {node.imageSrc && (
                    <img
                      src={node.imageSrc}
                      alt={node.imageAlt ?? `${node.title} preview image`}
                      className="timeline-node__img"
                    />
                  )}
                </span>
              </button>
              <span className="timeline-node__title">{node.title}</span>
            </div>
          );
        })}
      </div>
      {/* renders the overlay with the node details if a node is open */}
      {activeNode && (
        <div
          className="timeline-overlay"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveId(null);
            }
          }}
        >
          {/* renders the overlay with the node details */}
          <article
            id={`timeline-overlay-${activeNode.id}`}
            className="timeline-overlay__panel"
            role="overlay"
            aria-modal="true"
            aria-labelledby={`timeline-overlay-title-${activeNode.id}`}
          >
            <header className="timeline-overlay__header">
              <h3 id={`timeline-overlay-title-${activeNode.id}`}>
                {activeNode.title}
              </h3>
              <button
                type="button"
                className="timeline-overlay__close"
                onClick={() => setActiveId(null)}
                aria-label="Close node details"
              >
                Close
              </button>
            </header>
            {/* renders the content of the node */}
            <div className="timeline-overlay__content">
              <p>{activeNode.content}</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
