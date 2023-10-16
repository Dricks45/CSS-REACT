import HeaderWeb from './components/HeaderWeb';
import Datas from './assets/Datas';
import Card from './components/Card';
import './style.scss';


function App() {

  const data = Datas[0];

  return (
    <>
      <HeaderWeb/>

      <section>
        <Card data={data} />
      </section>
    </>
  )
}

export default App;
