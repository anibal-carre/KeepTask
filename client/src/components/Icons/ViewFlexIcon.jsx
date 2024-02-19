const ViewFlexIcon = ({ setStyle }) => {
  return (
    <svg
      onClick={() => setStyle("grid")}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M21 13H3a1 1 0 00-1 1v6a1 1 0 001 1h18a1 1 0 001-1v-6a1 1 0 00-1-1m-1 6H4v-4h16m1-12H3a1 1 0 00-1 1v6a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1m-1 6H4V5h16z" />
    </svg>
  );
};

export default ViewFlexIcon;
