// import { useSelector } from 'react-redux';
// import { useGetTestsQuery } from '../../store/services/Tests';
import './Home.css'
import Quiz from '../../components/Quiz/Quiz';
import { useState } from 'react';

function Home() {
  const [quizStart, setQuizStart] = useState<boolean>(true)


  return (
    <div className='home-page'>
      <div>
        {quizStart && <div className='start-container'>
          <button className='btn' onClick={() => setQuizStart(false)}>Start quiz</button>
        </div>}
        {!quizStart && <Quiz />}
      </div>
    </div>
  );
}

export default Home;