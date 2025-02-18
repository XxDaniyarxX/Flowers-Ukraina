import { useState, useEffect } from "react";
import "./styles/profile.scss";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    lastName: "",
    email: "",
    avatar: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = { ...userData, avatar: reader.result };
        setUserData(updatedData);
        localStorage.setItem("user", JSON.stringify(updatedData));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="avatar-container">
          <img
            src={userData.avatar || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="avatar"
          />
          {isEditing && (
            <label className="avatar-upload">
              <input type="file" accept="image/*" onChange={handleAvatarChange} />
              📷
            </label>
          )}
        </div>

        <h1 className="username">{userData.username || "User"}</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          disabled={!isEditing}
          className="profile-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className="profile-input"
        />

        <button onClick={handleEditToggle} className="edit-btn">
          {isEditing ? "Сохранить" : "Редактировать профиль"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
