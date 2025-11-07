import PrivatesViews from './components/routes/PrivatesViews';
import PublicViews from './components/routes/PublicViews';
import ScrollToTop from './components/commons/ScrollTop.jsx';

function App() {

  return (
    <div>
      <ScrollToTop />
      <PrivatesViews />
      <PublicViews />
    </div>
  )
}

export default App
