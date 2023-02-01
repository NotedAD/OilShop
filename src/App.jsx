import Header from './components/Header/Header'
import About from './components/pages/About Us/About'
import Footer from './components/Footer/Footer'
import Main from './components/pages/Main/Main'
import News from './components/pages/News/News'
import PageArticle from './components/pages/Page Article/PageArticle'

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <News />
      <PageArticle />
      <About />
      <Footer />
    </div>
  )
}

export default App
