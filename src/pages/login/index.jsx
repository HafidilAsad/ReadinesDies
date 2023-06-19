import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { counter, loading } = useSelector((state) => state.counter);
  const { umur } = useSelector((state) => state.user);
  return (
    <>
      <p>{umur}</p>
    </>
  );
};

export default App;
