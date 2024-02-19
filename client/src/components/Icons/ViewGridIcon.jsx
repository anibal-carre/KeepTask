const ViewGridIcon = ({ setStyle }) => {
  return (
    <svg
      onClick={() => setStyle("flex")}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M3 11h8V3H3m2 2h4v4H5m8 12h8v-8h-8m2 2h4v4h-4M3 21h8v-8H3m2 2h4v4H5m8-16v8h8V3m-2 6h-4V5h4z" />
    </svg>
  );
};

export default ViewGridIcon;
