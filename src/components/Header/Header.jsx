import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.icon}>
          <img src="/icon.png" alt="icon" />
        </div>

        <div className={classes.contentInfo}>
          <div className={classes.headerMenu}>
            <div className={classes.headerMenuContent}>
              <button className={classes.catalog}>
                <p> <img src="/burger.png" alt="burger" /> Каталог <img src="/arrow.png" alt="arrow" /></p>
              </button>

              <div className={classes.search}>
                <img src="/search.png" alt="search" />
                <input type="text" placeholder='Найти товар' />
              </div>

              <div className={classes.buying}>
                <img src="/buying.png" alt="buying" />
                <div className={classes.circle}>
                  {2}
                </div>
              </div>
              <p className={classes.contactsInfoMail}><img src='/Composing Mail.png' alt='Mail' />qualityoil@mail.ru</p>
              <p className={classes.contactsInfoPhone}><img src='/Ringer Volume.png' alt='Phone' />+78002345634</p>
            </div>
          </div>
          <div className={classes.menu}>
            <nav className={classes.nav}>
              <ul className={classes.ul}>
                <li>Главное</li>
                <li>О компании</li>
                <li>Производители <img src="/arrow.png" alt="arrow" /></li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li>Новости</li>
              </ul>
            </nav>
            <div className={classes.buttonDiv}>
              <button className={classes.button}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
