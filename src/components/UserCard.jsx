/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UserCard({
  userName,
  description,
  profileImg,
  isAdminUser,
}) {
  const [isFollowing, setIsFollowing] = useState(false);

  const textButton = isFollowing ? "+ Seguir" : "- Eliminar";

  const classCard = isAdminUser
    ? "Main__Home--Card Admin"
    : "Main__Home--Card";
    
  return (
    <section className={classCard}>
      <picture className="Main__Home--Card--Picture">
        <img src={profileImg} alt="Imagen del usuario" />
      </picture>
      <div className="Main__Home--Card--TextDetails">
        <p className="Main__Home--Card-_TextDetails--Name">{userName}</p>
        <p className="Main__Home--Card-_TextDetails--Description">
          {description}
        </p>
      </div>
      <button
        className="Main__Home--Card--Button"
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {textButton}
      </button>
    </section>
  );
}
