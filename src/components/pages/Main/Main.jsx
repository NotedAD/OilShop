import classes from './Main.module.scss'

function Main() {
  return (
    <main className={classes.main}>
      <div className={classes.content}>
        <div className={classes.arrow}>
          <i className="fa-solid fa-chevron-left" />
        </div>

        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.leftContent}>
              <div className={classes.leftText}>
                <h2>
                  Специальные смазочные материалы Matrix
                </h2>
                <p>Для каждого из направлений мы собрали типовые продукты.
                  Мы рекомендуем связаться с нашими специалистами чтобы подобрать правильный продукт.</p>
                  <button className={classes.button}>Узнать больше</button>
              </div>
            </div>

            <div className={classes.rightContent}>
              <div className={classes.barrels}></div>
            </div>
          </div>
          <div className={classes.circles}>
            <i className='activeCircle'></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

        <div className={classes.arrow}>
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
      
    </main>
  )
}
export default Main