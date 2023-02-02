import CompanyCards from '../../functionsComponents/CompanyCards/CompanyCards'
import OilProduct from '../../functionsComponents/OilProduct/OilProduct'
import PeopleAboutAs from '../../functionsComponents/PeoplesAboutUs/PeopleAboutAs'
import classes from './Main.module.scss'
import about from "../About Us/About.module.scss";

function Main() {
  return (
    <main className={classes.main}>
      <div className={classes.cardFullContent}>
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

      <div className={classes.aboutCompany}>
        <div className={classes.triangeTop}>

        </div>

        <div className={classes.aboutCompanyContent}>
          <h2>О компании</h2>

          <div className={classes.contentAbout}>
            <div className={classes.imageAbout}>
              <img src="/Mask group.png" alt="" />
            </div>

            <div className={classes.textAbout}>
              <h6>«Quality Oil» – ваш надёжный партнёр в поставках
                смазочных материалов с 1994 г.</h6>

              <p>ООО «Ойл-Форби» начала свою деятельность в 1994 году с поставок автозапчастей и аксессуаров для автомобилей.</p>

              <p>
                С тех пор мы всё также остаемся верны убеждениям, что у дистрибьютора на первом месте  должны стоять хорошая цена, контроль качества, а уже потом прыбль
              </p>

              <p>Почти 30 лет наша компания обеспечивает людей качественным и надежными запчастями, маслом и фильтрами</p>
              <div className={classes.aboutDataNumber}>
                <p className={classes.aboutDataNumberP}><span className={classes.aboutDataNumberInfo}>19</span> <span className={classes.aboutDataNumberMoreInfo}>тыс</span><br /> Поставок</p>
                <p className={classes.aboutDataNumberP}><span className={classes.aboutDataNumberInfo}>29</span><br /> Лет На рынке</p>
                <p className={classes.aboutDataNumberP}><span className={classes.aboutDataNumberInfo}>1,2</span> <span className={classes.aboutDataNumberMoreInfo}>млн</span><br /> Довольных клиентов</p>
                <p className={classes.aboutDataNumberP}><span className={classes.aboutDataNumberInfo}>7</span><br /> Стран присутствия</p>
              </div>

              <button className={classes.aboutCompanyButton}>Больше о компании</button>
            </div>

          </div>
        </div>

        <div className={classes.triangeBottom}>

        </div>
      </div>

      <div className={classes.catalog}>
        <h2>Каталог</h2>

        <div className={classes.catalogContent}>
          <div className={classes.settings}>
            <div className={classes.selectionSetting}>
              <h5>Настройка выбора</h5>

              <div className={classes.filter}>
                <div className={classes.oneFilter}>
                  <p>Производители</p>
                  <select>
                    <option value="" >Все</option>
                  </select>
                </div>

                <div className={classes.oneFilter}>
                  <p>Вязкость</p>
                  <select>
                    <option value="" >Вся</option>
                  </select>
                </div>

                <div className={classes.oneFilter}>
                  <p>NIGI</p>
                  <select>
                    <option value="" >Вся</option>
                  </select>
                </div>

                <div className={classes.oneFilter}>
                  <p>Фасовка</p>
                  <select>
                    <option value="" >Вся</option>
                  </select>
                </div>

                <div className={classes.oneFilter}>
                  <p>Назначение</p>
                  <select>
                    <option value="" >Любое</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.goodsWall}>
            <button className={classes.oilCategoryFilter}>
              <p><i className="fa-solid fa-bars fa-xl" />Масла для легкомортного транспорта<i className="fa-sharp fa-solid fa-chevron-down fa-xl" /></p>
            </button>
            <div className={classes.oilCategory}>
              <OilProduct
                image='./oil_product_1.png'
                name='Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое'
                number='1'
                volume='4л'
                art='21341'
              />
              <OilProduct
                image='./oil_product_1.png'
                name='Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое'
                number='1'
                volume='4л'
                art='21341'
              /><OilProduct
                image='./oil_product_1.png'
                name='Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое'
                number='1'
                volume='4л'
                art='21341'
              /><OilProduct
                image='./oil_product_1.png'
                name='Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое'
                number='1'
                volume='4л'
                art='21341'
              /><OilProduct
                image='./oil_product_1.png'
                name='Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое'
                number='1'
                volume='4л'
                art='21341'
              />
            </div>
            <div className={classes.goodsWailPages}>
              1 2 3 ... 4 След
            </div>
          </div>
        </div>
      </div>

      <div className={classes.consultation}>
        <div className={classes.consultationInfo}>
          <h2>Требуется консультация?</h2>
          <p className={classes.p1}>Оставьте заявку и мы проконсультируем Вас по любым вопросам</p>
          <button>Заказать звонок</button>
          <p className={classes.p2}>или позвоните по телефону<a href=''>+780012334567</a></p>
        </div>
      </div>

      <div className={classes.manufacturers}>
        <h2>Производители</h2>
        <div className={classes.materials}>
          <p>Смазочные материалы</p>
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
          <p>Фильтры</p>
          <CompanyCards image={'/company.png'} name='Castrol' body='производитель смазочных материалов. К ним относятся моторные масла, трансмиссионные масла и другие специальные продукты.' />
        </div>
      </div>

      <div className={about.theyTalkAboutUs}>
        <p>О нас говорят</p>
        <div className={about.theyTalkAboutUsText}>
          <div className={about.arrow}>
            <i className="fa-solid fa-chevron-left" />
          </div>
          <PeopleAboutAs
            name="Евгений Кузьмин"
            image="/person.png"
            title="директор ANK group"
            body="У предварительного исследования в UX проектах может быть много разных причин, но все они
            направлены на поиск решения проблемы и достижение необходимых результатов."
          />
          <div className={about.arrow}>
            <i className="fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>

      <div className={classes.delivery}>
        <div className={classes.deliveryCardDiv}>
          <div className={classes.deliveryCard}>
            <div className={classes.deliveryCardLeft}>
              <h3>Доставка по всей России и СНГ</h3>
              <p>Доставка в любую точку России</p>
            </div>
            <div className={classes.deliveryCardRight}>
              <img src="/map.png" alt="map" />
            </div>
          </div>
        </div>

        <div className={classes.ways}>
          <p>Способы доставки</p>

          <div className={classes.waysContent}>
            <div className={classes.deliveryCompany}>
            <div className={classes.oneWayDelivery}>
                <a href="">СДЭК</a>
                <div className={classes.oneWayDeliveryPhoto}><img src="/sdek.png" alt="photo" /></div>
              </div>
              <div className={classes.oneWayDelivery}>
                <a href="">СДЭК</a>
                <div className={classes.oneWayDeliveryPhoto}><img src="/sdek.png" alt="photo" /></div>
              </div>
              <div className={classes.oneWayDelivery}>
                <a href="">СДЭК</a>
                <div className={classes.oneWayDeliveryPhoto}><img src="/sdek.png" alt="photo" /></div>
              </div>
              <div className={classes.oneWayDelivery}>
                <a href="">СДЭК</a>
                <div className={classes.oneWayDeliveryPhoto}><img src="/sdek.png" alt="photo" /></div>
              </div>
              <div className={classes.oneWayDelivery}>
                <a href="">СДЭК</a>
                <div className={classes.oneWayDeliveryPhoto}><img src="/sdek.png" alt="photo" /></div>
              </div>
              <div className={classes.oneWayDelivery}>
                <a href="">СДЭК</a>
                <div className={classes.oneWayDeliveryPhoto}><img src="/sdek.png" alt="photo" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main