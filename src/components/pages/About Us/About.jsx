import PeopleAboutAs from '../../functionsComponents/PeoplesAboutUs/PeopleAboutAs'
import about from './About.module.scss'

function About() {

  return (
    <div className={about.about}>
      <p>О компании</p>
      <div className={about.aboutData}>
        <div className={about.aboutDataText}>
          <h2>«Quality Oil» –<br /> ваш надёжный партнёр в<br /> поставках<br /> смазочных материалов с 1994 г.</h2>
          <p>ООО «Ойл-Форби» начала свою деятельность<br /> в 1994 году с поставок автозапчастей<br /> и аксессуаров для автомобилей.</p>
        </div>
        <div className={about.aboutDataNumber}>
          <div className={about.aboutDataNumberTop}>
            <p><span className={about.aboutDataNumberInfo}>19</span> <span className={about.aboutDataNumberMoreInfo}>тыс</span><br /> Поставок</p>
            <p><span className={about.aboutDataNumberInfo}>29</span><br /> Лет На рынке</p>
          </div>
          <div className={about.aboutDataNumberBottom}>
            <p><span className={about.aboutDataNumberInfo}>1,2</span> <span className={about.aboutDataNumberMoreInfo}>млн</span><br /> Довольных клиентов</p>
            <p><span className={about.aboutDataNumberInfo}>7</span><br /> Стран присутствия</p>
          </div>
        </div>
      </div>
      <div className={about.aboutMission}>
        <img src='/Gaz.png' alt='Oil' />
        <div className={about.aboutMissionText}>
          <p>Наша миссия — делать жизнь людей проще<br /> и лучше</p>
          <div className={about.aboutMissionMoreText}>
            <p>Вы получаете масла ведущих<br /> производителей в сжатые<br /> сроки и по доступной<br /> стоимости.</p>
            <p>Мы предпочитаем делать<br /> простые, удобные схемы<br /> сотрудничества, которые<br /> прозрачны и понятны.</p>
            <p>Наши продукты только<br /> высокого уровня, что<br /> отмечается международными<br /> экспертами.</p>
          </div>
        </div>
      </div>
      <div className={about.theyTalkAboutUs}>
        <p>О нас говорят</p>
        <div className={about.theyTalkAboutUsText}>
          <div className={about.arrow}>
            <i className="fa-solid fa-chevron-left" />
          </div>

          <PeopleAboutAs
            name='Евгений Кузьмин'
            image='/person.png'
            title='директор ANK group'
            body='У предварительного исследования в UX проектах может быть много разных причин, но все они
            направлены на поиск решения проблемы и достижение необходимых результатов.'
          />

          <div className={about.arrow}>
            <i className="fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>
      <div className={about.lastNews}>
        <p>Последние новости</p>
        <div className={about.lastNewsInfo}>
          <div>
            <div className={about.lastNewsInfoElement}>
              <img src='NewsFirst.png' alt='1' />
              <p>Когда нужно менять<br /> масло в машине?</p>
              <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
              <a href='#'>Подробнее...</a>
              <span>27/01/23</span>
            </div>
            <div className={about.lastNewsInfoElement}>
              <img src='NewsTwo.png' alt='1' />
              <p>Правильный уход<br /> за машиной зимой</p>
              <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
              <a href='#'>Подробнее...</a>
              <span>27/01/23</span>
            </div>
          </div>
          <div>
            <div className={about.lastNewsInfoElement}>
              <img src='NewsThree.png' alt='1' />
              <p>Какое масло<br /> подобрать зимой</p>
              <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
              <a href='#'>Подробнее...</a>
              <span>27/01/23</span>
            </div>
            <div className={about.lastNewsInfoElement}>
              <img src='NewsFour.png' alt='1' />
              <p>Что делать если<br /> встал на трассе</p>
              <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
              <a href='#'>Подробнее...</a>
              <span>27/01/23</span>
            </div>
          </div>
          <div>
            <div className={about.lastNewsInfoElement}>
              <img src='NewsFive.png' alt='1' />
              <p>Что делать если<br /> протекает масло</p>
              <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
              <a href='#'>Подробнее...</a>
              <span>27/01/23</span>
            </div>
            <div className={about.lastNewsInfoElement}>
              <img src='NewsSix.png' alt='1' />
              <p>ТОП 10 худших<br /> популярных масел</p>
              <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
              <a href='#'>Подробнее...</a>
              <span>27/01/23</span>
            </div>
          </div>
        </div>
        <button>Больше новостей</button>
      </div>
    </div>
  )
}

export default About
