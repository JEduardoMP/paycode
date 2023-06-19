// Icons
import CallMadeIcon from "@mui/icons-material/CallMade";
import SouthEastIcon from "@mui/icons-material/SouthEast";
// React
import { FC } from "react";

// Interfaces
import { IIndicators } from "../interfaces";

// Styles
import { SIndicators } from "./styles/indicators.styles";

const Indicators: FC<IIndicators> = ({
  indicator,
  value,
  percentage,
  earnings,
}) => {
  return (
    <SIndicators earnings={earnings || false}>
      <div className="indicator-percentage">
        <p>
          <strong>{indicator}</strong>
        </p>
        {percentage && (
          <div className="percentage">
            <p>
              {earnings ? <CallMadeIcon /> : <SouthEastIcon />}
              {percentage}%
            </p>
          </div>
        )}
      </div>
      <h2>
        {percentage ? (
          <>
            ${value} <span>MXN</span>
          </>
        ) : (
          <>{value}</>
        )}
      </h2>
    </SIndicators>
  );
};
export default Indicators;
