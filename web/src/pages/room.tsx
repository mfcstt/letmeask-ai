import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  if (!params.roomId) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Room ID: {params.roomId}</h1>
      <p>This is the room page.</p>
      <p>More content can be added here.</p>
    </div>
  );
}
