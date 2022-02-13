/*
 * @Author: jiashuangxi
 * @Date: 2021-12-02 22:56:52
 * @LastEditors: jiashuangxi
 * @LastEditTime: 2021-12-24 19:15:56
 * @Describe: 
 */
import {BrowserRouter as Router,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <Router>
          {/* <Link to="/preview">vue应用</Link> */}
          <Link to="/vue">vue应用</Link>
        </Router>
         {/* 切换导航， 将微应用渲染container容器中 */}

        <div id="container"></div>
    </div>
  );
}



export default App;
