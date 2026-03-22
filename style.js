tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#10131a",
        "outline": "#849396",
        "tertiary-container": "#d0d0d0",
        "error": "#ffb4ab",
        "on-secondary-fixed-variant": "#6200bc",
        "primary": "#c3f5ff",
        "on-secondary-container": "#d5b5ff",
        "on-secondary": "#450086",
        "inverse-primary": "#006875",
        "on-tertiary": "#2f3131",
        "on-primary-container": "#00626e",
        "error-container": "#93000a",
        "on-surface-variant": "#bac9cc",
        "surface-container": "#1d2026",
        "primary-fixed-dim": "#00daf3",
        "inverse-surface": "#e1e2eb",
        "surface-variant": "#32353c",
        "on-secondary-fixed": "#290055",
        "on-background": "#e1e2eb",
        "tertiary-fixed": "#e2e2e2",
        "on-tertiary-container": "#575959",
        "primary-fixed": "#9cf0ff",
        "on-error": "#690005",
        "surface-container-highest": "#32353c",
        "secondary-fixed": "#eddcff",
        "on-primary-fixed-variant": "#004f58",
        "surface-bright": "#363940",
        "on-primary-fixed": "#001f24",
        "secondary-fixed-dim": "#d8b9ff",
        "surface": "#10131a",
        "outline-variant": "#3b494c",
        "surface-container-lowest": "#0b0e14",
        "on-error-container": "#ffdad6",
        "secondary-container": "#6e06d0",
        "surface-tint": "#00daf3",
        "tertiary": "#ececec",
        "background": "#10131a",
        "secondary": "#d8b9ff",
        "on-tertiary-fixed-variant": "#454747",
        "on-surface": "#e1e2eb",
        "inverse-on-surface": "#2e3037",
        "tertiary-fixed-dim": "#c6c6c7",
        "primary-container": "#00e5ff",
        "on-tertiary-fixed": "#1a1c1c",
        "on-primary": "#00363d",
        "surface-container-high": "#272a31",
        "surface-container-low": "#191c22"
      },
      fontFamily: {
        "headline": ["Space Grotesk"],
        "body": ["Inter"],
        "label": ["Manrope"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const starColors = [
    "#c3f5ff", // cyan
    "#d8b9ff", // purple
    "#ffffff", // white
    "#ffb4ab", // soft pink
    "#a8ffce"  // mint
  ];

  for(let i = 0; i < 200; i++) {
    const isBright = Math.random() < 0.1; // 10% bright stars
    const extraClass = isBright ? " shiny" : "";
    const starSize = (Math.random() * 2 + 1).toFixed(2);
    const top = (Math.random() * 100).toFixed(2);
    const left = (Math.random() * 100).toFixed(2);
    const duration = (Math.random() * 3 + 2).toFixed(2);
    const delay = (Math.random() * 5).toFixed(2);
    const color = starColors[Math.floor(Math.random() * starColors.length)];

    console.log("before if: " + i)
    $(".star-field").append("<div class='star" + extraClass + "' style='top: " + top + "%; left: " + left + "%; width: " + starSize + "px; height: " + starSize + "px; --duration: " + duration + "s; animation-delay: " + delay + "s; --star-color: " + color + ";'></div>");

    if(i <= 100) {
      console.log("inside if: " + i)
      $(".star-field").append("<div class='falling-star" + extraClass + "' style='top: " + top + "%; left: " + left + "%; --fall-duration: " + duration + "s; animation-delay: " + delay + "s; --star-color: " + color + ";'></div>");
    }
  }

  
  $(".comms-btn").on("click", function(e) {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=m.rilabagus@gmail.com&su=Let%27s%20work%20together&body=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank');
  });

    $(".git-btn").on("click", function(e) {
    e.preventDefault();
    window.open('https://github.com/rilabagus', '_blank');
  });
});

