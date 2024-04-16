import { ProgressBarComponent } from "./progress-bar.component";

interface Props {
  src: string;
  username: string;
  type: "main" | "floating";
}

const WelcomeAvatar = ({ src, username, type }: Props) => {
  return (
    <div className={`welcome-avatar-container ${type}`}>
      <div className={`welcome-label-avatar-container ${type}`}>
        {type === "main" && <div className="welcome-label">Welcome</div>}
        <div className="avatar-container">
          <img
            src={src}
            className={"user-picture"}
            alt="hive-username-avatar"
          />
          <div className="username-label">@{username}</div>
        </div>
        {type === "floating" && <ProgressBarComponent value={100} />}
      </div>
    </div>
  );
};

export const WelcomeAvatarComponent = WelcomeAvatar;
