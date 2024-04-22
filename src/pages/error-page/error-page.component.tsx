import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./error-page.component.scss";

const ErrorPage = () => {
  const { t } = useTranslation();

  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const imageSrc = isMobile
    ? "assets/images/slides/mobile/1.png"
    : "assets/images/slides/extension/1.png";
  return (
    <div className={`error-page ${isMobile ? null : "as-row"}`}>
      <img
        src={imageSrc}
        alt={`${imageSrc}`}
        className={`image ${isMobile ? null : "no-width"}`}
      />
      <div className="content">
        <div className="title">{t("error_404_title")}</div>
        <div className="text">{t("not_found_title")}</div>
        <NavLink className={"text"} to={"/"}>
          {t("back_home_link_title")}
        </NavLink>
      </div>
    </div>
  );
};

export const ErrorPageComponent = ErrorPage;
