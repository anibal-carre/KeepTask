const MoonIcon = ({ setTheme }) => {
  return (
    <svg
      className="text-[28px] text-blue-400 ml-2 mr-2 cursor-pointer"
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      onClick={() => setTheme("dark")}
    >
      <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278z" />
    </svg>
  );
};

export default MoonIcon;
