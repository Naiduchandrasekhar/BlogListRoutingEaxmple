import './index.css'
import BlogList from '../BlogList/index'

const Home = () => (
  <div className="home-container">
    <div className="profileContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        alt="profile"
        className="image"
      />
      <h1 className="name">Wade Warren</h1>
      <p className="role">Software developer at UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
