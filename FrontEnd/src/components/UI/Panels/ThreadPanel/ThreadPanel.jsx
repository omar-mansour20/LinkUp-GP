import { useSelector } from "react-redux";

function ThreadPanel() {
  const { threadPanel } = useSelector((state) => state.chatPanel);
  if (!threadPanel) return null;
  return <div>ThreadPanel</div>;
}

export default ThreadPanel;
