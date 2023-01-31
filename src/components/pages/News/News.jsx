import news from './News.module.scss'

function News() {
  return (
    <div className={news.lastNews}>
        <p>Новости</p>
        <div className={news.filter}>
            <p>Сортировать:<br />
                <select>
                    <option>Сначала новые</option>
                    <option>Сначала стары</option>
                    <option>По популярности</option>
                </select>
            </p>
            <p>Тема:<br />
                <select>
                    <option>Все</option>
                    <option>Масло</option>
                    <option>Кто на самом деле такой этот КИРИЛЛ?</option>
                </select>
            </p>
        </div>
        <div className={news.lastNewsInfo}> 
            <div>
                <div className={news.lastNewsInfoElement}>
                    <img src='NewsFirst.png' alt='1'/>
                    <p>Когда нужно менять<br /> масло в машине?</p>
                    <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
                    <a href='#'>Подробнее...</a>
                    <span>27/01/23</span>
                </div>
                <div className={news.lastNewsInfoElement}>
                    <img src='NewsTwo.png' alt='1'/>
                    <p>Правильный уход<br /> за машиной зимой</p>
                    <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
                    <a href='#'>Подробнее...</a>
                    <span>27/01/23</span>
                </div>
            </div>
            <div>
                <div className={news.lastNewsInfoElement}>
                    <img src='NewsThree.png' alt='1'/>
                    <p>Какое масло<br /> подобрать зимой</p>
                    <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
                    <a href='#'>Подробнее...</a>
                    <span>27/01/23</span>
                </div>
                <div className={news.lastNewsInfoElement}>
                    <img src='NewsFour.png' alt='1'/>
                    <p>Что делать если<br /> встал на трассе</p>
                    <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
                    <a href='#'>Подробнее...</a>
                    <span>27/01/23</span>
                </div>
            </div>
            <div>
                <div className={news.lastNewsInfoElement}>
                    <img src='NewsFive.png' alt='1'/>
                    <p>Что делать если<br /> протекает масло</p>
                    <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
                    <a href='#'>Подробнее...</a>
                    <span>27/01/23</span>
                </div>
                <div className={news.lastNewsInfoElement}>
                    <img src='NewsSix.png' alt='1'/>
                    <p>ТОП 10 худших<br /> популярных масел</p>
                    <p>Сегодня мы подробно<br /> расскажем, когда лучше всего<br /> менять масло в машине...</p>
                    <a href='#'>Подробнее...</a>
                    <span>27/01/23</span>
                </div>
            </div>
        </div>
        <button>Загрузить еще</button>
    </div>    
  )
}
export default News