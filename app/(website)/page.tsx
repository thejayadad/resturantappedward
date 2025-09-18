
import NoticeBar from "@/_components/header/notice-bar";
import OrderingHeader from "@/_components/header/ordering-header";
import Divider from "@/_components/header/divider";

export default function Home() {
  return (
    <div className="h-[542px]">
      <NoticeBar />
      <OrderingHeader />
      <Divider />
    </div>
  );
}
