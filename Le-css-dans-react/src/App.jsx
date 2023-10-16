import { useState } from 'react';
import HeaderWeb from './components/HeaderWeb';
import Datas from './assets/Datas';
import Card from './components/Card';
import ChooseCard from './components/ChooseCard';
import './style.scss';


function App() {
  const [chooseCard, setChooseCard] = useState(0);

  const handleFormer = () => {
    setChooseCard(chooseCard - 1)
  };

  const handleNext = () => {
    setChooseCard(chooseCard + 1)
  };

  const data = Datas[chooseCard];

  return (
    <>
      <HeaderWeb/>

      <section className='body'>
        <Card data={data} />
        <div>
          <ChooseCard
          chooseCard={chooseCard}
          handleFormer={handleFormer}
          handleNext={handleNext}
          data={Datas} />
        </div>
      </section>
      <footer>&copy; Cédric Bodereau 2023</footer>
    </>
  )
}

export default App;
