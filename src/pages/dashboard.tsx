// React
import { FC, Fragment, useContext, useEffect, useState } from "react";
// React Router
import { useNavigate } from "react-router-dom";

// API
import { reportAPI } from "../api/report";
import { userAPI } from "../api/user.api";
// Components
import ChartContainer from "../components/chartContainer";
import Indicators from "../components/indicators";
import LogoutButton from "../components/logoutButton";
// Context
import LoadingContext from "../context/loading";
// Helpers
import { reportsStructure } from "../helpers/reportsStructure";

// Styless
import { SDashboard } from "./styles/dashboard.styles";

const Dashboard: FC = () => {
  const { dispatch } = useContext(LoadingContext);
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem("token") || "{}");

  const [name, setName] = useState("");
  const [indicators, setIndicators] = useState([]);
  const [chart, setChart] = useState([]);

  useEffect(() => {
    dispatch({ type: "LOADING-TRUE" });
    userAPI(token)
      .then((res) => {
        const { result } = res;
        setName(`${result.name} ${result.paternalSurname}`);
      })
      .finally(() => {
        dispatch({ type: "LOADING-FALSE" });
      });
    dispatch({ type: "LOADING-TRUE" });
    reportAPI(token)
      .then((res: any) => {
        const val: any = reportsStructure(res);
        setIndicators(val);
        setChart(res.result.revenuePerHour);
      })
      .finally(() => {
        dispatch({ type: "LOADING-FALSE" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    dispatch({ type: "LOADING-TRUE" });
    localStorage.removeItem("token");
    dispatch({ type: "LOADING-FALSE" });
    navigate("/", { replace: true });
  };
  return (
    <SDashboard>
      <section className="dashboard-main-container">
        <div className="user-logout">
          <h2>Bienvenido {name}</h2>
          <LogoutButton onClick={handleLogout} />
        </div>
        <h3>
          Reporte de <span>Hoy</span>
        </h3>
        <div className="report-container">
          <ChartContainer data={chart} />
          <div className="indicators-container">
            {indicators?.map((elmt: any) => (
              <Fragment key={elmt.indicator}>
                <Indicators
                  indicator={elmt.indicator}
                  value={elmt.value}
                  percentage={elmt.percentage}
                  earnings={elmt.earnings}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </SDashboard>
  );
};
export default Dashboard;
