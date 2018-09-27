import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
