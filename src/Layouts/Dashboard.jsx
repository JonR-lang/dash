import LastOrders from "../Widgets/LastOrders";
import PerformanceWidget from "../Widgets/PerformanceWidget";
import SalesTrend from "../Widgets/SalesTrend";
import TopPlatform from "../Widgets/TopPlatform";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

const Dashboard = ({ showSideBar, setShowSideBar }) => {
  return (
    <div>
      <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <MobileHeader />
      <div className='grid md:grid-custom grid-cols-1 p-3 gap-2 relative'>
        <SalesTrend />
        <PerformanceWidget />
        <LastOrders />
        <TopPlatform />
      </div>
    </div>
  );
};

export default Dashboard;
