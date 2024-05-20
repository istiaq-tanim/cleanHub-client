import Sidebar from "../components/UI/Dashboard/Sidebar";
import ToggleButton from "../components/UI/Dashboard/ToggleButton";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open relative">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
        <div className="flex-none lg:hidden absolute top-1 left-2">
          <ToggleButton></ToggleButton>
        </div>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default DashBoardLayout;
